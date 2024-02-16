var express = require('express');
import bodyParser from 'body-parser';

var app = express();
app.use(bodyParser.json());

app.post('/notifications/send', function(request: any, response: any){
  console.log(request.body);      // your JSON
  var body = request.body
  console.log(body.user_id)
  console.log(body.notification_mode)
  console.log(body.contact_details.email)
  console.log(body.contact_details.phone_number)
  console.log(body.contact_details.device_id)
  response.send(request.body);    // echo the result back
});

app.listen(3000);