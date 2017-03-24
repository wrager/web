/**
 * Created by Dzzirt on 20.03.2017.
 */

function Rectangle() {
    this._upperLeft = {x: 0, y: 0};
    this._bottomRight = {x: 0, y: 0};
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.getWidth = function () {
    return this._bottomRight.x - this._upperLeft.x;
};

Rectangle.prototype.getHeight = function () {
    return this._bottomRight.y - this._upperLeft.y;
};

Rectangle.prototype.setUpperLeftPoint = function (x, y) {
    this._upperLeft = {x: x, y: y};
};

Rectangle.prototype.getUpperLeftPoint = function () {
    return this._upperLeft;
};

Rectangle.prototype.setBottomRightPoint = function (x, y) {
    this._bottomRight = {x: x, y: y};
};

Rectangle.prototype.getBottomRightPoint = function () {
    return this._bottomRight;
};

Rectangle.prototype.getPerimeter = function () {
    return 2 * (this.getWidth() + this.getHeight());
};

Rectangle.prototype.getArea = function () {
    return this.getWidth() * this.getHeight();
};

