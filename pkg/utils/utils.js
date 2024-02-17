"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
    static GetJsonBody(message) {
        if (message == undefined) {
            return null;
        }
        return JSON.parse(message);
    }
}
exports.Utilities = Utilities;
