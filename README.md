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

### Components and Architecture:
* Works on a service based architecture.
* Notifications service: To receive all incoming requests via HTTP.
* Postgres database: To store all relevant data such as user info, contact info etc.
* Kafka as Message Queue: To function as internal message queue for other Notification system workers.
* Notification service workers: A kafka consumer which reads message from a designated queue and hit the corresponding 3rd party system to send out
                                a notification.

### Pre-requisites:
* To see this system in action, need to have 
  * docker version >= 19.03.5
  * docker-compose version >= 1.25.4

### Run-time instructions:
  * Simply run 
      ```
        docker-compose up --build

        This will spawn a readymade kafka container, compile our nodejs code and connect with the spawned kafka container
      ```
  * Now, open a Postman or any Rest Api client, fire the below mentioned Api to see how the system responds.
  * To follow the logs, first find the container containing the nodeJs code by first running the ```docker ps``` command.
    * Then run ```docker logs --follow <above-obtained-container-id>```
        
### Api-Contracts:
* Send notification Rest Api:
  ```
    POST http://localhost:3000/notifications/send/send
    {
      "user_id": 6, // allowed-values: [2,3,4,5,6]
      "notification_mode": "push_notification", [email, sms, push_notification]
      "message": "Hello Loyal customer, wishing you a Happy New Year()"
    }
  ``` 

### Improvements:
* Code structure can be improved to follow a Domain Driven Design.
* In-memory db can be replaced with an actual Database interaction.
* All hardcoded infrastructure variables to be replaced with ENVs injected at runtime.   -- DONE
* Routers to be defined separately rather than in index.ts.                              -- DONE
* Actual integration can be done with FCM client, TextLocal client rather than keeping empty for now.
* Dockerize so that it can be run on its own without installation of any external softwares -- DONE