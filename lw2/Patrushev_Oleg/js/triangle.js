//------------------------------------ Triangle class
function Triangle() {
    Shape.apply(this, arguments);
    this.p1X = 0;
    this.p1Y = 0;
    this.p2X = 0;
    this.p2Y = 0;
    this.p3X = 0;
    this.p3Y = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setP1X = function (value) {
    this.p1X = value;
}

Triangle.prototype.getP1X = function () {
    return this.p1X
}

Triangle.prototype.setP2X = function (value) {
    this.p2X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.setP3X = function (value) {
    this.p3X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.draw = function () {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(this.p1X, this.p1Y);
    context.lineTo(this.p2X, this.p2Y);
    context.lineTo(this.p3X, this.p3Y);
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Triangle.prototype.calculateArea = function () {
    var line1 = Math.sqrt(Math.pow(p2X - p1X, 2) + (Math.pow(p2Y - P1Y, 2)));
    var line2 = Math.sqrt(Math.pow(p3X - p1X, 2) + (Math.pow(p3Y - P1Y, 2)));
    var line3 = Math.sqrt(Math.pow(p2X - p3X, 2) + (Math.pow(p2Y - P3Y, 2)));
    var p = this.calculatePerimeter() / 2;

    return Math.sqrt(p * (p - line1) * (p - line2) * (p - line3));
}

Triangle.prototype.calculatePerimeter = function () {
    var line1 = Math.sqrt(Math.pow(p2X - p1X, 2) + (Math.pow(p2Y - P1Y, 2)));
    var line2 = Math.sqrt(Math.pow(p3X - p1X, 2) + (Math.pow(p3Y - P1Y, 2)));
    var line3 = Math.sqrt(Math.pow(p2X - p3X, 2) + (Math.pow(p2Y - P3Y, 2)));

    return line1 + line2 + line3;
}