import { MockSmsClient } from '../../../pkg/sms/client'
import { Utilities } from '../../../pkg/utils/utils'
import { SmsTemplateEngine } from '../../../pkg/sms/template'

export class MessageProcessor {
  public static Process(message: Buffer | null) {
    var messageContentString = message?.toString()
    console.log("SMS Message Processor Message JSON Content -- ", messageContentString)

    var jsonBody = Utilities.GetJsonBody(messageContentString)
    var phoneNumber = jsonBody.endpointId
    var smsMessage = jsonBody.message
    var finalMessage = SmsTemplateEngine.GenerateSmsFinalMessage(phoneNumber, smsMessage)
    MockSmsClient.SendSms(phoneNumber, finalMessage)
  }
}