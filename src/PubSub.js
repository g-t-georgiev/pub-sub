/**
 * Each subscription is an event type and sunscribers key-value pair.
 * @typedef {Map<string, Map<symbol, (...args: any[]) => void>>} Subscriptions
 */

/**
 * Utility class for creating event emitter instances.
 */
export class PubSub {

    /**
     * Key-value pair map object where each key is an event type and 
     * each value is another map object storing the subscribers (callback functions) under "id" symbol keys. 
     * @type Subscriptions
     */
    #subscriptions = new Map();

    /**
     * Allows subscribing to an event. Takes an event name, a callback handler 
     * invoked on each event with the specific type is emitted and an optional third argument, 
     * which when presented serves as execution context (this) for the handler callback.
     * @param {string} evntType event type name
     * @param {(...args: any[]) => void} handler Subscriber callback invoked on each event emitted
     * @param {any} [thisArg] If present is used as this for the handler
     * @returns {{ unsubscribe: () => void }} Object exposing unsubscribe functionality
     */
    subscribe(evntType, handler, thisArg) {
        const id = Symbol("id");

        // create new event type entry if not present
        if (!this.#subscriptions.hasOwnProperty(evntType)) {
            this.#subscriptions[evntType] = {};
        }

        // register subscriber / event handler function
        this.#subscriptions[evntType][id] = thisArg 
            ? handler.bind(thisArg) 
            : handler;
        
        return {
            unsubscribe: () => {
                delete this.#subscriptions[evntType][id];
                if (Reflect.ownKeys(this.#subscriptions[evntType]).length === 0) {
                    delete this.#subscriptions[evntType];
                }
            }
        }
    }

    /**
     * Emits an event of certain type with arguments to be passed down to the subscribers.
     * @param {string} evntType Event type name
     * @param  {...any} args Arguments list to be passed to subscribers
     * @returns {void}
     */
    publish(evntType, ...args) {
        if (!this.#subscriptions[evntType]) return;

        Reflect.ownKeys(this.#subscriptions[evntType])
            .forEach(id => this.#subscriptions[evntType][id](...args), this);
    }

    /**
     * Static class method providing alternative way to create 
     * a new PubSub instance.
     * @returns { PubSub }
     */
    static createInstance() {
        return new this();
    }

}