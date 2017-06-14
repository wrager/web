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
    return Math.PI * Math.pow(this.r, 2);
}

Circle.prototype.calculatePerimeter = function () {
    return 2 * Math.PI * this.r;
}