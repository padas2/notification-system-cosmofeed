var express = require('express');
import bodyParser from 'body-parser';
import { NotificationService } from '../src/service/notification'
import { KafkaProducer } from  '../src/client/kafka/kafka'

var app = express();
app.use(bodyParser.json());

KafkaProducer.Init()
KafkaProducer.Start()

app.post('/notifications/send', function(request: any, response: any){
  console.log(request.body)
  var body = request.body
  
  var error = NotificationService.SendNotification(body.user_id, body.notification_mode, body.message)
  if (error != null) {
    response.setHeader('Content-Type', 'application/json');
    response.status(error.code).end(JSON.stringify({ data: error.message }));  
    return
  }
  
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ data: "Notification will be sent" }));
});

app.listen(3000);