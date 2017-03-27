//------------------------------------ Shape class
function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
}

Shape.prototype.setFillColor = function (value) {
    this.fillColor = value;
}

Shape.prototype.getFillColor = function () {
    return this.fillColor;
}

Shape.prototype.setBorderColor = function (value) {
    this.borderColor = value;
}

Shape.prototype.getBorderColor = function () {
    return this.borderColor;
}

Shape.prototype.draw = function (context) {

}

Shape.prototype.calculateArea = function () {

}

Shape.prototype.calculatePerimeter = function () {

}