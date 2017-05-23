function Triangle() {
    Shape.prototype.constructor.apply(this);

    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
    this._x3 = 0;
    this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype)
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getX1 = function() {
    return this._x1;
}

Triangle.prototype.getY1 = function() {
    return this._y1;
}

Triangle.prototype.setX1 = function(value) {
    this._x1 = value;
}

Triangle.prototype.setY1 = function(value) {
    this._y1 = value;
}

Triangle.prototype.getX2 = function() {
    return this._x2;
}

Triangle.prototype.getY2 = function() {
    return this._y2;
}

Triangle.prototype.setX2 = function(value) {
    this._x2 = value;
}

Triangle.prototype.setY2 = function(value) {
    this._y2 = value;
}

Triangle.prototype.getX3 = function() {
    return this._x3;
}

Triangle.prototype.getY3 = function() {
    return this._y3;
}

Triangle.prototype.setX3 = function(value) {
    this._x3 = value;
}

Triangle.prototype.setY3 = function(value) {
    this._y3 = value;
}

Triangle.prototype.draw = function() {
    Shape.prototype.draw.apply(this);
    this._ctx.fillStyle = this._fillColor;
    this._ctx.beginPath();
    this._ctx.moveTo(this._x1, this._y1);
    this._ctx.lineTo(this._x2, this._y2);
    this._ctx.lineTo(this._x3, this._y3);
    this._ctx.fill();

    this._ctx.strokeStyle = this._borderColor;
    this._ctx.beginPath();
    this._ctx.moveTo(this._x1, this._y1);
    this._ctx.lineTo(this._x2, this._y2);
    this._ctx.lineTo(this._x3, this._y3);
    this._ctx.closePath();
    this._ctx.stroke();
}

Triangle.prototype.setContext = function(ctx) {
    this._ctx = ctx;
}

Triangle.prototype.calculateArea = function() {
    Shape.prototype.calculateArea.apply(this);
    var AB = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var BC = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var CA = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    var p = (AB + BC + CA) / 2;
    return Math.sqrt(p * (p - AB) * (p - BC) * (p - CA));
}

Triangle.prototype.calculatePerimeter = function() {
    Shape.prototype.calculatePerimeter.apply(this);
    var AB = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var BC = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var CA = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    return AB + BC + CA;
}

Triangle.prototype.getValuesParameters = function() {
    return [this._x1, this._y1, this._x2, this._y2, this._x3, this._y3];
}