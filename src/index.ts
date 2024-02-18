var express = require('express');
var notifications = require('../src/controller/notification');
import bodyParser from 'body-parser';
import { KafkaProducer } from  './client/kafka/kafka'
import { InMemoryUsersRepo } from './repository/user'
import { KafkaConsumers } from './kafkaconsumer/index'

KafkaProducer.Init()
KafkaProducer.Start()

KafkaConsumers.Init()
KafkaConsumers.Start()

InMemoryUsersRepo.Init()

var app = express();
app.use(bodyParser.json());
app.post('/notifications/send', notifications.sendNotification)
app.listen(3000);

export default app;