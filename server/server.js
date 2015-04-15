var http = require('http');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand on client se connecte, on le note dans la console
io.on('connection', function (socket) {

    console.log('Un client est connecté !');

    socket.emit('helloworld');

    //socket.on socket.emit socket.broadcast io.sockets.emit

});


server.listen(8081);