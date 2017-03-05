function Rectangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.X1 = 0;
        this.coordX2 = 0;
        this.coordY1 = 0;
        this.coordY2 = 0;
    } else {
        this.X1 = params.X1;
        this.coordX2 = params.coordX2;
        this.coordY1 = params.coordY1;
        this.coordY2 = params.coordY2;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {

    setX1: function (coord) {
        this.X1 = coord;
    },

    setCoordX2: function (coord) {
        this.coordX2 = coord;
    },

    setCoordY1: function (coord) {
        this.coordY1 = coord;
    },

    setCoordY2: function (coord) {
        this.coordY2 = coord;
    },

    getCoordX1: function () {
        return this.X1;
    },

    getCoordX2: function () {
        return this.coordX2;
    },

    getCoordY1: function () {
        return this.coordY1;
    },

    getCoordY2: function () {
        return this.coordY2;
    },

    getHeight: function () {
        return Math.abs(this.getCoordY1() - this.getCoordY2());
    },

    getWidth: function () {
        return Math.abs(this.getCoordX1() - this.getCoordX2());
    },

    draw: function (context) {
        var xCoord = Math.min(this.getCoordX1(), this.getCoordX2());
        var yCoord = Math.min(this.getCoordY1(), this.getCoordY2());
        context.beginPath();
        context.rect(xCoord, yCoord, this.getWidth(), this.getHeight());
        context.fillStyle = Shape.prototype.getFillColor.call(this);
        context.strokeStyle = Shape.prototype.getBorderColor.call(this);
        context.fill();
        context.stroke();
    },

    calculateArea: function () {
        return (this.getWidth() * this.getHeight());
    },

    calculatePerimeter: function () {
        return ((this.getHeight() + this.getWidth()) * 2);
    }
};