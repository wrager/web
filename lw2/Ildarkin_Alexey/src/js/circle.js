function Circle() {
    Shape.apply(this, arguments);
    this._centerPoint = null;
    this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function (value) {
    this._radius = value;
}

Circle.prototype.getRadius = function () {
    return this._radius;
}

Circle.prototype.setCenterPoint = function (value) {
    this._centerPoint = value;
}

Circle.prototype.getCenterPoint = function () {
    return this._centerPoint;
}

Circle.prototype.draw = function (context) {
    context.beginPath();
    context.arc(this.getCenterPoint().x, this.getCenterPoint().y, this.getRadius(), 0, 2 * Math.PI, false);
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.getRadius(), 2)).toFixed(1);
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.getRadius()).toFixed(1);
}