"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessor = void 0;
const client_1 = require("../../../pkg/pushnotification/client");
const utils_1 = require("../../../pkg/utils/utils");
class MessageProcessor {
    static Process(message) {
        var messageContentString = message === null || message === void 0 ? void 0 : message.toString();
        console.log("Push Notification Message Processor Message JSON Content -- ", messageContentString);
        var jsonBody = utils_1.Utilities.GetJsonBody(messageContentString);
        var deviceTokeId = jsonBody.endpointId;
        var pushNotificationMessage = jsonBody.message;
        client_1.MockPNClient.SendPushNotification(deviceTokeId, pushNotificationMessage);
    }
}
exports.MessageProcessor = MessageProcessor;
