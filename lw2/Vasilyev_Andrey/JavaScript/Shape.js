
Shape = function () {
    return this;
}

Shape.prototype.borderColor = "#000000";
Shape.prototype.fillColor = "#FFFFFF";

Shape.prototype.setFillColor = function (value) {
    this.fillColor = value;
};
Shape.prototype.setBorderColor = function (value) {
    this.borderColor = value;
};
Shape.prototype.getFillColor = function () {
    return this.fillColor;
};
Shape.prototype.getBorderColor = function () {
    return this.borderColor;
};