//------------------------------------ Shape class
function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
}

Shape.prototype.setFillColor = function (value) {
    this.fillColor = value;
}

Shape.prototype.getFillColor = function () {
    return this.fillColor;
}

Shape.prototype.setBorderColor = function (value) {
    this.borderColor = value;
}

Shape.prototype.getBorderColor = function () {
    return this.borderColor;
}

Shape.prototype.draw = function () {

}

Shape.prototype.calculateArea = function () {

}

Shape.prototype.calculatePerimeter = function () {

}

//------------------------------------ Circle class
function Circle() {
    Shape.apply(this, arguments);
    this.x = 0;
    this.y = 0;
    this.r = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function (value) {
    this.r = value;
}

Circle.prototype.getRadius = function () {
    return this.r;
}

Circle.prototype.setX = function (value) {
    this.x = value;
}

Circle.prototype.getX = function () {
    return this.x;
}

Circle.prototype.setY = function (value) {
    this.y = value;
}

Circle.prototype.getY = function () {
    return this.y;
}

Circle.prototype.draw = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Circle.prototype.calculateArea = function () {
    return Math.PI * Math.pow(this.r, 2);
}

Circle.prototype.calculatePerimeter = function () {
    return 2 * Math.PI * this.r;
}

//------------------------------------ Rectangle class
function Rectangle() {
    Shape.apply(this, arguments);
    this.topLeftX = 0;
    this.topLeftY = 0;
    this.downRightX = 0;
    this.downRightY = 0;
    this.width = Math.abs(topLeftX - downRightX);
    this.height = Math.abs(topLeftY - downRightY);
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
    return this.width * this.height;
}

Rectangle.prototype.calculatePerimeter = function () {
    return this.width * 2 + this.height * 2;
}

//------------------------------------ Triangle class
function Triangle() {
    Shape.apply(this, arguments);
    this.p1X = 0;
    this.p1Y = 0;
    this.p2X = 0;
    this.p2Y = 0;
    this.p3X = 0;
    this.p3Y = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setP1X = function (value) {
    this.p1X = value;
}

Triangle.prototype.getP1X = function () {
    return this.p1X
}

Triangle.prototype.setP2X = function (value) {
    this.p2X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.setP3X = function (value) {
    this.p3X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.draw = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(this.p1X, this.p1Y);
    context.lineTo(this.p2X, this.p2Y);
    context.lineTo(this.p3X, this.p3Y);
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Triangle.prototype.calculateArea = function () {
    var line1 = Math.sqrt(Math.pow(p2X - p1X, 2) + (Math.pow(p2Y - P1Y, 2)));
    var line2 = Math.sqrt(Math.pow(p3X - p1X, 2) + (Math.pow(p3Y - P1Y, 2)));
    var line3 = Math.sqrt(Math.pow(p2X - p3X, 2) + (Math.pow(p2Y - P3Y, 2)));
    var p = this.calculatePerimeter() / 2;

    return Math.sqrt(p * (p - line1) * (p - line2) * (p - line3));
}

Triangle.prototype.calculatePerimeter = function () {
    var line1 = Math.sqrt(Math.pow(p2X - p1X, 2) + (Math.pow(p2Y - P1Y, 2)));
    var line2 = Math.sqrt(Math.pow(p3X - p1X, 2) + (Math.pow(p3Y - P1Y, 2)));
    var line3 = Math.sqrt(Math.pow(p2X - p3X, 2) + (Math.pow(p2Y - P3Y, 2)));

    return line1 + line2 + line3;
}








//other stuff
var circle = new Circle();
circle.setFillColor("#00FF00");
circle.setBorderColor("#FF0000");
circle.setX(100);
circle.setY(50);
circle.setRadius(35);

circle.draw();




