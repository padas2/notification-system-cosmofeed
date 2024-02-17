"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const notification_1 = require("../src/service/notification");
const kafka_1 = require("../src/client/kafka/kafka");
const consumer_1 = require("../src/kafkaconsumer/email/consumer");
const consumer_2 = require("../src/kafkaconsumer/sms/consumer");
const consumer_3 = require("../src/kafkaconsumer/pn/consumer");
var app = express();
app.use(body_parser_1.default.json());
kafka_1.KafkaProducer.Init();
kafka_1.KafkaProducer.Start();
consumer_1.EmailKafkaConsumer.Init();
consumer_1.EmailKafkaConsumer.StartBatchConsumer();
consumer_2.SmsKafkaConsumer.Init();
consumer_2.SmsKafkaConsumer.StartBatchConsumer();
consumer_3.PNKafkaConsumer.Init();
consumer_3.PNKafkaConsumer.StartBatchConsumer();
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
