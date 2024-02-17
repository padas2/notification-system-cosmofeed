"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const notification_1 = require("../src/service/notification");
const kafka_1 = require("../src/client/kafka/kafka");
var app = express();
app.use(body_parser_1.default.json());
kafka_1.KafkaProducer.Init();
kafka_1.KafkaProducer.Start();
app.post('/notifications/send', function (request, response) {
    console.log(request.body);
    var body = request.body;
    var error = notification_1.NotificationService.SendNotification(body.user_id, body.notification_mode, body.message);
    if (error != null) {
        response.setHeader('Content-Type', 'application/json');
        response.status(error.code).end(JSON.stringify({ data: error.message }));
        return;
    }
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ data: "Notification will be sent" }));
});
app.listen(3000);
