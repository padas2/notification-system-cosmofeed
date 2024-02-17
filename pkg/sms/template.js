"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsTemplateEngine = void 0;
class SmsTemplateEngine {
    static GenerateSmsFinalMessage(phoneNumber, message) {
        console.log(`generating final SMS message for ${phoneNumber} with message ${message}`);
        // Final message generating logic using Template Engine
        var finalMessage = phoneNumber + " : " + message;
        console.log("Final message to be sent out : ", finalMessage);
        return finalMessage;
    }
}
exports.SmsTemplateEngine = SmsTemplateEngine;
