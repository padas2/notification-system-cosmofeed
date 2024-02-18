import { Kafka, Message, Producer, ProducerBatch, TopicMessages } from 'kafkajs'
import { NotificationMessage } from '../../model/kafka'
import { kafkaClientIdClientSide, defautKafkaHost } from '../../globals/globals'

export class KafkaProducer {
  private static producer: Producer

  public static Init() {
    KafkaProducer.producer = KafkaProducer.createProducer()
  }

  public static async Start(): Promise<void> {
    try {
      await this.producer.connect()
    } catch (error) {
      console.log('Error connecting the producer: ', error)
    }
  }

  public static async Shutdown(): Promise<void> {
    await this.producer.disconnect()
  }

  public static async SendBatch(messages: Array<NotificationMessage>, topic: string): Promise<void> {
    const kafkaMessages: Array<Message> = messages.map((message) => {
      return {
        value: JSON.stringify(message)
      }
    })

    const topicMessages: TopicMessages = {
      topic: topic,
      messages: kafkaMessages
    }
    const batch: ProducerBatch = {
      topicMessages: [topicMessages]
    }
    await this.producer.sendBatch(batch)
  }

  private static createProducer() : Producer {
    const kafka = new Kafka({
      clientId: kafkaClientIdClientSide,
      brokers: [process.env.KAFKA_HOST || defautKafkaHost],
      retry: {
        initialRetryTime: 5000,
        retries: 10,
      }
    })
    return kafka.producer()
  }
}
