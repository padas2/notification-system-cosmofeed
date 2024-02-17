export class User { 
  constructor(name: string, phoneNumber: string, email: string, deviceTokenId: string) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.email = email
    this.deviceTokenId = deviceTokenId
  }
  name: string
  phoneNumber: string
  email: string
  deviceTokenId: string
}