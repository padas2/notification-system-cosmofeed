"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const user_1 = require("../repository/user");
const error_1 = require("../../pkg/error");
class NotificationService {
    static SendNotification(user_id, notification_mode, message) {
        var result = user_1.MockUserRepo.IsUserValid(user_id);
        console.log("Is user valid Validation result : ", result);
        var userContactDetails = user_1.MockUserRepo.GetUserContactDetails(user_id, notification_mode);
        if (userContactDetails == "") {
            return new error_1.InternalError("User details not found", 404);
        }
        console.log("User contact result : ", userContactDetails);
        // Push to Kafka part
        console.log("Push to Kafka messaging queue");
        return null;
    }
}
exports.NotificationService = NotificationService;
