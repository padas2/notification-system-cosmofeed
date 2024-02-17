"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const user_1 = require("../repository/user");
const error_1 = require("../../pkg/error");
const kafka_1 = require("../client/kafka/kafka");
class NotificationService {
    static SendNotification(userId, notificationMode, message) {
        // Validate user details
        var result = user_1.MockUserRepo.IsUserValid(userId);
        console.log("Is user valid Validation result : ", result);
        // Get user details
        var userContactEndpointId = user_1.MockUserRepo.GetUserContactDetails(userId, notificationMode);
        if (userContactEndpointId == "") {
            return new error_1.InternalError("User contact endpoint not found", 404);
        }
        console.log("User contact endpoint : ", userContactEndpointId);
        // Push to Kafka topic
        console.log("Pushing to Kafka messaging queue");
        var topicName = NotificationService.getTopicName(notificationMode);
        var messages = [
            { mode: notificationMode, endpointId: userContactEndpointId, message: message }
        ];
        kafka_1.KafkaProducer.SendBatch(messages, topicName);
        return null;
    }
    static getTopicName(notification_Mode) {
        switch (notification_Mode) {
            case "sms":
                return "sms_topic";
            case "email":
                return "email_topic";
            case "push_notification":
                return "pn_topic";
        }
        return "";
    }
}
exports.NotificationService = NotificationService;
