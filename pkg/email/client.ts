import { InternalError } from '../error'

export class MockEmailClient {
  public static SendEmail(email_id: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("Email sent successfully... this only a mock")
    return null
  }
}

export class SendGridEmailClient {
  public static SendEmail(email_id: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("Email sent successfully... this is via SendGrid but not fully implemented")
    return null
  }
}