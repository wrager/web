function Rectangle() {
    Shape.prototype.constructor.apply(this);
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getX1 = function() {
    return this._x1;
}

Rectangle.prototype.getY1 = function() {
    return this._y1;
}

Rectangle.prototype.setX1 = function(value) {
    this._x1 = value;
}

Rectangle.prototype.setY1 = function(value) {
    this._y1 = value;
}

Rectangle.prototype.getX2 = function() {
    return this._x2;
}

Rectangle.prototype.getY2 = function() {
    return this._y2;
}

Rectangle.prototype.setX2 = function(value) {
    this._x2 = value;
}

Rectangle.prototype.setY2 = function(value) {
    this._y2 = value;
}

Rectangle.prototype.draw = function() {
    Shape.prototype.draw.apply(this);
    this._ctx.fillStyle = this._fillColor;
    this._ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
    this._ctx.strokeStyle = this._borderColor;
    this._ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
}

Rectangle.prototype.calculateArea = function() {
    Shape.prototype.calculateArea.apply(this);
    var lengthA = Math.sqrt(Math.pow(this._y2 - this._y1, 2));
    var lengthB = Math.sqrt(Math.pow(this._x2 - this._x1, 2));
    return lengthB * lengthA;
}

Rectangle.prototype.calculatePerimeter = function() {
    Shape.prototype.calculatePerimeter.apply(this);
    var lengthA = Math.sqrt(Math.pow(this._y2 - this._y1, 2));
    var lengthB = Math.sqrt(Math.pow(this._x2 - this._x1, 2));
    return (lengthB + lengthA) * 2;
}

Rectangle.prototype.setContext = function(ctx) {
    this._ctx = ctx;
}

Rectangle.prototype.getValuesParameters = function() {
    return [this._x1, this._y1, this._x2, this._y2];
}