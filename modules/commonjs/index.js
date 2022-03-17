/* MODULE */

// Classic javascript without modularity
// If you include another file with the same function, the function will be overide
/*
var sayHello = function() {

}
window.sayHello();
*/

// Node module : every file is a module => better modularity
//console.log(module);

// CREATE AND LOAD A MODULE
const logger = require("./logger");

//console.log(logger);
//console.log(logger.log("Hello"));

// Check module
//console.log(module);

// CLASS
const Db = require("./Db");
const db = new Db();
//console.log(Db);

//console.log(db.query("SELECT * FROM USERS"));

// DI using class
const UserRepository = require("./UserRepository");
const userRepository = new UserRepository(db);

//console.log(userRepository.get(1));

// DI using function
const userdb = require("./userdb");
//console.log(userdb);

const user = userdb(db);
console.log(user.get(1));
