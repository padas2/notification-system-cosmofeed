"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
class InternalError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'DatabaseError';
    }
}
exports.InternalError = InternalError;
