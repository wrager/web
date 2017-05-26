function Position(x , y){
    this.x = x;
	this.y = y;
}

function Shape(type) {
	this._color= "#000000";
	this._borderColor=  "#000000";
	this._type = type;
}

Shape.prototype = {
    setFillColor: function(value) {
        this._color = value;
    },

    getFillColor: function() {
        return this._color;
    },
    setBorderColor: function(value) {
        this._borderColor = value;
    },
    getBorderColor: function() {
        return this._borderColor;
    },
    draw: function(ctx) {},
    calculateArea: function() {},
    calculatePerimeter: function() {},
	
	type: function() {
		return this._type;
	},
};