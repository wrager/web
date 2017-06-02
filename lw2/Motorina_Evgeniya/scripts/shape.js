function Shape(){
    this._fillColor = "black";
    this._borderColor = "black";
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