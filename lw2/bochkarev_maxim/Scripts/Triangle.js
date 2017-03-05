function Triangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.x1 = 0;
        this.x2 = 0;
        this.y1 = 0;
        this.y2 = 0;
        this.x3 = 0;
        this.y3 = 0;
    } else {
        this.x1 = params.x1;
        this.x2 = params.x2;
        this.x3 = params.x3;
        this.y1 = params.y1;
        this.y2 = params.y2;
        this.y3 = params.y3;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }

}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype = {
    setX1: function (coord) {
        this.x1 = coord;
    },

    setX2: function (coord) {
        this.x2 = coord;
    },

    setX3: function (coord) {
        this.x3 = coord;
    },

    setY1: function (coord) {
        this.y1 = coord;
    },

    setY2: function (coord) {
        this.y2 = coord;
    },

    setY3: function (coord) {
        this.y3 = coord;
    },

    getX1: function () {
        return this.x1;
    },

    getX2: function () {
        return this.x2;
    },

    getX3: function () {
        return this.x3;
    },

    getY1: function () {
        return this.y1;
    },

    getY2: function () {
        return this.y2;
    },

    getY3: function () {
        return this.y3;
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