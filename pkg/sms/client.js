"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextLocalEmailClient = exports.MockSmsClient = void 0;
class MockSmsClient {
    static SendSms(phone_number, message) {
        // Code for sending out email
        console.log("SMS sent successfully... this only a mock");
        return null;
    }
}
exports.MockSmsClient = MockSmsClient;
class TextLocalEmailClient {
    static SendSms(phone_number, message) {
        // Code for sending out email
        console.log("SMS sent successfully... this is via TextLocal but not fully implemented");
        return null;
    }
}
exports.TextLocalEmailClient = TextLocalEmailClient;
