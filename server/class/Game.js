var Class = require("../Class");
var Player = require("./Player");
var Labyrinth = require("./Labyrinth");
var Ghost = require("./Ghost");
/**
 * Created by tom on 01/04/15.
 */

var Game = Class.extend({


	init: function() {
		this.labyrinth = new Labyrinth(30, 30, this);

		this.player = new Array();

		this.ghosts = new Array();
		this.ghosts.push(new Ghost(0, 0, this));
		this.ghosts.push(new Ghost(29, 29, this));
		this.ghosts.push(new Ghost(0, 29, this));
		this.ghosts.push(new Ghost(29, 0, this));

		this.cellSize = 10;
		this.continue = true;


		//this.context = document.getElementById("gameView").getContext("2d");
		this.loop();
	},

	receiveKey : function(keyCode,id){
		var result;
		result.which = keyCode;
		for(var i=0;i<this.player.length;i++){
			if(this.player[i].id === id){
				this.player[i].move(result);
			}
		}

		this.loose();
	},


	loop : function() {
		if(this.continue) {

			for (var i = 0; i < this.ghosts.length; i++) {
				this.ghosts[i].randomMove();
			}

			this.loose();

			for(var p=0;p<this.player.length;p++) {
				this.player[p].score++;
			}
			var self = this;
			setTimeout(function () {
				self.loop();
			}, 250);
		}
	},
	loose: function(){
		for (var i = 0; i < this.ghosts.length; i++) {
			for(var p=0;p<this.player.length;p++) {
				if (this.ghosts[i].x == this.player[p].x && this.ghosts[i].y == this.player[p].y) {
					clearInterval(this.inter);
					alert(this.player[p].score);
					this.continue = false;
				}
			}
		}


	},

	addPlayer : function(id){
		var p = new Player(15,15,this, id);
		this.player.push(p);
	},
	movePlayer: function (id, keycode) {
		//recherchen du player
		for (var i = 0; i < this.player.length; i++) {
			if(player[i].id == id){
				//changer la position du player
				var result;
				result.which = keyCode;
				player.move(result);
			}
		}

	}
});


module.exports = Game;