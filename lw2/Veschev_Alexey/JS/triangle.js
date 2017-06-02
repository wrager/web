function Triangle() {
    Shape.apply(this, arguments);
    this.mX1 = 0;
    this.mY1 = 0;
    this.mX2 = 0;
    this.mY2 = 0;
    this.mX3 = 0;
    this.mY3 = 0;
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

//Setters
//First point
Triangle.prototype.setX1 = function (value) {
    this.mX1 = value;
}

Triangle.prototype.setY1 = function (value) {
    this.mY1 = value;
}

Triangle.prototype.setFristPoint = function (x, y) {
    this.mX1 = x;
    this.mY1 = y;
}

//Second point
Triangle.prototype.setX2 = function (value) {
    this.mX2 = value;
}

Triangle.prototype.setY2 = function (value) {
    this.mY2 = value;
}

Triangle.prototype.setSecondPoint = function (x, y) {
    this.mX2 = x;
    this.mY2 = y;
}

//Third point 
Triangle.prototype.setX3 = function (value) {
    this.mX3 = value;
}

Triangle.prototype.setY3 = function (value) {
    this.mY3 = value;
}

Triangle.prototype.setThirdPoint = function (x, y) {
    this.mX3 = x;
    this.mY3 = y;
}

//Getters
Triangle.prototype.getX1 = function () {
    return this.mX1;
}

Triangle.prototype.getX2 = function () {
    return this.mX2;
}

Triangle.prototype.getX3 = function () {
    return this.mX3;
}

Triangle.prototype.getY1 = function () {
    return this.mY1;
}

Triangle.prototype.getY2 = function () {
    return this.mY2;
}

Triangle.prototype.getY3 = function () {
    return this.mY3;
}

//Draw
Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo(this.getX1(), this.getY1());
    context.lineTo(this.getX2(), this.getY2());
    context.lineTo(this.getX3(), this.getY3());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

//calculate
Triangle.prototype.getFirstLine = function(){
    return Math.sqrt(Math.pow(this.getX1() - this.getY1(), 2) + (Math.pow(this.getX2() - this.getY2(), 2)));
}

Triangle.prototype.getSecondLine = function(){
    return Math.sqrt(Math.pow(this.getX1() - this.getY1(), 2) + (Math.pow(this.getX3() - this.getY3(), 2)));
}

Triangle.prototype.getThirdLine = function(){
    return Math.sqrt(Math.pow(this.getX2() - this.getY2(), 2) + (Math.pow(this.getX3() - this.getY3(), 2)));
}

Triangle.prototype.calculatePerimeter = function(){
   var perimeter = (this.getFirstLine() + this.getSecondLine() + this.getThirdLine()).toFixed(3);
    return perimeter;
    
}

Triangle.prototype.calculateArea = function () {
    var semiperimeter = this.calculatePerimeter() / 2;
    return (Math.sqrt(semiperimeter 
        * (semiperimeter - this.getFirstLine()) 
        * (semiperimeter - this.getSecondLine()) 
        * (semiperimeter - this.getThirdLine())))
        .toFixed(3);
}



