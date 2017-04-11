function Rectangle() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getX1 = function () {
    return this.x1;
}

Rectangle.prototype.setX1 = function (value) {
    this.x1 = value;
}

Rectangle.prototype.getY1 = function () {
    return this.y1;
}

Rectangle.prototype.setY1 = function (value) {
    this.y1 = value;
}

Rectangle.prototype.getX2 = function () {
    return this.x2;
}

Rectangle.prototype.setX2 = function (value) {
    this.x2 = value;
}

Rectangle.prototype.getY2 = function () {
    return this.y2;
}

Rectangle.prototype.setY2 = function (value) {
    this.y2 = value;
}

Rectangle.prototype.getWidth = function () {
    return Math.abs(this.getX2() - this.getX1());
}

Rectangle.prototype.getHeight = function (value) {
    return Math.abs(this.getY2() - this.getY1());
}

Rectangle.prototype.draw = function () {
}

Rectangle.prototype.calculateArea = function () {
    return this.getWidth() * this.getHeight();
}

Rectangle.prototype.calculatePerimeter = function () {
    return 2 * (this.getWidth() + this.getHeight());
}