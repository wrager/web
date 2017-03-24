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

Thiangle.prototype.setX1 = function (value) {
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

Thiangle.prototype.setX2 = function (value) {
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