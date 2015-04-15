var Class = require("../Class");

/**
 * Created by tom on 01/04/15.
 */

var Game = Class.extend({
	init: function() {
		this.labyrinth = new Labyrinth(30, 30, this);
		this.player = new Player(15, 15, this);

		this.ghosts = new Array();
		this.ghosts.push(new Ghost(0, 0, this));
		this.ghosts.push(new Ghost(29, 29, this));
		this.ghosts.push(new Ghost(0, 29, this));
		this.ghosts.push(new Ghost(29, 0, this));

		this.cellSize = 10;
		this.continue = true;

		var self = this;
		document.addEventListener("keydown", function(event){
			self.player.move(event);
			self.render();
			self.loose();
		});

		this.context = document.getElementById("gameView").getContext("2d");
		this.render();
		this.loop();
	},

	render: function() {
		this.context.clearRect(0,0, this.labyrinth.cols*this.cellSize, this.labyrinth.rows*this.cellSize);
		this.labyrinth.render(this.context);
		this.player.render(this.context);
		for (var i = 0; i < this.ghosts.length; i++) {
			this.ghosts[i].render(this.context);
		}
	},

	loop : function() {
		if(this.continue) {

			for (var i = 0; i < this.ghosts.length; i++) {
				this.ghosts[i].randomMove();
			}
			this.render();
			this.loose();

			this.player.score++;
			var self = this;
			setTimeout(function () {
				self.loop();
			}, $("#interval").val());
		}
	},
	loose: function(){
		for (var i = 0; i < this.ghosts.length; i++) {
			if(this.ghosts[i].x==this.player.x && this.ghosts[i].y==this.player.y){
				clearInterval(this.inter);
				alert(this.player.score);
				this.continue = false;
			}
		}


	}
});


module.exports = Game;