import { Consumer, ConsumerSubscribeTopics, EachBatchPayload, Kafka, EachMessagePayload } from 'kafkajs'

export class SmsKafkaConsumer {
  private static kafkaConsumer: Consumer

  public static Init() {
    this.kafkaConsumer = this.createKafkaConsumer()
  }

  public static async StartBatchConsumer(): Promise<void> {
    const topic: ConsumerSubscribeTopics = {
      topics: ['sms_topic'],
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
            console.log(`topic: sms_topic - ${prefix} ${message.key}#${message.value}`) 
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
      clientId: 'local-producer-client',
      brokers: ['localhost:9092'],
    })
    const consumer = kafka.consumer({ groupId: 'sms_topic_consumer_group' })
    return consumer
  }
}