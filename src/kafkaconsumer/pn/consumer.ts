import { Consumer, ConsumerSubscribeTopics, EachBatchPayload, Kafka, EachMessagePayload } from 'kafkajs'
import { MessageProcessor } from '../pn/messageProcessor'
import { kafkaClientIdPNSide, pushNotificationTopicName, defautKafkaHost } from '../../globals/globals'

export class PNKafkaConsumer {
  private static kafkaConsumer: Consumer

  public static Init() {
    this.kafkaConsumer = this.createKafkaConsumer()
  }

  public static async StartBatchConsumer(): Promise<void> {
    const topic: ConsumerSubscribeTopics = {
      topics: [pushNotificationTopicName],
      fromBeginning: false
    }

    try {
      await this.kafkaConsumer.connect()
      await this.kafkaConsumer.subscribe(topic)
      await this.kafkaConsumer.run({
        eachBatch: async (eachBatchPayload: EachBatchPayload) => {
          const { batch } = eachBatchPayload
          for (const message of batch.messages) {
            const prefix = `${batch.topic}[${batch.partition} | ${message.offset}] / ${message.timestamp}`
            console.log(`topic: ${pushNotificationTopicName} - ${prefix} ${message.key}#${message.value}`) 
            MessageProcessor.Process(message.value)
          }
        }
      })
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  public static async Shutdown(): Promise<void> {
    await this.kafkaConsumer.disconnect()
  }

  private static createKafkaConsumer(): Consumer {
    const kafka = new Kafka({
      clientId: kafkaClientIdPNSide,
      brokers: [process.env.KAFKA_HOST || defautKafkaHost ],
      retry: {
        initialRetryTime: 5000,
        retries: 10,
      }
    })
    const consumer = kafka.consumer({ groupId: 'pn_topic_consumer_group' })
    return consumer
  }
}