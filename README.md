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
// Creates PubSub instance  
const eventBusPubSub = Pubsub.createInstance();
```

## Instance methods

```
// Creates PubSub instance
const eventBus = new PubSub();

// Create a subscriber.  
// Takes only parameter representing all the data passed upon event emition.
// Important to note is that data parameter is always present,  
// but can be empty array, if no data is emitted with the event.
const subscriber = (data) => {
    console.log(data);
};

// Creates a subscription, containing unsubscribe functionality
// First argument is name of event. Should be of type string.      
// Second argument is a subscriber/callback.
// Optional third argument is used as the value of this inside the callback.
const subscription = eventBus.subscribe(<even_name: string>, <subscriber: callback>, <thisArg: any>(optional));

// Unsubscribe from an event    
subscription.unsubscribe();

// Publish event with a certain event name  
// Passing data is optional, in which case every subscriber interested will get data parameter as empty array.
eventBus.publish(<event_name: string>, <data: ...any[]>);
```