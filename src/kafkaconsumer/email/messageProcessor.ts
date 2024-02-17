import { MockEmailClient } from '../../../pkg/email/client'
import { EmailTemplateEngine } from '../../../pkg/email/template'

export class MessageProcessor {
  public static Process(message: Buffer | null) {
    var messageContentString = message?.toString()
    console.log("Email Message Processor Message JSON Content -- ", messageContentString)

    var jsonBody = MessageProcessor.getJsonBody(messageContentString)
    var emailEndpointId = jsonBody.endpointId
    var emailMessage = jsonBody.message
    var finalMessage = EmailTemplateEngine.GenerateEmailBody(emailEndpointId, emailMessage)

    MockEmailClient.SendEmail(emailEndpointId, finalMessage)
  }

  static getJsonBody(message: string | undefined): any {
    if (message == undefined) {
      return null
    }
    return JSON.parse(message)
  }
}