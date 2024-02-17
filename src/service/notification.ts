import { InMemoryUsersRepo } from '../repository/user'
import { InternalError } from '../../pkg/error'
import { KafkaProducer } from  '../client/kafka/kafka'
import { NotificationMessage } from '../model/kafka'

export class NotificationService {
  public static SendNotification(userId: number, notificationMode: string, message: string): InternalError | null {
    var isUserValid = InMemoryUsersRepo.IsUserValid(userId)
    if (!isUserValid) {
      return new InternalError("User with provided id not found", 404)
    }

    var userContactEndpointId = InMemoryUsersRepo.GetUserContactDetails(userId, notificationMode)
    if ((userContactEndpointId == undefined) || (userContactEndpointId == "")) {
      return new InternalError("User contact endpoint not found", 404)
    }
    console.log("User contact endpoint : ", userContactEndpointId)

    console.log("Pushing to Kafka messaging queue")
    var topicName = NotificationService.getTopicName(notificationMode)
    var messages: NotificationMessage[] = [
      {mode: notificationMode, endpointId: userContactEndpointId, message: message}
    ];
    KafkaProducer.SendBatch(messages, topicName)
    return null
  }

  public static getTopicName(notification_Mode: string): string {
    switch(notification_Mode) {
      case "sms":
        return "sms_topic"
      case "email":
        return "email_topic"
      case "push_notification":
        return "pn_topic"    
    }
    return ""
  }
}