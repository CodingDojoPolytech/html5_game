var Class = require("../Class");


/**
 * Created by tom on 01/04/15.
 */


var Labyrinth = Class.extend({
	init: function(rows, cols, game) {
		this.rows = rows;
		this.cols = cols;
		this.game = game;
		this.obstacles = new Array();
		for(var i = 0; i < 100; i++){
			this.generateObstacle();
		}
	},
	render:function(context){
		for(var i in this.obstacles) {
			var o = this.obstacles[i];
			o.render(context);
		}
	},

	getObstacleAt : function(x, y){
		for(var i in this.obstacles){
			var o = this.obstacles[i];
			if(x == o.x && y == o.y){
				return o;
			}
		}
		return null;
	},

	generateObstacle : function(){
		var x = Math.floor(Math.random()*this.cols);
		var y = Math.floor(Math.random()*this.rows);
		if(!this.getObstacleAt(x, y)){
			this.obstacles.push(new Obstacle(x, y, this.game));
		}
		else{
			this.generateObstacle();
		}
	}

});

module.exports = Labyrinth;