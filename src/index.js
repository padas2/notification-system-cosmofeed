"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
var app = express();
app.use(body_parser_1.default.json());
app.post('/notifications/send', function (request, response) {
    console.log(request.body); // your JSON
    var body = request.body;
    console.log(body.user_id);
    console.log(body.notification_mode);
    console.log(body.contact_details.email);
    console.log(body.contact_details.phone_number);
    console.log(body.contact_details.device_id);
    response.send(request.body); // echo the result back
});
app.listen(3000);
