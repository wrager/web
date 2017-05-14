function Triangle() {
	Shape.call(this, ShapeType.TRIANGLE);
	this._vertex1 = {x: 0, y: 0};
    this._vertex2 = {x: 0, y: 0};
    this._vertex3 = {x: 0, y: 0};
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.setVertex1 = function (x, y) {
    this._vertex1.x = x;
    this._vertex1.y = y;
};

Triangle.prototype.getVertex1 = function () {
    return this._vertex1;
};

Triangle.prototype.setVertex2 = function (x, y) {
    this._vertex2.x = x;
    this._vertex2.y = y;
};

Triangle.prototype.getVertex2 = function () {
    return this._vertex2;
};

Triangle.prototype.setVertex3 = function (x, y) {
    this._vertex3.x = x;
    this._vertex3.y = y;
};

Triangle.prototype.getVertex3 = function () {
    return this._vertex3;
};

Triangle.prototype.getArea = function() {
	const perimeter = this.calculatePerimeter();
	const sideAB = this._getSide( {x: this._vertex1.x, y: this._vertex1.y}, {x: this._vertex2.x, y: this._vertex2.y});
	const sideAC = this._getSide( {x: this._vertex1.x, y: this._vertex1.y}, {x: this._vertex3.x, y: this._vertex3.y});
	const sideBC = this._getSide( {x: this._vertex2.x, y: this._vertex2.y}, {x: this._vertex3.x, y: this._vertex3.y});
	return Math.abs(Math.sqrt(perimeter * (perimeter - sideAB) * (perimeter - sideAC) * (perimeter - sideBC)));
};

Triangle.prototype.getPerimeter = function() {
	const sideAB = this._getSide({ x: this._vertex1.x, y: this._vertex1.y}, { x: this._vertex2.x, y: this._vertex2.y});
	const sideAC = this._getSide({ x: this._vertex1.x, y: this._vertex1.y}, { x: this._vertex3.x, y: this._vertex3.y});
	const sideBC = this._getSide({ x: this._vertex2.x, y: this._vertex2.y}, { x: this._vertex3.x, y: this._vertex3.y});
	return (sideAB + sideAC + sideBC) * 0.5;
};

Triangle.prototype._getSide = function(point1, point2) {
	return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
};

Triangle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this._vertex1.x, this._vertex1.y);
	ctx.lineTo(this._vertex2.x, this._vertex2.y);
	ctx.lineTo(this._vertex3.x, this._vertex3.y);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};