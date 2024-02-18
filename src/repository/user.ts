import { User} from '../model/user'
import { emailNotificationMode, smsNotificationMode, pnNotificationMode} from '../globals/globals'

export class InMemoryUsersRepo {
  private static users: Map<number, User>
  
  static Init() {
    InMemoryUsersRepo.users = new Map<number, User>
    InMemoryUsersRepo.users.set(2, new User("Harry Potter", "9502272879", "harry.potter@gmail.com", "654C4DB3-3F68-4969-8GF6-80EA16B46EB0"))
    InMemoryUsersRepo.users.set(3, new User("Aragorn", "9502272876", "aragorn@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"))
    InMemoryUsersRepo.users.set(4, new User("Jon Snow", "9502272875", "jon.snow.padavala@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"))
    InMemoryUsersRepo.users.set(5, new User("Benjen Stark", "95023228734", "benjen.stark@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"))
    InMemoryUsersRepo.users.set(6, new User("Robert Baratheon", "66802272878", "robert.baratheon@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"))
  }

  public static IsUserValid(user_id: number): boolean {
    return this.users.has(user_id)
  }

  public static GetUserContactDetails(user_id: number, notification_mode: string): string | undefined{
    console.log("Received notification mode details : ", notification_mode)

    var user = this.users.get(user_id)
    switch(notification_mode) {
      case emailNotificationMode: 
        return user?.email
      case smsNotificationMode: 
        return user?.phoneNumber
      case pnNotificationMode: 
        return user?.deviceTokenId
    }
    return ""
  }
}