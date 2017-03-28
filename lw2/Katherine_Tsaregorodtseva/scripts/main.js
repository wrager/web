function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
    this.borderLine = 1;
};

Shape.prototype.setFillColor = function(value) {
    this.fillColor = value;
};
Shape.prototype.getFillColor = function() {
    return this.fillColor;
};
    
Shape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};
    
Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};

Shape.prototype.draw = function() {
};

function Rectangle() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
}
Rectangle.prototype.__proto__ = Shape.prototype;
Rectangle.prototype.getX = function() {
    return this.x;
}
Rectangle.prototype.setX = function(value) {
    this.x = value;
}
Rectangle.prototype.getY = function() {
    return this.y;
}
Rectangle.prototype.setY = function(value) {
    this.y = value;
}
Rectangle.prototype.calculateArea = function() {
    return (0);
}
Rectangle.prototype.calculatePerimeter = function() {
    return (0);
}
Rectangle.prototype.setWidth = function(value) {
    this.width = value;
}
Rectangle.prototype.getWidth = function() {
    return this.width;
}
Rectangle.prototype.setHeight = function(value) {
    return this.height = value;
}
Rectangle.prototype.getHeight = function() {
    return this.height;
}
Rectangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.drawText();
}
Rectangle.prototype.drawText = function()
{
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
    var s = this.calculateArea();
    var p = this.calculatePerimeter();
    ctx.font = "15px Segoe UI";
    ctx.fillText('S : ' + s + ', P : ' + p, 10, 20);
}

function Circle() {
    this.radius = 0;
    this.center_x = 0;
    this.center_y = 0;
};

Circle.prototype.__proto__ = Shape.prototype;
Circle.prototype.setRadius = function(value) {
    this.radius = value;
}
Circle.prototype.getRadius = function() {
    return this.radius;
}
Circle.prototype.getX = function() {
    return this.center_x;
}
Circle.prototype.setX = function(value) {
    this.center_x = value;
}
Circle.prototype.getY = function() {
    return this.center_y;
}
Circle.prototype.setY = function(value) {
    this.center_y = value;
}
Circle.prototype.calculateArea = function() {
    return (Math.PI * this.radius * this.radius);
}
Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.stroke();
    ctx.fill();

    this.drawText();
}
Circle.prototype.drawText = function()
{
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
    var s = this.calculateArea();
    var p = this.calculatePerimeter();
    ctx.font = "15px Segoe UI";
    ctx.fillText('S: ' + s + ', P: ' + p, 10, 20);
}

function clearPropField() {
    document.getElementsByClassName('circleProp')[0].style.visibility = 'hidden';
    document.getElementsByClassName('rectangleProp')[0].style.visibility = 'hidden';
    document.getElementsByClassName('circleProp')[0].style.display = 'none';
    document.getElementsByClassName('rectangleProp')[0].style.display = 'none';
    document.getElementsByClassName('triangleProp')[0].style.display = 'none';
    document.getElementsByClassName('triangleProp')[0].style.visibility = 'hidden';

}
function setPropField(shape) {
    document.getElementsByClassName(shape + 'Prop')[0].style.visibility = 'visible';
    document.getElementsByClassName(shape + 'Prop')[0].style.display = 'block';
}
function showParametersField(choosenShape) {
    clearPropField();
    setPropField(choosenShape);
}

function f(choosenShape) {
    showParametersField(choosenShape);
}
function setCircleRadiusAndDraw(circle, radius) {
    circle.setRadius(radius);
    circle.draw();
}
function setShapePosX(shape, x) {
    shape.setX(x);
    shape.draw();
}
function setShapePosY(shape, y) {
    shape.setY(y);
    shape.draw();
}
function setShapeFillColor(shape, fillColor) {
    shape.setFillColor(fillColor);
    shape.draw();
}
function setShapeBorderColor(shape, borderColor) {
    shape.setBorderColor(borderColor);
    shape.draw();
}
function setRctangleWidth(rectangle, value) {
    rectangle.setWidth(value);
    rectangle.draw();
}
function setRctangleHeight(rectangle, value) {
    rectangle.setHeight(value);
    rectangle.draw();
}

var circle = new Circle;
var rectangle = new Rectangle;