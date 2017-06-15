function Shape() {
    this._fillColor = "#000000";
    this._borderColor = "#000000";
}

Shape.prototype.setFillColor = function (color) {
    this._fillColor = color;
}

Shape.prototype.getFillColor = function () {
    return this._fillColor;
}

Shape.prototype.setBorderColor = function (color) {
    this._borderColor = color;
}

Shape.prototype.getBorderColor = function () {
    return this._borderColor;
}

Shape.prototype.draw = function (context) {
    context;
}

Shape.prototype.calculateArea = function () {}

Shape.prototype.calculatePerimeter = function () {}