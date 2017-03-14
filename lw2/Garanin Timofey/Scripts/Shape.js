function Shape() {
    this._fillColor = "#000000";
    this._borderColor = "#000000";
    this._ctx;
};

Shape.prototype.SetFillColor = function(value) {
    this._fillColor = value;
}

Shape.prototype.GetFillColor = function() {
    return this._fillColor;
}

Shape.prototype.SetBorderColor = function(value) {
    this._borderColor = value;
}

Shape.prototype.GetBorderColor = function() {
    return this._borderColor;
}

Shape.prototype.draw = function() {}

Shape.prototype.calculateArea = function() {}

Shape.prototype.calculatePerimeter = function() {}