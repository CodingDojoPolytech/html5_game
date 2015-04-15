var Entity = require("./Entity");


/**
 * Created by tom on 01/04/15.
 */

var Ghost = Entity.extend({
	init: function(x, y, game) {
		this._super(x,y,game);

		this.color = "pink";
		this.canWalkThroughWalls = true;
	},

	randomMove : function () {
		var targetVector = {
			x: this.x - this.game.player.x > 0 ? -1 : 1,
			y: this.y - this.game.player.y > 0 ? -1 : 1
		};

		var randBool = Math.floor(Math.random() * 2);
		if (randBool) targetVector.x = 0;
		else targetVector.y = 0;


		//var r = Math.floor(Math.random()*4);
		//this.moveEntity(37+r);

		this.moveVector(targetVector);
	}
});
module.exports = Ghost;