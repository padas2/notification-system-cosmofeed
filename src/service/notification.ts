import { MockUserRepo } from '../repository/user'
import { InternalError } from '../../pkg/error'

export class NotificationService {
  public static SendNotification(user_id: number, notification_mode: string, message: string): InternalError | null {
    var result = MockUserRepo.IsUserValid(user_id)
    console.log("Is user valid Validation result : ", result)

    var userContactDetails = MockUserRepo.GetUserContactDetails(user_id, notification_mode)
    if (userContactDetails == "") {
      return new InternalError("User details not found", 404)
    }
    console.log("User contact result : ", userContactDetails)

    // Push to Kafka part
    console.log("Push to Kafka messaging queue")
    return null
  }
}