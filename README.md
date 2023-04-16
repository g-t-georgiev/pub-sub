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

// Create a subscription
const subscription: { unsubscribe(): void } = eventBus.subscribe(eventType: string, callback: (...args: any[]) => void, thisArg?: any);

// After subscribing for an event, a subscription object is returned  
// It contains unsubscribe method that is used somewhere in the code of the current scope
subscription.unsubscribe();

// Publish an event with optional data passed to all subscribers
eventBus.publish(eventType: string, ...args?: any[]);
```