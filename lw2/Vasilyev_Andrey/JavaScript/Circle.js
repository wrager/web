Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.x = 0;
Circle.prototype.y = 0;
Circle.prototype.radius = 0;

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.radius, 2));
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.radius);
}

Circle.prototype.getX = function() {
    return this.x;
}

Circle.prototype.getY = function() {
    return this.y;
}

Circle.prototype.getRadius = function() {
    return this.radius;
}

Circle.prototype.setX = function(value) {
    this.x = value;
}

Circle.prototype.setY = function(value) {
    this.x = value;
}

Circle.prototype.setRadius = function(value) {
    this.radius = value;
}

Circle.prototype.draw = function(canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.lineWidth = 1;
    context.beginPath();
    context.arc(this.x, this.y ,this.radius,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();
}