function Circle() {
    Shape.apply(this, arguments);
    this._x = 0;
    this._y = 0;
    this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function(value) {
    this._radius = value;
};

Circle.prototype.getRadius = function() {
    return this._radius;
};

Circle.prototype.setX = function(value) {
    this._x = value;
};

Circle.prototype.getX = function() {
    return this._x;
};

Circle.prototype.setY = function(value) {
    this._y = value;
};

Circle.prototype.getY = function() {
    return this._y;
};

Circle.prototype.draw = function() {
    context = document.getElementById("canvas").getContext('2d');
    context.beginPath();
    context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};

Circle.prototype.calculateArea = function() {
    return (Math.PI * Math.pow(this._radius, 2));
};

Circle.prototype.calculatePerimeter = function() {
    return (2 * Math.PI * this._radius);
};

Circle.prototype.getShapeName = function() {
    return "Circle";
};