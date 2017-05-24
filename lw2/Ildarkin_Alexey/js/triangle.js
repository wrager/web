function Triangle() {
    Shape.apply(this, arguments);

    this._point1 = null;
    this._point2 = null;
    this._point3 = null;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setFirstPoint = function (value) {
    this._point1 = value;
}

Triangle.prototype.getFirstPoint = function () {
    return this._point1;
}

Triangle.prototype.setSecondPoint = function (value) {
    this._point2 = value;
}

Triangle.prototype.getSecondPoint = function () {
    return this._point2;
}

Triangle.prototype.setThirdPoint = function (value) {
    this._point3 = value;
}

Triangle.prototype.getThirdPoint = function () {
    return this._point3;
}

Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo(this.getFirstPoint().x, this.getFirstPoint().y);
    context.lineTo(this.getSecondPoint().x, this.getSecondPoint().y);
    context.lineTo(this.getThirdPoint().x, this.getThirdPoint().y);
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Triangle.prototype.calculateArea = function () {
    var perimeter = this.calculatePerimeter() / 2;
    var lines = this.getSides();

    return (Math.sqrt(perimeter * (perimeter - lines[0]) *
     (perimeter - lines[1]) * (perimeter - lines[2]))).toFixed(1);
}

Triangle.prototype.calculatePerimeter = function () {
    var lines = this.getSides();

    return (lines[0] + lines[1] + lines[2]).toFixed(1);
}

Triangle.prototype.getLineLength = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
}

Triangle.prototype.getSides = function () {
    var line1 = this.getLineLength(this.getFirstPoint().x, this.getFirstPoint().y,
     this.getSecondPoint().x, this.getSecondPoint().y);
    var line2 = this.getLineLength(this.getFirstPoint().x, this.getFirstPoint().y,
     this.getThirdPoint().x, this.getThirdPoint().y);
    var line3 = this.getLineLength(this.getSecondPoint().x, this.getSecondPoint().y,
     this.getThirdPoint().x, this.getThirdPoint().y);

    return [line1, line2, line3];
}