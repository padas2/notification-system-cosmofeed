"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const router = require('find-my-way')();
router.on('GET', '/', (req, res, params) => {
    console.log("Nothing to see here...");
    res.end('{"message":"Nothing to see here... try something else"}');
});
router.on('POST', '/notifications/send', (req, res, params) => {
    console.log(req.body);
    res.end('{"message":"Notification will be sent"}');
});
exports.server = http_1.default.createServer((req, res) => {
    router.lookup(req, res);
});
exports.server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
