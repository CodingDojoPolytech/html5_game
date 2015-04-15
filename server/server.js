var http = require('http');
var uniqid = require('uniqid');
var Class = require('./Class')
var Game = require('./class/Game');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// TODO : on instancie un game qui sera commun à tous les utilisateurs
var game = new Game();

// Quand on client se connecte, on le note dans la console
io.on('connection', function (socket) {

    var idclient = uniqid();

    // TODO : on ajoute le client au game
    game.addPlayer(idclient);

    console.log('Un client est connecté !' + idclient);

    // first connexion, return uniqid + game
    socket.emit('uniqid', idclient);
    socket.emit('game', game);

    /*socket.on("keyDown", function(param){
        console.log(param);
        game.movePlayer(idclient, param);
        //renvoi à tous les clients du jeu
        io.sockets.emit('usermove', game);
    });*/

    //socket.on socket.emit socket.broadcast io.sockets.emit

});

server.listen(8081);