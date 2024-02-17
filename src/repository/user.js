"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockUserRepo = void 0;
class MockUserRepo {
    static IsUserValid(user_id) {
        // Mocking for now
        console.log("Received user_id : ", user_id);
        console.log("Invoking mock database user details verifier ....");
        console.log("User details are verified");
        return true;
    }
    static GetUserContactDetails(user_id, notification_mode) {
        // Mocking for now
        console.log("Received user_id : ", user_id);
        console.log("Received notification mode details : ", notification_mode);
        console.log("Invoking mock database details verifier ....");
        console.log("Able to successfully extract user contact details...");
        switch (notification_mode) {
            case "email":
                return "supreeth.padavala@gmail.com";
            case "sms":
                return "9502272878";
            case "push_notification":
                return "deviceTokenId";
        }
        return "";
    }
}
exports.MockUserRepo = MockUserRepo;
