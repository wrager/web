function Circle () {
    Shape.prototype.constructor.apply(this);
    this._radius = 0;
    this._x = 0;
    this._y = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getRadius = function () {
    return this._radius;
}

Circle.prototype.setRadius = function (value) {
    this._radius = value;
}

Circle.prototype.getX = function () {
    return this._x;
}

Circle.prototype.setX = function (value) {
    this._x = value;
}

Circle.prototype.getY = function () {
    return this._y;
}

Circle.prototype.setY = function (value) {
    this._y = value;
}

Circle.prototype.draw = function () {

}

Circle.prototype.calculateArea = function () {
    var area = Math.PI * Math.pow(r, 2);
}

Circle.prototype.calculatePerimetr = function () {
    var perimetr = 2 * Math.PI * r;
}