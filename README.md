# notification-system-cosmofeed

## High level Architecture diagram:
![alt text](https://github.com/padas2/notification-system-cosmofeed/blob/master/notification-system-cosmofeed.jpg?raw=true)

### Functional requirements:
* Should be able to send notifications to users via Email, SMS, Push Notification.
* Should be able to accomodate new notification type in a clean and easy way.

### Non Functional requirements:
* Performance: High
* Flexibility: High
* Extensibility: High
* Scalability: Low - Medium [ Keeping it low for now]

### Components and Inner Working:
* Works on a service based architecture.
* Notifications service: To receive all incoming requests via HTTP.
* Postgres database: To store all relevant data such as user info, contact info etc.
* Kafka as Message Queue: To function as internal message queue for other Notification system workers.
* Notification service workers: A kafka consumer which reads message from a designated queue and hit the corresponding 3rd party system to send out
                                a notification.