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

Rectangle.prototype.draw = function () {

}

Rectangle.prototype.calculateArea = function () {
    var area = Math.abs(this._x1 - this._x2) * Math.abs(this._y1 - this._y2);
    return area;
}

Rectangle.prototype.calculatePerimetr = function () {
    var perimetr = (Math.abs(this._x1 - this._x2) + Math.abs(this._y1 - this._y2)) * 2;
    return perimetr;
}