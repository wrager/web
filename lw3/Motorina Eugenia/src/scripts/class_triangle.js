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

Triangle.prototype.setX1 = function (value) {
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

Triangle.prototype.setX2 = function (value) {
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

Triangle.prototype.draw = function (ctx) {
    Shape.prototype.draw.apply(this);
    ctx.fillStyle = this._fillColor;
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineTo(this._x3, this._y3);
    ctx.fill();

    ctx.strokeStyle = this._borderColor;
    ctx.beginPath();
    ctx.moveTo(this._x1, this._y1);
    ctx.lineTo(this._x2, this._y2);
    ctx.lineTo(this._x3, this._y3);
    ctx.closePath();
    ctx.stroke();

}

Triangle.prototype.calculateArea = function () {
    var a = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var b = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var c = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    var p = (a + b + c) / 2;
    var area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    return area;
}

Triangle.prototype.calculatePerimeter = function () {
    var a = Math.sqrt(Math.pow(this._x2 - this._x1, 2) + Math.pow(this._y2 - this._y1, 2));
    var b = Math.sqrt(Math.pow(this._x3 - this._x2, 2) + Math.pow(this._y3 - this._y2, 2));
    var c = Math.sqrt(Math.pow(this._x1 - this._x3, 2) + Math.pow(this._y1 - this._y3, 2));
    var perimeter = a + b + c;
    return perimeter;
}