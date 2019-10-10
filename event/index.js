/* EVENTS */
const EventEmitter = require('events'); // Class
const emitter = new EventEmitter; // object

// First, register a listener
/*
Emitter.on('messageLogged', function(arg) {
    console.log('Listener called', arg);
});
*/

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Then, raise an event
emitter.emit('messageLogged', { id: 1, url: "https://www.google.com" });

// Exercice
// Raise: logging (data: message)