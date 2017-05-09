function Shape(type) {
	this._outputLineColor= "#000000";
	this._fillColor=  "#000000";
}

Shape.prototype = {

	setOutputLineColor: function(color) {
		this._outputLineColor = color;
	},
	
	getOutputLineColor: function() {
		return this._outputLineColor;
	},
	
	setFillColor: function(color) {
		this._fillColor = color;
	},
	
	getFillColor: function() {
		return this._fillColor;
	},

};