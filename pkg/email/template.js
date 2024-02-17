"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailTemplateEngine = void 0;
class EmailTemplateEngine {
    static GenerateEmailBody(email_id, message) {
        console.log(`generating final email message for ${email_id} with message ${message}`);
        // Final message generating logic using Template Engine
        var finalMessage = email_id + " : " + message;
        console.log("Final message to be sent out : ", finalMessage);
        return finalMessage;
    }
}
exports.EmailTemplateEngine = EmailTemplateEngine;
