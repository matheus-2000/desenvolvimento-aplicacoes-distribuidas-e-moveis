var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});

        res.write(req.url);

        res.end();
    }
).listen(8080);

console.log('Server online');