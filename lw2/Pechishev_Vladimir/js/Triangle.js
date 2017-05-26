function Triangle(type) {
	Shape.call(this, type);
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
	this._x3 = 0;
	this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setX1 = function(value) {
	this._x1 = value;
} ;

Triangle.prototype.setX2 = function(value) {
	this._x2 = value;
};

Triangle.prototype.setY1 = function(value) {
	this._y1 = value;
};

Triangle.prototype.setY2 = function(value) {
	this._y2 = value;
};

Triangle.prototype.setX3 = function(value) {
	this._x3 = value;
};

Triangle.prototype.setY3 = function(value) {
	this._y3 = value;
};

Triangle.prototype.getX1 = function() {
	return this._x1;
};
Triangle.prototype.getY1 = function() {
	return this._y1;
};
Triangle.prototype.getX2 = function() {
	return this._x2;
};
Triangle.prototype.getY2 = function() {
	return this._y2;
};
Triangle.prototype.getX3 = function() {
	return this._x3;
};
Triangle.prototype.getY3 = function() {
	return this._y3;
};

Triangle.prototype.calculateArea = function() {
	const perimeter = this.calculatePerimeter();
	const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
	const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
	return Math.abs(Math.sqrt(perimeter * (perimeter - sideAB) * (perimeter - sideAC) * (perimeter - sideBC)));
};

Triangle.prototype.calculatePerimeter = function() {
	const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
	const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
	return (sideAB + sideAC + sideBC) * 0.5;
};

Triangle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this._x1, this._y1);
	ctx.lineTo(this._x2, this._y2);
	ctx.lineTo(this._x3, this._y3);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};

Triangle.prototype._getSide = function(point1, point2) {
	return Math.sqrt(Math.pow((point2["x"] - point1["x"]), 2) + Math.pow((point2["y"] - point1["y"]), 2));
};