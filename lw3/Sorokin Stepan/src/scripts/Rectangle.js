function Rectangle() {
    Shape.apply(this, arguments);
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setX1 = function(value) {
    this._x1 = value;
};

Rectangle.prototype.setX2 = function(value) {
    this._x2 = value;
};

Rectangle.prototype.setY1 = function(value) {
    this._y1 = value;
};

Rectangle.prototype.setY2 = function(value) {
    this._y2 = value;
};

Rectangle.prototype.getX1 = function() {
    return this._x1;
};

Rectangle.prototype.getX2 = function() {
    return this._x2;
};

Rectangle.prototype.getY1 = function() {
    return this._y1;
};

Rectangle.prototype.getY2 = function() {
    return this._y2;
};

Rectangle.prototype.getWidth = function() {
    return (Math.abs(this._x2) - Math.abs(this._x1));
};

Rectangle.prototype.getHeight = function() {
    return (Math.abs(this._y2) - Math.abs(this._y1));
};

Rectangle.prototype.draw = function() {
    var context = document.getElementById("canvas").getContext('2d');
    context.beginPath();
    context.rect(this._x1, this._y1, this.getWidth(), this.getHeight());
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};

Rectangle.prototype.calculateArea = function() {
    return (this.getWidth() * this.getHeight());
};

Rectangle.prototype.calculatePerimeter = function() {
    return (this.getWidth() * 2 + this.getHeight() * 2);
};

Rectangle.prototype.getShapeName = function() {
    return "Rectangle";
};