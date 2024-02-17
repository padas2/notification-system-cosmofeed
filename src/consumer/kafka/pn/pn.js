"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNKafkaConsumer = void 0;
const kafkajs_1 = require("kafkajs");
class PNKafkaConsumer {
    static Init() {
        this.kafkaConsumer = this.createKafkaConsumer();
    }
    static StartBatchConsumer() {
        return __awaiter(this, void 0, void 0, function* () {
            const topic = {
                topics: ['pn_topic'],
                fromBeginning: false
            };
            try {
                yield this.kafkaConsumer.connect();
                yield this.kafkaConsumer.subscribe(topic);
                yield this.kafkaConsumer.run({
                    eachBatch: (eachBatchPayload) => __awaiter(this, void 0, void 0, function* () {
                        const { batch } = eachBatchPayload;
                        for (const message of batch.messages) {
                            const prefix = `${batch.topic}[${batch.partition} | ${message.offset}] / ${message.timestamp}`;
                            console.log(`topic: pn_topic - ${prefix} ${message.key}#${message.value}`);
                        }
                    })
                });
            }
            catch (error) {
                console.log('Error: ', error);
            }
        });
    }
    static Shutdown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.kafkaConsumer.disconnect();
        });
    }
    static createKafkaConsumer() {
        const kafka = new kafkajs_1.Kafka({
            clientId: 'local-producer-client',
            brokers: ['localhost:9092'],
        });
        const consumer = kafka.consumer({ groupId: 'pn_topic_consumer_group' });
        return consumer;
    }
}
exports.PNKafkaConsumer = PNKafkaConsumer;
