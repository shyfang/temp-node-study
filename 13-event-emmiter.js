const EventEmitter = require('events');

const customerEventEmitter = new EventEmitter();

customerEventEmitter.on('customer', (customer, sex) => {
  console.log(customer, sex);
});

customerEventEmitter.emit('customer', {
  name: 'John',
  age: 30,
}, 'female');