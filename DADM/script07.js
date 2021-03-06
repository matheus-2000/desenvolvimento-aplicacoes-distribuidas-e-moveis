var http = require('http');
var url = require('url');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

        var args = url.parse(req.url, true).query;
        var nome = args.nome;
        var sobrenome = args.sobrenome;

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Aula de Node.js</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Sejam bem-vindos</h1>');
        res.write('<p>');
        res.write(`Nome: ${nome} <br>`);
        res.write(`Sobrenome: ${sobrenome}`);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Server online');