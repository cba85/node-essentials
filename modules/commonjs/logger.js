const url = "http://mylogger.com/log";

function log(message) {
	// E.g. Send HTTP request
	return message;
}

// Object
module.exports.log = log;
module.exports.endPoint = url;

// function
//module.exports = log
