var Entity = require("./Entity");

/**
 * Created by tom on 01/04/15.
 */


var Obstacle = Entity.extend({
	init: function (x, y, game) {
		this._super(x, y, game);
		this.color = "black";
	}

});

module.exports = Obstacle;