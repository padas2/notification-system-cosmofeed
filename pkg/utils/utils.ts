export class Utilities {
  public static GetJsonBody(message: string | undefined): any {
    if (message == undefined) {
      return null
    }
    return JSON.parse(message)
  }
}
