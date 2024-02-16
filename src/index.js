"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const user_1 = require("../src/repository/user");
var app = express();
app.use(body_parser_1.default.json());
app.post('/notifications/send', function (request, response) {
    console.log(request.body); // your JSON
    var body = request.body;
    var result = user_1.UserRepo.IsUserValid(body.user_id);
    console.log("Is user valid Validation result : ", result);
    var userContactDetails = user_1.UserRepo.GetUserContactDetails(body.user_id, body.notification_mode);
    if (userContactDetails == "") {
        response.setHeader('Content-Type', 'application/json');
        response.status(400).end(JSON.stringify({ data: "Incorect request format" }));
        return;
    }
    console.log("User contact result : ", userContactDetails);
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ data: "Notification will be sent" }));
});
app.listen(3000);
