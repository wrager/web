function Rectangle(type) {
	Shape.call(this, type);
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setX1 = function(value) {
	this._x1 = value;
};
Rectangle.prototype.setX2 = function(value) {
	this._x2 = value;
};
Rectangle.prototype.setY1 = function(value) {
	this._y1 = value;
};
Rectangle.prototype.setY2 = function(value) {
	this._y2 = value;
};

Rectangle.prototype.getX1 = function() {
	return this._x1;
};
Rectangle.prototype.getY1 = function() {
	return this._y1;
};
Rectangle.prototype.getX2 = function() {
	return this._x2;
};
Rectangle.prototype.getY2 = function() {
	return this._y2;
};

Rectangle.prototype.calculateArea = function() {
	return  Math.abs((this._x2 - this._x1) * (this._y2 - this._y1));
};
Rectangle.prototype.calculatePerimeter = function() {
	return  Math.abs(((this._x2 - this._x1) + (this._y2 - this._y1)) * 2);
};
Rectangle.prototype.draw = function(ctx) {
	ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
	ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
};