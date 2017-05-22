function Rectangle() {
    Shape.apply(this, arguments);
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

Rectangle.prototype.draw = function (context) {
    var x0 = Math.min(this.getX1(), this.getX2());
    var y0 = Math.min(this.getY1(), this.getY2());
    context.beginPath();
    context.rect(x0, y0, this.getWidth(), this.getHeight());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Rectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight()).toFixed(0);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (2 * (this.getWidth() + this.getHeight())).toFixed(0);
}