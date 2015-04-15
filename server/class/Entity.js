var Class = require("../Class");


/**
 * Created by tom on 01/04/15.
 */

var Entity = Class.extend({
	init: function(x, y, game) {
		this.x = x;
		this.y = y;
		this.game = game;

		this.color = "black";
		this.canWalkThroughWalls = false;
	},
	render: function(context) {
		context.fillStyle= this.color;
		context.fillRect(this.x*this.game.cellSize, this.y*this.game.cellSize, this.game.cellSize ,this.game.cellSize);
	},
	moveEntity : function (n) {
		var previousX = this.x,
			previousY = this.y;
		switch(n){
			case 37:
				this.x = (this.x - 1 + this.game.labyrinth.cols) % this.game.labyrinth.cols;
				break;
			case 38:
				this.y = (this.y - 1 + this.game.labyrinth.rows) % this.game.labyrinth.rows;
				break;
			case 39:
				this.x = (this.x + 1) % this.game.labyrinth.cols;
				break;
			case 40:
				this.y = (this.y + 1) % this.game.labyrinth.rows;
				break;
			default:
				console.log("Touche incorrecte !");

		}

		if (! this.canWalkThroughWalls) {
			if (this.game.labyrinth.getObstacleAt(this.x, this.y)) {
				this.x = previousX;
				this.y = previousY;
				console.log("Derp wall");
			}
		}
	},
	moveVector: function(v) {
		var previousX = this.x,
			previousY = this.y;

		this.x += v.x;
		this.y += v.y;
		this.x %= this.game.labyrinth.cols;
		this.y %= this.game.labyrinth.rows;

		if (! this.canWalkThroughWalls) {
			if (this.game.labyrinth.getObstacleAt(this.x, this.y)) {
				this.x = previousX;
				this.y = previousY;
				console.log("Derp wall");
			}
		}
	}
});

module.exports = Entity;