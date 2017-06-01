//------------------------------------ Rectangle class
function Rectangle() {
    Shape.apply(this, arguments);
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setX1 = function (value) {
    this.x1 = value;
}

Rectangle.prototype.getX1 = function () {
    return this.x1;
}

Rectangle.prototype.setY1 = function (value) {
    this.y1 = value;
}

Rectangle.prototype.getY1 = function () {
    return this.y1;
}

Rectangle.prototype.setX2 = function (value) {
    this.x2 = value;
}

Rectangle.prototype.getX2 = function () {
    return this.x2;
}

Rectangle.prototype.setY2 = function (value) {
    this.y2 = value;
}

Rectangle.prototype.getY2 = function () {
    return this.y2;
}

Rectangle.prototype.getWidth = function () {
    return Math.abs(this.getX1() - this.getX2());
}

Rectangle.prototype.getHeight = function () {
    return Math.abs(this.getY1() - this.getY2());
}

Rectangle.prototype.draw = function (context) {
    var tLeftX = Math.min(this.getX1(), this.getX2());
    var tLeftY = Math.min(this.getY1(), this.getY2());
    context.beginPath();
    context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Rectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight()).toFixed(2);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(2);
}