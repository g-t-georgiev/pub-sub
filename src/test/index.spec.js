import { describe, it, before, after } from 'node:test';
import assert from 'node:assert';

import { PubSub } from '../PubSub.js';

describe('Create instances', () => {

    it('Should be instantiated as a regular class', () => {
        assert.ok(new PubSub() instanceof PubSub, 'Not instance of PubSub class.');
    });

    it('Should be instantiated with the static method.', () => {
        assert.ok(PubSub.createInstance() instanceof PubSub, 'Not instance of PubSub class.');
    });

});

describe('Subscribe/Publish/Unsubscribe', () => {
    let eventBus;
    let values;
    let subscription;

    before(() => {
        console.log('Test initial setup');
        eventBus = new PubSub();
        values = [ 1, 53, 'Hello', { name: 'John' } ];
    });

    it('Should subscribe to event', () => {
        assert.doesNotThrow(() => {
            subscription = eventBus.subscribe('test', (data) => {
                assert.ok(values.some(item => Object.is(item, data)), `Expected ${data} to match current list of possible values.`);
            })
        });
    });

    it('Should emit event', () => {
        assert.doesNotThrow(() => {
            eventBus.publish('test', 1);
        });

        assert.doesNotThrow(() => {
            eventBus.publish('test', 'Hello');
        });

        assert.doesNotThrow(() => {
            eventBus.publish('test', values[3]);
        });
    });

    it('Should unsubscribe', () => {
        const unsubscribe = subscription.unsubscribe;
        assert.ok(typeof unsubscribe === 'function');

        assert.doesNotThrow(() => {
            unsubscribe();
        });
    });

});