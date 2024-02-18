var express = require('express');
import bodyParser from 'body-parser';
import { KafkaProducer } from  './client/kafka/kafka'
import { InMemoryUsersRepo } from './repository/user'
import { KafkaConsumers } from './kafkaconsumer/index'

var app = express();
app.use(bodyParser.json());

KafkaProducer.Init()
KafkaProducer.Start()

KafkaConsumers.Init()
KafkaConsumers.Start()

InMemoryUsersRepo.Init()
app.listen(3000);

export default app;