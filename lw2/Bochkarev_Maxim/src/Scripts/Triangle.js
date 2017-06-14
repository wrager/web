function Triangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.X1 = 0;
        this.X2 = 0;
        this.Y1 = 0;
        this.Y2 = 0;
        this.X3 = 0;
        this.Y3 = 0;
    } else {
        this.X1 = params.X1;
        this.X2 = params.X2;
        this.X3 = params.X3;
        this.Y1 = params.Y1;
        this.Y2 = params.Y2;
        this.Y3 = params.Y3;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }

}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype = {
    setX1: function (coord) {
        this.X1 = coord;
    },

    setX2: function (coord) {
        this.X2 = coord;
    },

    setX3: function (coord) {
        this.X3 = coord;
    },

    setY1: function (coord) {
        this.Y1 = coord;
    },

    setY2: function (coord) {
        this.Y2 = coord;
    },

    setY3: function (coord) {
        this.Y3 = coord;
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

    getLineLength: function (X1, Y1, X2, Y2) {
        return Math.sqrt(Math.pow(X2 - X1, 2) + (Math.pow(Y2 - Y1, 2)));
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
        context.fillStyle = Shape.prototype.getFillColor.call(this);
        context.strokeStyle = Shape.prototype.getBorderColor.call(this);
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