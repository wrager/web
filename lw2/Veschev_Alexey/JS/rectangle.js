function Rectangle(){
    Shape.apply(this, arguments);
    this.mX1 = 0;
    this.mY1 = 0;
    this.mX2 = 0;
    this.mY2 = 0;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

//first point
Rectangle.prototype.setX1 = function (value) {
    this.mX1 = value;
}

Rectangle.prototype.setY1 = function (value) {
    this.mY1 = value;
}

Rectangle.prototype.setFirstPoint = function(x, y){
    this.mX1 = x;
    this.mY1 = y;
}

Rectangle.prototype.getX1 = function () {
    return this.mX1;
}

Rectangle.prototype.getY1 = function () {
    return this.mY1;
}

// Second point

Rectangle.prototype.setX2 = function (value) {
    this.mX2 = value;
}

Rectangle.prototype.setY2 = function (value) {
    this.mY2 = value;
}

Rectangle.prototype.setSecondPoint = function(x, y){
    this.mX2 = x;
    this.mY2 = y;
}

Rectangle.prototype.getX2 = function () {
    return this.mX2;
}

Rectangle.prototype.getY2 = function () {
    return this.mY2;
}

// Width - Height
Rectangle.prototype.getWidth = function () {
    return Math.abs(this.getX1() - this.getX2());
}

Rectangle.prototype.getHeight = function () {
    return Math.abs(this.getY1() - this.getY2());
}

//Draw
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
//calculate
Rectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight()).toFixed(3);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(3);
}