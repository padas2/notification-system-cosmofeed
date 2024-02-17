import { MockEmailClient } from '../../../pkg/email/client'
import { EmailTemplateEngine } from '../../../pkg/email/template'
import { Utilities } from '../../../pkg/utils/utils'

export class MessageProcessor {
  public static Process(message: Buffer | null) {
    var messageContentString = message?.toString()
    console.log("Email Message Processor Message JSON Content -- ", messageContentString)

    var jsonBody = Utilities.GetJsonBody(messageContentString)
    var emailEndpointId = jsonBody.endpointId
    var emailMessage = jsonBody.message
    var finalMessage = EmailTemplateEngine.GenerateEmailBody(emailEndpointId, emailMessage)

    MockEmailClient.SendEmail(emailEndpointId, finalMessage)
  }
}