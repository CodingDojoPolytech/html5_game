var Entity = require("./Entity");


/**
 * Created by tom on 01/04/15.
 */

var Player = Entity.extend({
	init: function(x,y,game) {
		this._super(x,y,game);
		this.score=0;
		this.color = "red";
	},
	/*
	 gauche=37
	 haut=38
	 droite=39
	 bas=40
	 */
	move : function (event) {
		this.moveEntity(event.which);
	}
});