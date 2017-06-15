function Circle(type) {
	Shape.call(this, type);
	this._centerX = 0;
	this._centerY = 0;
	this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function(value) {
	this._radius = value;
};
Circle.prototype.setCenterX = function(value) {
	this._centerX = value;
};
Circle.prototype.setCenterY = function(value) {
	this._centerY = value;
};

Circle.prototype.getRadius = function() {
	return this._radius;
};
Circle.prototype.getCenterX = function() {
	return this._centerX;
};
Circle.prototype.getCenterY = function() {
	return this._centerY;
};

Circle.prototype.calculateArea = function() {
	return Math.PI * Math.pow(this._radius, 2);
};
Circle.prototype.calculatePerimeter = function() {
	return 2 * Math.PI * this._radius;
};
Circle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.arc(this._centerX, this._centerY, this._radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};