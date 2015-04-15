var http = require('http');
var Class = require('./Class')
var Game = require('./class/Game');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand on client se connecte, on le note dans la console
io.on('connection', function (socket) {

    console.log('Un client est connecté !');
    //on instancie un game pour le renvoyer au client


    socket.emit('helloworld');

    socket.on("keyDown", function(param){
        console.log(param);
    });

    //socket.on socket.emit socket.broadcast io.sockets.emit

});

server.listen(8081);