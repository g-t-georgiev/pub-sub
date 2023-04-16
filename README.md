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
const subscriber = (data) => {
    console.log(data);
};

// Upon subscribing an event name is passed as first argument  
// A callback function or a subscriber that receives any data published with the event of interest
// Optional third argument to be used as the value of *this* inside the callback
const subscription = eventBus.subscribe(<even_name: string>, <subscriber: callback>, <thisArg: any>(optional));

// Unsubscribe from an event    
subscription.unsubscribe();

// Publish event with a certain event name  
// Passing data is optional, in which case every subscriber interested will get data parameter as empty array.
eventBus.publish(<event_name: string>, <data: ...any[]>);
```