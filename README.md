# PubSub 

PubSub is a small library designed for cross component communication on different hierarchy levels.

# Installation

```
npm i @g.t.georgiev/pubsub
```

# Instantiation

You can create a new PubSub instance in two ways.  
You either use regular class instantiation with the ***new*** keyword or use the static method ***createInstance***.

Example 1 is using regular class instantiation:

```
const eventBus = new PubSub();
```

Example 2 is using the provided creator pattern with a static method:

```
const eventBus = PubSub.createInstance();
```

# Usage and examples

## Static methods

```
const eventBus: PubSub = Pubsub.createInstance();
```

## Instance methods

```
// Create instance
const eventBus = new PubSub();

/**  
 * Creates a subscription  
 * @param {string} eventType Event name  
 * @param {(...args: any[]) => void} Callback function to be executed on emitted event of the matching type  
 * @param {any} thisArg Optional argument to be used as this when involing callback  
 * @returns {{ unsubscribe(): void }} Subscription object with unsubscribe method
 */
const subscription = eventBus.subscribe(<eventType>, <callback>, <thisArg>);

// After subscribing for an event, a subscription object is returned  
subscription.unsubscribe();

/**  
 * Publish an event with optional data passed to all subscribers
 * @param {string} eventType Event name  
 * @param {...args?: any[]} Data
 * @returns {void}
 */
eventBus.publish(<eventType>, <args>);
```