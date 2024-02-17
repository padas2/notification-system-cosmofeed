"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessor = void 0;
const client_1 = require("../../../pkg/email/client");
const template_1 = require("../../../pkg/email/template");
const utils_1 = require("../../../pkg/utils/utils");
class MessageProcessor {
    static Process(message) {
        var messageContentString = message === null || message === void 0 ? void 0 : message.toString();
        console.log("Email Message Processor Message JSON Content -- ", messageContentString);
        var jsonBody = utils_1.Utilities.GetJsonBody(messageContentString);
        var emailEndpointId = jsonBody.endpointId;
        var emailMessage = jsonBody.message;
        var finalMessage = template_1.EmailTemplateEngine.GenerateEmailBody(emailEndpointId, emailMessage);
        client_1.MockEmailClient.SendEmail(emailEndpointId, finalMessage);
    }
}
exports.MessageProcessor = MessageProcessor;
