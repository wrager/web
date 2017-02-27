// Shape class
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

// Circle class
function Circle() {
    Shape.apply(this, arguments); //?????????????
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
    //draw here
}

Circle.prototype.calculateArea = function () {
    return Math.PI * Math.pow(this.r, 2);
}

Circle.prototype.calculateArea = function () {
    return 2 * Math.PI * this.r;
}

alert("hey");
var circle = new Circle();
circle.setBorderColor("#444444");
circle.setX(100);
circle.setY(50);
circle.setRadius(35);

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.beginPath();
context.arc(circle.getX, circle.getY, circle.getRadius, 0, 2 * Math.PI, false);
context.fillStyle = circle.getFillColor;
context.fill();
context.strokeStyle = circle.getBorderColor;
context.stroke();