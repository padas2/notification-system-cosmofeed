var express = require('express');
import bodyParser from 'body-parser';
import { UserRepo } from '../src/repository/user'

var app = express();
app.use(bodyParser.json());

app.post('/notifications/send', function(request: any, response: any){
  console.log(request.body);      // your JSON
  var body = request.body

  var result = UserRepo.IsUserValid(body.user_id)
  console.log("Is user valid Validation result : ", result)

  var userContactDetails = UserRepo.GetUserContactDetails(body.user_id, body.notification_mode)
  if (userContactDetails == "") {
    response.setHeader('Content-Type', 'application/json');
    response.status(400).end(JSON.stringify({ data: "Incorect request format" }));  
    return
  }
  console.log("User contact result : ", userContactDetails)
  
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ data: "Notification will be sent" }));
});

app.listen(3000);