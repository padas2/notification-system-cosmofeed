import { InternalError } from '../error'

export class MockSmsClient {
  public static SendSms(phone_number: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("SMS sent successfully... this only a mock")
    return null
  }
}

export class TextLocalEmailClient {
  public static SendSms(phone_number: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("SMS sent successfully... this is via TextLocal but not fully implemented")
    return null
  }
}