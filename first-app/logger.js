var url = 'http://mylogger.io/log';

function log(message) {
    // Send HTTP request
    console.log(message);
}

// Object
module.exports.log = log;
module.exports.endPoint = url;
// function
//module.exports = log