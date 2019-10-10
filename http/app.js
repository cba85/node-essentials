const http = require('http')

//const server = http.createServer(); // Event Emitter

/*
server.on('connection', (socket) => {
    console.log('New connection...')
});
*/

const server = http.createServer((req, res) => {
    if (req.url == '/') {
       res.write('Hello');
       res.end();
    }

    if (req.url == '/test') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000)

console.log('Listening on port 3000...')