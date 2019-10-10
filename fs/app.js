/* File System (FS) */
const fs = require('fs')

const files = fs.readdirSync('./');
console.log(files)

// fs.readdir('f', function(error, files) {
fs.readdir('./', function (error, files) {
    if (error) {
        console.log('Error', error)
    } else {
        console.log('Results', files)
    }
});