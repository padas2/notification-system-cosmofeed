"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendGridEmailClient = exports.MockEmailClient = void 0;
class MockEmailClient {
    static SendEmail(email_id, message) {
        // Code for sending out email
        console.log("Email sent successfully... this only a mock");
        return null;
    }
}
exports.MockEmailClient = MockEmailClient;
class SendGridEmailClient {
    static SendEmail(email_id, message) {
        // Code for sending out email
        console.log("Email sent successfully... this is via SendGrid but not fully implemented");
        return null;
    }
}
exports.SendGridEmailClient = SendGridEmailClient;
