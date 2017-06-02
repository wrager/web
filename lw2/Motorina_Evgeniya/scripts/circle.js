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

Circle.prototype.draw = function (ctx) {
    Shape.prototype.draw.apply(this);
    ctx.fillStyle = this._fillColor;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.strokeStyle = this._borderColor;
    ctx.beginPath();
    ctx.arc(this._x, this._y, this._radius, 0, 2 * Math.PI, false);
    ctx.stroke();
}

Circle.prototype.calculateArea = function () {
    var area = Math.PI * Math.pow(this._radius, 2);
    return area;
}

Circle.prototype.calculatePerimeter = function () {
    var perimeter = 2 * Math.PI * this._radius;
    return perimeter;
}