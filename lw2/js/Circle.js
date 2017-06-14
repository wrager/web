function Circle() {
	Shape.call(this, ShapeType.CIRCLE);
	this._center = {x: 0, y: 0};
	this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.setRadius = function(radius) {
	this._radius = radius;
};

Circle.prototype.getRadius = function() {
	return this._radius;
};

Circle.prototype.setCenter = function (x, y) {
    this._center.x = x;
    this._center.y = y;
};

Circle.prototype.getCenter = function () {
    return this._center;
};

Circle.prototype.getArea = function() {
	return Math.PI * Math.pow(this._radius, 2);
};

Circle.prototype.getPerimeter = function() {
	return 2 * Math.PI * this._radius;
};

Circle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.arc(this._center.x, this._center.y, this._radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};