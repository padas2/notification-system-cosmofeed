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

### Pre-requisites and Constraints:
* Will be using an in-memory data structure as the Database against which all necessary validations will be run.
* For this binary to run, a local kafka cluster running on **9092** port is needed as the system is currently hardcoded to use that.
  
### Api-Contracts:
* Send notification Rest Api:
  * POST notifications/send
  ```
    {
      "user_id": 6,
      "notification_mode": "push_notification",
      "message": "Hello Loyal customer, wishing you a Happy New Year()"
    }
  ```  

### Assignment Scope:
* Not including test-setup, linting setup.
* Keeping all code for main notification system and worker in this very repository for now.
  * If we need to design for huge scale, the worker code can be run as a separate code repository in itself and deployed as a separate pod in itself.

### Improvements:
* Code structure can be improved to follow a Domain Driven Design.
* In-memory db can be replaced with an actual Database interaction.
* All hardcoded infrastructure variables to be replaced with ENVs injected at runtime.   -- DONE
* Routers to be defined separately rather than in index.ts.                              -- DONE
* Actual integration can be done with FCM client, TextLocal client rather than keeping empty for now.