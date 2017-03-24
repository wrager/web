/**
 * Created by Dzzirt on 20.03.2017.
 */

function Triangle() {
    this._firstPoint = {x: 0, y: 0};
    this._secondPoint = {x: 0, y: 0};
    this._thirdPoint = {x: 0, y: 0};
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.setFirstPoint = function (x, y) {
    this._firstPoint.x = x;
    this._firstPoint.y = y;
};

Triangle.prototype.getFirstPoint = function () {
    return this._firstPoint;
};

Triangle.prototype.setSecondPoint = function (x, y) {
    this._secondPoint.x = x;
    this._secondPoint.y = y;
};

Triangle.prototype.getSecondPoint = function () {
    return this._secondPoint;
};

Triangle.prototype.setThirdPoint = function (x, y) {
    this._thirdPoint.x = x;
    this._thirdPoint.y = y;
};

Triangle.prototype.getThirdPoint = function () {
    return this._thirdPoint;
};

Triangle.prototype.getLeftSide = function () {
    return Math.sqrt(
        Math.pow(this._secondPoint.x - this._firstPoint.x, 2)
        + Math.pow(this._secondPoint.y - this._firstPoint.y, 2));
};

Triangle.prototype._getSide = function (firstPoint, secondPoint) {
    return Math.sqrt(
        Math.pow(secondPoint.x - firstPoint.x, 2)
        + Math.pow(secondPoint.y - firstPoint.y, 2));
};

Triangle.prototype.getPerimeter = function () {
    var a = this._getSide(this._firstPoint, this._secondPoint);
    var b = this._getSide(this._secondPoint, this._thirdPoint);
    var c = this._getSide(this._thirdPoint, this._firstPoint);
    return a + b + c;
};

Triangle.prototype.getArea = function () {
    var a = this._getSide(this._firstPoint, this._secondPoint);
    var b = this._getSide(this._secondPoint, this._thirdPoint);
    var c = this._getSide(this._thirdPoint, this._firstPoint);
    var halfPerimeter = this.getPerimeter() / 2;
    return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
};