function Rectangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.X1 = 0;
        this.X2 = 0;
        this.Y1 = 0;
        this.Y2 = 0;
    } else {
        this.X1 = params.X1;
        this.X2 = params.X2;
        this.Y1 = params.Y1;
        this.Y2 = params.Y2;
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

    setX2: function (coord) {
        this.X2 = coord;
    },

    setY1: function (coord) {
        this.Y1 = coord;
    },

    setY2: function (coord) {
        this.Y2 = coord;
    },

    getCoordX1: function () {
        return this.X1;
    },

    getX2: function () {
        return this.X2;
    },

    getY1: function () {
        return this.Y1;
    },

    getY2: function () {
        return this.Y2;
    },

    getHeight: function () {
        return Math.abs(this.getY1() - this.getY2());
    },

    getWidth: function () {
        return Math.abs(this.getCoordX1() - this.getX2());
    },

    draw: function (context) {
        var xCoord = Math.min(this.getCoordX1(), this.getX2());
        var yCoord = Math.min(this.getY1(), this.getY2());
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