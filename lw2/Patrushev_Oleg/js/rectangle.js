//------------------------------------ Rectangle class
function Rectangle() {
    Shape.apply(this, arguments);
    this.topLeftX = 0;
    this.topLeftY = 0;
    this.downRightX = 0;
    this.downRightY = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setTopLeftX = function (value) {
    this.topLeftX = value;
}

Rectangle.prototype.getTopLeftX = function () {
    return this.topLeftX;
}

Rectangle.prototype.setTopLeftY = function (value) {
    this.topLeftY = value;
}

Rectangle.prototype.getTopLeftY = function () {
    return this.topLeftY;
}

Rectangle.prototype.setDownRightX = function (value) {
    this.downRightX = value;
}

Rectangle.prototype.getDownRightX = function () {
    return this.downRightX;
}

Rectangle.prototype.setDownRightY = function (value) {
    this.downRightY = value;
}

Rectangle.prototype.getDownRightY = function () {
    return this.downRightY;
}

Rectangle.prototype.draw() = function () {
    
    this.width = Math.abs(topLeftX - downRightX);
    this.height = Math.abs(topLeftY - downRightY);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillRect(topLeftX, topLeftY, width, height);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Rectangle.prototype.calculateArea = function () {
    this.width = Math.abs(topLeftX - downRightX);
    this.height = Math.abs(topLeftY - downRightY);

    return this.width * this.height;
}

Rectangle.prototype.calculatePerimeter = function () {
    this.width = Math.abs(topLeftX - downRightX);
    this.height = Math.abs(topLeftY - downRightY);

    return this.width * 2 + this.height * 2;
}