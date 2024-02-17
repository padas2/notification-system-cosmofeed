import { MockPNClient } from '../../../pkg/pushnotification/client'
import { Utilities } from '../../../pkg/utils/utils'

export class MessageProcessor {
  public static Process(message: Buffer | null) {
    var messageContentString = message?.toString()
    console.log("Push Notification Message Processor Message JSON Content -- ", messageContentString)

    var jsonBody = Utilities.GetJsonBody(messageContentString)
    var deviceTokeId = jsonBody.endpointId
    var pushNotificationMessage = jsonBody.message

    MockPNClient.SendPushNotification(deviceTokeId, pushNotificationMessage)
  }
}