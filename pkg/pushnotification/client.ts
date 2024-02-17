import { InternalError } from '../error'

export class MockPNClient {
  public static SendPushNotification(deviceTokenId: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("Push notification sent successfully... this only a mock")
    return null
  }
}

export class FirebasePNClient {
  public static SendPushNotification(deviceTokenId: string, message: string): InternalError | null {
    // Code for sending out email
    console.log("Push Notification sent successfully... this is via SendGrid but not fully implemented")
    return null
  }
}