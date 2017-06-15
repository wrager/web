function Triangle() {
    Shape.apply(this, arguments);
    this._x1 = 0;
    this._y1 = 0;
    this._x2 = 0;
    this._y2 = 0;
    this._x3 = 0;
    this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setX1 = function(value) {
    this._x1 = value;
};

Triangle.prototype.setX2 = function(value) {
    this._x2 = value;
};

Triangle.prototype.setX3 = function(value) {
    this._x3 = value;
};

Triangle.prototype.setY1 = function(value) {
    this._y1 = value;
};

Triangle.prototype.setY2 = function(value) {
    this._y2 = value;
};

Triangle.prototype.setY3 = function(value) {
    this._y3 = value;
};

Triangle.prototype.getX1 = function() {
    return this._x1;
};

Triangle.prototype.getX2 = function() {
    return this._x2;
};

Triangle.prototype.getX3 = function() {
    return this._x3;
};

Triangle.prototype.getY1 = function() {
    return this._y1;
};

Triangle.prototype.getY2 = function() {
    return this._y2;
};

Triangle.prototype.getY3 = function() {
    return this._y3;
};


Triangle.prototype.draw = function() {
    var context = document.getElementById("canvas").getContext('2d');
    context.beginPath();
    context.moveTo(this.getX1(), this.getY1());
    context.lineTo(this.getX2(), this.getY2());
    context.lineTo(this.getX3(), this.getY3());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};

function subAbsNum(num1, num2) {
    return (Math.abs(Math.abs(num2) - Math.abs(num1)));
}

function lengthSide(x1, y1, x2, y2) {
    return (Math.sqrt(Math.pow(subAbsNum(x1, x2), 2) + Math.sqrt(Math.pow(subAbsNum(y1, y2), 2))));
}

Triangle.prototype.getSides = function() {
    var sideA = lengthSide(this._x1, this._y1, this._x2, this._y2);
    var sideB = lengthSide(this._x2, this._y2, this._x3, this._y3);
    var sideC = lengthSide(this._x3, this._y3, this._x1, this._y1);
    return [sideA, sideB, sideC];
};

Triangle.prototype.calculateArea = function() {
    var p = this.calculatePerimeter() / 2;
    var sides = this.getSides();

    return (Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])));
};

Triangle.prototype.calculatePerimeter = function() {
    var sides = this.getSides();
    return (sides[0] + sides[1] + sides[2]);
};

Triangle.prototype.getShapeName = function() {
    return "Triangle";
};