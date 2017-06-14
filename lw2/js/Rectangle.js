function Rectangle() {
	Shape.call(this, ShapeType.RECTANGLE);
	this._leftTop = {x: 0, y: 0};
    this._rightBottom = {x: 0, y: 0};
}
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.setLeftTop = function (x, y) {
    this._leftTop = {x: x, y: y};
};

Rectangle.prototype.getLeftTop = function () {
    return this._leftTop;
};

Rectangle.prototype.setRightBottom = function (x, y) {
    this._rightBottom = {x: x, y: y};
};

Rectangle.prototype.getRightBottom = function () {
    return this._rightBottom;
};

Rectangle.prototype.getWidth = function () {
    return this._rightBottom.x - this._leftTop.x;
};

Rectangle.prototype.getHeight = function () {
    return this._rightBottom.y - this._leftTop.y;
};

Rectangle.prototype.getArea = function() {
	return  Math.abs(this.getWidth() * this.getHeight());
};
Rectangle.prototype.getPerimeter = function() {
	return  Math.abs((this.getWidth()) + (this.getWidth()) * 2);
};

Rectangle.prototype.draw = function(ctx) {
	ctx.fillRect(this._leftTop.x, this._leftTop.y, this._rightBottom.x - this._leftTop.x, this._rightBottom.y - this._leftTop.y);
	ctx.strokeRect(this._leftTop.x, this._leftTop.y, this._rightBottom.x - this._leftTop.x, this._rightBottom.y - this._leftTop.y);
};