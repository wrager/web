function Rectangle() {
    Shape.apply(this, arguments);
    this._leftTopPoint = null;
    this._rightBottomPos = null;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setLeftTopPoint = function (value) {
    this._leftTopPoint = value;
}

Rectangle.prototype.getLeftTopPoint = function () {
    return this._leftTopPoint;
}

Rectangle.prototype.setRightBottomPoint = function (value) {
    this._rightBottomPos = value;
}

Rectangle.prototype.getRightBottomPoint = function () {
    return this._rightBottomPos;
}

Rectangle.prototype.getWidth = function () {
    return Math.abs(this.getLeftTopPoint().x - this.getRightBottomPoint().x);
}

Rectangle.prototype.getHeight = function () {
    return Math.abs(this.getLeftTopPoint().y - this.getRightBottomPoint().y);
}

Rectangle.prototype.draw = function (context) {
    var topLeftX = Math.min(this.getLeftTopPoint().x, this.getRightBottomPoint().x);
    var topLeftY = Math.min(this.getLeftTopPoint().y, this.getRightBottomPoint().y);
    context.beginPath();
    context.rect(topLeftX, topLeftY, this.getWidth(), this.getHeight());
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Rectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight()).toFixed(1);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(1);
}