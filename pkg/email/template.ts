export class EmailTemplateEngine {
  public static GenerateEmailBody(email_id: string, message: string): string {
    console.log(`generating final email message for ${email_id} with message ${message}`)
    // Final message generating logic using Template Engine
    
    var finalMessage = email_id + " : " + message
    console.log("Final message to be sent out : ", finalMessage)
    return finalMessage
  }
}