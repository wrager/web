//------------------------------------ Triangle class
function Triangle() {
    Shape.apply(this, arguments);
    this.p1X = 0;
    this.p1Y = 0;
    this.p2X = 0;
    this.p2Y = 0;
    this.p3X = 0;
    this.p3Y = 0;

    var getLineLength = function(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

     this.getSides = function() {
        var line1 = getLineLength(this.getP1X(), this.getP1Y(), this.getP2X(), this.getP2Y());
        var line2 = getLineLength(this.getP1X(), this.getP1Y(), this.getP3X(), this.getP3Y());
        var line3 = getLineLength(this.getP2X(), this.getP2Y(), this.getP3X(), this.getP3Y());

        return [line1, line2, line3];
    }

    this.calculateArea = function () {
        var p = this.calculatePerimeter() / 2;
        var lines = this.getSides(); 

        return (Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(3);
    }

    this.calculatePerimeter = function () {
        var lines = this.getSides();

        return (lines[0] + lines[1] + lines[2]).toFixed(3);
    }
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

Triangle.prototype.getP2X = function () {
    return this.p2X
}

Triangle.prototype.setP3X = function (value) {
    this.p3X = value;
}

Triangle.prototype.getP3X = function () {
    return this.p3X
}

Triangle.prototype.setP1Y = function (value) {
    this.p1Y = value;
}

Triangle.prototype.getP1Y = function () {
    return this.p1Y
}

Triangle.prototype.setP2Y = function (value) {
    this.p2Y = value;
}

Triangle.prototype.getP2Y = function () {
    return this.p2Y
}

Triangle.prototype.setP3Y = function (value) {
    this.p3Y = value;
}

Triangle.prototype.getP3Y = function () {
    return this.p3Y
}

Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo(this.getP1X(), this.getP1Y());
    context.lineTo(this.getP2X(), this.getP2Y());
    context.lineTo(this.getP3X(), this.getP3Y());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}