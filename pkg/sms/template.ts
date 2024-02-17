export class SmsTemplateEngine {
  public static GenerateSmsFinalMessage(phoneNumber: string, message: string): string {
    console.log(`generating final SMS message for ${phoneNumber} with message ${message}`)
    // Final message generating logic using Template Engine
    
    var finalMessage = phoneNumber + " : " + message
    console.log("Final message to be sent out : ", finalMessage)
    return finalMessage
  }
}