import { InMemoryUsersRepo } from '../repository/user'
import { InternalError } from '../../pkg/error'
import { KafkaProducer } from  '../client/kafka/kafka'
import { NotificationMessage } from '../model/kafka'
import { smsTopicName, smsPushNotificationMode, 
          emailNotificationMode, emailTopicName,
          pnNotificationMode, pushNotificationTopicName } from '../globals/globals'

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

    var topicName = NotificationService.getTopicName(notificationMode)
    var messages: NotificationMessage[] = [
      {mode: notificationMode, endpointId: userContactEndpointId, message: message}
    ];
    KafkaProducer.SendBatch(messages, topicName)
    console.log("Successfully pushed message to Kafka messaging queue : ", topicName)
    return null
  }

  public static getTopicName(notification_Mode: string): string {
    switch(notification_Mode) {
      case smsPushNotificationMode:
        return smsTopicName
      case emailNotificationMode:
        return emailTopicName
      case pnNotificationMode:
        return pushNotificationTopicName    
    }
    return ""
  }
}