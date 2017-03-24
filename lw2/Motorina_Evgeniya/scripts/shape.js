function Shape(){
    this._fillColor = "#000000";
    this._borderColor = "#000000";
}

Shape.prototype.setFillColor = function (value) {
    this._fillColor = value;
}

Shape.prototype.getFillColor = function () {
    return this._fillColor;
}

Shape.prototype.setBorderColor = function (value) {
    this._borderColor = value;
}

Shape.prototype.getBorderColor = function () {
    return this._borderColor;
}

Shape.prototype.draw = function () {}

Shape.prototype.calculateArea = function() {}

Shape.prototype.calculatePerimeter = function() {}