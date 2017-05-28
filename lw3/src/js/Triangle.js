function Triangle() {
    Shape.apply(this, arguments);
    
    this.X1 = 0;
    this.X2 = 0;
    this.Y1 = 0;
    this.Y2 = 0;
    this.X3 = 0;
    this.Y3 = 0;

}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype = {

    setX1: function (value) {
        this.X1 = value;
    },

    setX2: function (value) {
        this.X2 = value;
    },

    setX3: function (value) {
        this.X3 = value;
    },

    setY1: function (value) {
        this.Y1 = value;
    },

    setY2: function (value) {
        this.Y2 = value;
    },

    setY3: function (value) {
        this.Y3 = value;
    },

    getX1: function () {
        return this.X1;
    },

    getX2: function () {
        return this.X2;
    },

    getX3: function () {
        return this.X3;
    },

    getY1: function () {
        return this.Y1;
    },

    getY2: function () {
        return this.Y2;
    },

    getY3: function () {
        return this.Y3;
    },

    getLineLength: function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    },

    calculatePerimeter: function () {
        var sideA = this.getLineLength(this.getX1(), this.getY1(), this.getX2(), this.getY2());
        var sideB = this.getLineLength(this.getX1(), this.getY1(), this.getX3(), this.getY3());
        var sideC = this.getLineLength(this.getX3(), this.getY3(), this.getX2(), this.getY2());

        return sideA + sideB + sideC;
    },

    draw: function (context) {
        context.beginPath();
        context.moveTo(this.getX1(), this.getY1());
        context.lineTo(this.getX2(), this.getY2());
        context.lineTo(this.getX3(), this.getY3());
        context.closePath();
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    },

    calculateArea: function () {
        var halfPerimeter = this.calculatePerimeter() / 2;
        var sideA = this.getLineLength(this.getX1(), this.getY1(), this.getX2(), this.getY2());
        var sideB = this.getLineLength(this.getX1(), this.getY1(), this.getX3(), this.getY3());
        var sideC = this.getLineLength(this.getX3(), this.getY3(), this.getX2(), this.getY2());

        return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    }
};