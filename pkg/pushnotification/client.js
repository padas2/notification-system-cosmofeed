"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirebasePNClient = exports.MockPNClient = void 0;
class MockPNClient {
    static SendPushNotification(deviceTokenId, message) {
        // Code for sending out email
        console.log("Push notification sent successfully... this only a mock");
        return null;
    }
}
exports.MockPNClient = MockPNClient;
class FirebasePNClient {
    static SendPushNotification(deviceTokenId, message) {
        // Code for sending out email
        console.log("Push Notification sent successfully... this is via SendGrid but not fully implemented");
        return null;
    }
}
exports.FirebasePNClient = FirebasePNClient;
