"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessor = void 0;
const client_1 = require("../../../pkg/sms/client");
const utils_1 = require("../../../pkg/utils/utils");
const template_1 = require("../../../pkg/sms/template");
class MessageProcessor {
    static Process(message) {
        var messageContentString = message === null || message === void 0 ? void 0 : message.toString();
        console.log("SMS Message Processor Message JSON Content -- ", messageContentString);
        var jsonBody = utils_1.Utilities.GetJsonBody(messageContentString);
        var phoneNumber = jsonBody.endpointId;
        var smsMessage = jsonBody.message;
        var finalMessage = template_1.SmsTemplateEngine.GenerateSmsFinalMessage(phoneNumber, smsMessage);
        client_1.MockSmsClient.SendSms(phoneNumber, finalMessage);
    }
}
exports.MessageProcessor = MessageProcessor;
