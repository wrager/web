function Circle () {
    Shape.prototype.constructor.apply(this);
    this._radius = 0;
    this._x = 0;
    this._y = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getRadius = function () {
    return this._radius;
}

Circle.prototype.setRadius = function (value) {
    this._radius = value;
}

Circle.prototype.getX = function () {
    return this._x;
}

Circle.prototype.setX = function (value) {
    this._x = value;
}

Circle.prototype.getY = function () {
    return this._y;
}

Circle.prototype.setY = function (value) {
    this._y = value;
}

Circle.prototype.draw = function (ctx) {
    Shape.prototype.draw.apply(this);
    ctx.fillStyle = this._fillColor;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.strokeStyle = this._borderColor;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    ctx.stroke();
}

Circle.prototype.calculateArea = function () {
    var area = Math.PI * Math.pow(this._radius, 2);
    return area;
}

Circle.prototype.calculatePerimeter = function () {
    var perimeter = 2 * Math.PI * this._radius;
    return perimeter;
}
function Rectangle () {
    Shape.prototype.constructor.apply(this);
    this._x1 = 0;
    this._y1 = 0; 
    this._x2 = 0;
    this._y2 = 0;

}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getX1 = function () {
    return this._x1;
}

Rectangle.prototype.setX1 = function (value) {
    this._x1 = value;
}

Rectangle.prototype.getY1 = function () {
    return this._y1;
}

Rectangle.prototype.setY1 = function (value) {
    this._y1 = value;
}

Rectangle.prototype.getX2 = function () {
    return this._x2;
}

Rectangle.prototype.setX2 = function (value) {
    this._x2 = value;
}

Rectangle.prototype.getY2 = function () {
    return this._y2;
}

Rectangle.prototype.setY2 = function (value) {
    this._y2 = value;
}

Rectangle.prototype.draw = function (ctx) {
    Shape.prototype.draw.apply(this);
    ctx.fillStyle = this._fillColor;
    ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
    ctx.strokeStyle = this._borderColor;
    ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
}

Rectangle.prototype.calculateArea = function () {
    var area = Math.abs(this._x1 - this._x2) * Math.abs(this._y1 - this._y2);
    return area;
}

Rectangle.prototype.calculatePerimeter = function () {
    var perimeter = (Math.abs(this._x1 - this._x2) + Math.abs(this._y1 - this._y2)) * 2;
    return perimeter;
}

function Shape(){
    this._fillColor = "black";
    this._borderColor = "black";
}

Shape.prototype.setFillColor = function (value) {
    this._fillColor = value;
}

Shape.prototype.getFillColor = function () {
    return this._fillColor;
}

Shape.prototype.setBorderColor = function (value) {
    this._borderColor = value;
}

Shape.prototype.getBorderColor = function () {
    return this._borderColor;
}

Shape.prototype.draw = function () {}

Shape.prototype.calculateArea = function() {}

Shape.prototype.calculatePerimeter = function() {}
function Triangle () {
    Shape.prototype.constructor.apply(this);
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
    this._x3 = 0;
    this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getX1 = function () {
    return this._x1;
}

Triangle.prototype.setX1 = function (value) {
    this._x1 = value;
}

Triangle.prototype.getY1 = function () {
    return this._y1;
}

Triangle.prototype.setY1 = function (value) {
    this._y1 = value;
}

Triangle.prototype.getX2 = function () {
    return this._x2;
}

Triangle.prototype.setX2 = function (value) {
    this._x2 = value;
}

Triangle.prototype.getY2 = function () {
    return this._y2;
}

Triangle.prototype.setY2 = function (value) {
    this._y2 = value;
}

Triangle.prototype.getX3 = function () {
    return this._x3;
}

Triangle.prototype.setX3 = function (value) {
    this._x3 = value;
}

Triangle.prototype.getY3 = function () {
    return this._y3;
}

Triangle.prototype.setY3 = function (value) {
    this._y3 = value;
}

Triangle.prototype.draw = function (ctx) {
    Shape.prototype.draw.apply(this);
    ctx.fillStyle = this._fillColor;
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineTo(this._x3, this._y3);
    ctx.fill();

    ctx.strokeStyle = this._borderColor;
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineTo(this._x3, this._y3);
    ctx.closePath();
    ctx.stroke();

}

Triangle.prototype.calculateArea = function () {
    var a = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var b = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var c = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    var p = (a + b + c) / 2;
    var area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    return area;
}

Triangle.prototype.calculatePerimeter = function () {
    var a = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var b = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var c = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    var perimeter = a + b + c;
    return perimeter;
}
document.getElementById("clear_canvas").onclick = ClearCanvas();
document.getElementById("select_shapes").onchange = SelectShape(document.getElementById("select_shapes").value);
document.getElementById("add_triangle").onclick = AddTriangle();
document.getElementById("add_circle").onclick = AddCircle();
document.getElementById("add_rectangle").onclick = AddRectangle();

function SelectShape(value)
{
    ResetMenu();
    document.getElementById(value + "_menu").style.display = "block";
}

function ResetMenu()
{
    document.getElementById("circle_menu").style.display = "none";
    document.getElementById("triangle_menu").style.display = "none";
    document.getElementById("rectangle_menu").style.display = "none";
}

function AddTriangle() 
{
    this.triangle = new Triangle();
    this.triangle.setX1(document.getElementById("triangle_x1").value);
    this.triangle.setX2(document.getElementById("triangle_x2").value);
    this.triangle.setX3(document.getElementById("triangle_x3").value);
    this.triangle.setY1(document.getElementById("triangle_y1").value);
    this.triangle.setY2(document.getElementById("triangle_y2").value);
    this.triangle.setY3(document.getElementById("triangle_y3").value);

    this.triangle.setFillColor(document.getElementById("shape_fill_color").value);
    this.triangle.setBorderColor(document.getElementById("shape_border_color").value);
    var ctx = document.getElementById("canvas").getContext('2d');
    this.triangle.draw(ctx);

       document.getElementById("figure").innerHTML = "Triangle";
    document.getElementById("area").innerHTML = "Area: " + this.triangle.calculateArea().toFixed(1);
    document.getElementById("perimeter").innerHTML = "Perimeter: " + this.triangle.calculatePerimeter().toFixed(1);

}
    
function AddCircle() 
{
    this.circle = new Circle();
    this.circle.setX(document.getElementById("circ_centerX").value);
    this.circle.setY(document.getElementById("circ_centerY").value);
    this.circle.setRadius(document.getElementById("circ_radius").value);

    this.circle.setFillColor(document.getElementById("shape_fill_color").value);
    this.circle.setBorderColor(document.getElementById("shape_border_color").value);
    var ctx = document.getElementById("canvas").getContext('2d');
    this.circle.draw(ctx);

    document.getElementById("figure").innerHTML = "Circle";
    document.getElementById("area").innerHTML = "Area: " + this.circle.calculateArea().toFixed(1);
    document.getElementById("perimeter").innerHTML = "Perimeter: " + this.circle.calculatePerimeter().toFixed(1);

}

function AddRectangle() 
{
    this.rectangle = new Rectangle();

    this.rectangle.setX1(document.getElementById("rect_x1").value);
    this.rectangle.setY1(document.getElementById("rect_y1").value);
    this.rectangle.setX2(document.getElementById("rect_x2").value);
    this.rectangle.setY2(document.getElementById("rect_y2").value);

    this.rectangle.setFillColor(document.getElementById("shape_fill_color").value);
    this.rectangle.setBorderColor(document.getElementById("shape_border_color").value);
    var ctx = document.getElementById("canvas").getContext('2d');
    this.rectangle.draw(ctx);
    
    document.getElementById("figure").innerHTML = "Rectangle";
    document.getElementById("area").innerHTML = "Area: " + this.rectangle.calculateArea().toFixed(1);
    document.getElementById("perimeter").innerHTML = "Perimeter: " + this.rectangle.calculatePerimeter().toFixed(1);
}

function ClearCanvas() 
{
    this._canvas = document.getElementById("canvas");
    this._context = this.canvas.getContext('2d');
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);      

    document.getElementById("figure").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimeter").innerHTML = "";   
}
