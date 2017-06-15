function Shape() {
    this.fillShape = "#000000";
    this.borderColor = "#000000";
}

Shape.prototype.setFillColor = function(value) {
    this.fillShape = value;
};

Shape.prototype.getFillColor = function() {
    return this.fillShape;
};

Shape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};

Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};

Shape.prototype.draw = function() {

};

Shape.prototype.calculateArea = function() {

};

Shape.prototype.calculatePerimeter = function() {

};

Shape.prototype.getShapeName = function() {

};