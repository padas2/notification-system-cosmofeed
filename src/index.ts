var express = require('express');
import bodyParser from 'body-parser';
import { NotificationService } from '../src/service/notification'

var app = express();
app.use(bodyParser.json());

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