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

Circle.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.r, 2)).toFixed(3);
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.r).toFixed(3);
}
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
    return (this.getWidth() * this.getHeight()).toFixed(3);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(3);
}
var FONT_SIZE = 16;
var INFO_TEXT_COLOR = "#000000";

var circle;
var rectangle;
var triangle;

function onShapeSelect() {

    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");
    show("apply-btn");

    var selectedValue = getSelectorValue();


    if (selectedValue == "Circle") {
        show("circle-optional-form");
    } else if (selectedValue == "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue == "Triangle") {
        show("triangle-optional-form");
    }
}

function onApplyClick() {
    var canvas = getElement("canvas");
    var context = canvas.getContext("2d");
    var selectedValue = getSelectorValue();
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue == "Circle") {
        circle = new Circle();
        circle.setFillColor(getElementValue("input-fill-color"));
        circle.setBorderColor(getElementValue("input-border-color"));
        circle.setRadius(getElementValue("input-circle-r"));
        circle.setX(getElementValue("input-circle-x"));
        circle.setY(getElementValue("input-circle-y"));
    } else if (selectedValue == "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("input-fill-color"));
        rectangle.setBorderColor(getElementValue("input-border-color"));
        rectangle.setX1(getElementValue("input-rectangle-x1"));
        rectangle.setY1(getElementValue("input-rectangle-y1"));
        rectangle.setX2(getElementValue("input-rectangle-x2"));
        rectangle.setY2(getElementValue("input-rectangle-y2"));
    } else if (selectedValue == "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("input-fill-color"));
        triangle.setBorderColor(getElementValue("input-border-color"));
        triangle.setP1X(getElementValue("input-triangle-x1"));
        triangle.setP1Y(getElementValue("input-triangle-y1"));
        triangle.setP2X(getElementValue("input-triangle-x2"));
        triangle.setP2Y(getElementValue("input-triangle-y2"));
        triangle.setP3X(getElementValue("input-triangle-x3"));
        triangle.setP3Y(getElementValue("input-triangle-y3"));
    }

    draw([circle, rectangle, triangle], context);
}

function exist(item) {
    return typeof (item) != 'undefined' && item != null;
}

function draw(shapes, context) {
    var index = 1;

    shapes.forEach(function(element) {
        if (exist(element)) {
            element.draw(context);
            drawShapeInfo(context, element, index);
            index+=2;
        }
    });
}

function drawShapeInfo(context, shape, shift) {
    context.font=FONT_SIZE + "px Montserrat Alternates";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, 800, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
}

function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function hide(id) {
    var element =  getElement(id);
    element.style.display = "none";
}

function show (id) {
    var element =  getElement(id);
    element.style.display = "block"
}

function getSelectorValue() {
    var selector = getElement("shape-selector");
    return selector.options[selector.selectedIndex].value;
}
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

Shape.prototype.draw = function (context) {

}

Shape.prototype.calculateArea = function () {

}

Shape.prototype.calculatePerimeter = function () {

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

    this.getLineLength = function(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
}

    this.getSides = function() {
    var line1 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP2X(), this.getP2Y());
    var line2 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP3X(), this.getP3Y());
    var line3 = this.getLineLength(this.getP2X(), this.getP2Y(), this.getP3X(), this.getP3Y());

    return [line1, line2, line3];
}
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

Triangle.prototype.getP2X = function () {
    return this.p2X
}

Triangle.prototype.setP3X = function (value) {
    this.p3X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.setP1Y = function (value) {
    this.p1Y = value;
}

Triangle.prototype.getP1Y = function () {
    return this.p1Y
}

Triangle.prototype.setP2Y = function (value) {
    this.p2Y = value;
}

Triangle.prototype.getP2Y = function () {
    return this.p2Y
}

Triangle.prototype.setP3Y = function (value) {
    this.p3Y = value;
}

Triangle.prototype.getP3Y = function () {
    return this.p3Y
}

Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo(this.getP1X(), this.getP1Y());
    context.lineTo(this.getP2X(), this.getP2Y());
    context.lineTo(this.getP3X(), this.getP3Y());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Triangle.prototype.calculateArea = function () {
    var p = this.calculatePerimeter() / 2;
    var lines = this.getSides();

    return (Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(3);
}

Triangle.prototype.calculatePerimeter = function () {
    var lines = this.getSides();

    return (lines[0] + lines[1] + lines[2]).toFixed(3);
}
