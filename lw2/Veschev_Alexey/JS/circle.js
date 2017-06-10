function Circle(){
    Shape.apply(this, arguments);
    this.mRadius = 0;
    this.mX = 0;
    this.mY = 0;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//Set param
Circle.prototype.setRadius = function (value) {
    this.mRadius = value;
}

Circle.prototype.setCenter = function (x, y) {
    this.mX = x;
    this.mY = y;
}

Circle.prototype.setX = function (x) {
    this.mX = x;
}

Circle.prototype.setY = function (y) {
    this.mY = y;
}

Circle.prototype.getRadius = function () {
    return this.mRadius;
}

Circle.prototype.getX = function (x) {
    return this.mX;
}

Circle.prototype.getY = function (y) {
    return this.mY;
}

//Draw
Circle.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.getX(), this.getX(), this.getRadius(), 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

//calculate
Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.mRadius, 2)).toFixed(3);
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.mRadius).toFixed(3);
}