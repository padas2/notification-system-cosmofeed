import app  from '../app'
import { NotificationService } from '../service/notification'

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