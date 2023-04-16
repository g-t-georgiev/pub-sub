import { PubSub } from '@g.t.georgiev/pubsub';

const eventEmitter = new PubSub();

const subscription1 = eventEmitter.subscribe('test', (data) => {
    console.log('Subscriber1: ' + data);
});

const subscription2 = eventEmitter.subscribe('test', (data) => {
    console.log('Subscriber2: ' + data);
});

const subscription3 = eventEmitter.subscribe('test', (data) => {
    console.log('Subscriber3: ' + data);
});

subscription2.unsubscribe();

eventEmitter.publish('test', 'Hello, World!');