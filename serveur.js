var http = require('http');

var ip = '127.0.0.1';
var port = 21210;

var server = http.createServer(
    function(request, reseponse){
        reseponse.statusCode = 200;
        reseponse.setHeader('Content-Type', 'text/plain');
        reseponse.end('bande d enculé')
    }
);

server.listen(port,ip,function() {
    console.log('le serveur tourne aussi bien que ma bite');

}

)