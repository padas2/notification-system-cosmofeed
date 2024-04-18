import bodyParser from 'body-parser';
import { KafkaProducer } from  './client/kafka/kafka'
import { InMemoryUsersRepo } from './repository/user'
import { KafkaConsumers } from './kafkaconsumer/index'

var express = require('express');
var notifications = require('../src/controller/notification');

// Initing kafka components and saving changes and sacing vhancefsklfdj and getting in new changes and again detecting new changes
// Add few more changes and more changes than previous and firther changes and one more change and further new changes
KafkaProducer.Init()
KafkaProducer.Start()
KafkaConsumers.Init()
KafkaConsumers.Start()

// Initing database components
InMemoryUsersRepo.Init()

console.log("KAFKA_HOST : ", process.env.KAFKA_HOST)
// Initing HTTP components
var app = express();
app.use(bodyParser.json());
app.post('/notifications/send', notifications.sendNotification)
app.listen(3000);
