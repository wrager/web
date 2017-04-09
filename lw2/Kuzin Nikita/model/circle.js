/**
 * Created by Dzzirt on 16.03.2017.
 */

function Circle() {
    this._mRadius = 0;
    this._mPos = {x: 0, y: 0};
}

Circle.prototype = Object.create(Shape.prototype) ;

Circle.prototype.setCenter = function (x, y) {
    this._mPos.x = x;
    this._mPos.y = y;
};

Circle.prototype.getCenter = function () {
    return this._mPos;
};

Circle.prototype.setRadius = function (radius) {
    this._mRadius = radius;
};

Circle.prototype.getRadius = function () {
    return this._mRadius;
};

Circle.prototype.getPerimeter = function () {
    return Math.PI * this._mRadius * 2;
};

Circle.prototype.getArea = function () {
    return Math.PI * Math.pow(this._mRadius, 2);
};