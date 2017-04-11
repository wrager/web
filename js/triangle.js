function Triangle() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.x3 = 0;
    this.y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getX1 = function () {
    return this.x1;
}

Triangle.prototype.setX1 = function (value) {
    this.x1 = value;
}

Triangle.prototype.getY1 = function () {
    return this.y1;
}

Triangle.prototype.setY1 = function (value) {
    this.y1 = value;
}

Triangle.prototype.getX2 = function () {
    return this.x2;
}

Triangle.prototype.setX2 = function (value) {
    this.x2 = value;
}

Triangle.prototype.getY2 = function () {
    return this.y2;
}

Triangle.prototype.setY2 = function (value) {
    this.y2 = value;
}

Triangle.prototype.getX3 = function () {
    return this.x3;
}

Triangle.prototype.setX3 = function (value) {
    this.x3 = value;
}

Triangle.prototype.getY3 = function () {
    return this.y3;
}

Triangle.prototype.setY3 = function (value) {
    this.y3 = value;
}

Rectangle.prototype.getFirstLine = function () {
    return Math.sqrt(Math.pow((this.getX2() - this.getX1()), 2) + Math.pow((this.getY2() - this.getY1()), 2));
}

Rectangle.prototype.getSecondLine = function () {
    return Math.sqrt(Math.pow((this.getX3() - this.getX1()), 2) + Math.pow((this.get32() - this.getY1()), 2));
}

Rectangle.prototype.getFirdLine = function () {
    return Math.sqrt(Math.pow((this.getX3() - this.getX2()), 2) + Math.pow((this.getY3() - this.getY2()), 2));
}

Triangle.prototype.draw = function () {
}

Triangle.prototype.calculateArea = function () {
    return ((getX1() - getX3()) * (getY2() - getY3()) - (getX2() - getX3()) * (getY1() - getY3())) / 2;
}

Triangle.prototype.calculatePerimeter = function () {
    return this.getFirstLine() + this.getSecondLine() + this.getFirdLine();
}