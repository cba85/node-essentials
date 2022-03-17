// Classic javascript
function sayHello(name) {
    console.log(`Hello ${name}`);
}
sayHello("Clément");

// GLOBAL

// Error: browser only
//console.log(window);

// Javascript global object
//console.log();
//setTimeout();
//setInterval();

// Global for browser only
// window.console.log();
// window.setTimeout();
// document.getQuerySelector();

/*
var message = "Hello";
windows.message;
*/

// Global for node only
/*
global.setTimeout();
*/

//var message = "Hello";
//console.log(global.message); // Not available because var is only available in the file in Node
