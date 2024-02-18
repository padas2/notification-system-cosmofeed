import { EmailKafkaConsumer } from  '../kafkaconsumer/email/consumer'
import { SmsKafkaConsumer } from  '../kafkaconsumer/sms/consumer'
import { PNKafkaConsumer } from  '../kafkaconsumer/pn/consumer'

export class KafkaConsumers {
  public static Init() {
    EmailKafkaConsumer.Init()
    SmsKafkaConsumer.Init()
    PNKafkaConsumer.Init()
  }

  public static Start() {
    EmailKafkaConsumer.StartBatchConsumer()
    SmsKafkaConsumer.StartBatchConsumer()
    PNKafkaConsumer.StartBatchConsumer()
  }
}