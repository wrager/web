function Circle() {
    Shape.prototype.constructor.apply(this);
    this._radius = 0;
    this._x = 0;
    this._y = 0;
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle;

Circle.prototype.getRadius = function() {
    return this._radius;
}

Circle.prototype.setRadius = function(value) {
    this._radius = value;
}

Circle.prototype.getX = function() {
    return this._x;
}

Circle.prototype.getY = function() {
    return this._y;
}

Circle.prototype.setX = function(value) {
    this._x = value;
}

Circle.prototype.setY = function(value) {
    this._y = value;
}

Circle.prototype.setContext = function(ctx) {
    this._ctx = ctx;
}

Circle.prototype.draw = function() {
    Shape.prototype.draw.apply(this);
    this._ctx.fillStyle = this._fillColor;
    this._ctx.beginPath();
    this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    this._ctx.fill();

    this._ctx.strokeStyle = this._borderColor;
    this._ctx.beginPath();
    this._ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    this._ctx.stroke();
}

Circle.prototype.calculateArea = function() {
    Shape.prototype.calculateArea.apply(this);
    return Math.PI * Math.pow(this._radius, 2);
}

Circle.prototype.calculatePerimeter = function() {
    Shape.prototype.calculatePerimeter.apply(this);
    return 2 * Math.PI * this._radius;
}

Circle.prototype.getValuesParameters = function() {
    return [this._x, this._y, this._radius];
}