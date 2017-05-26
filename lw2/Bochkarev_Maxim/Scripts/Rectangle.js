function Rectangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.x1 = 0;
        this.x2 = 0;
        this.y1 = 0;
        this.y2 = 0;
    } else {
        this.x1 = params.x1;
        this.x2 = params.x2;
        this.y1 = params.y1;
        this.y2 = params.y2;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {

    setX1: function (coord) {
        this.x1 = coord;
    },

    setX2: function (coord) {
        this.x2 = coord;
    },

    setY1: function (coord) {
        this.y1 = coord;
    },

    setY2: function (coord) {
        this.y2 = coord;
    },

    getCoordX1: function () {
        return this.x1;
    },

    getX2: function () {
        return this.x2;
    },

    getY1: function () {
        return this.y1;
    },

    getY2: function () {
        return this.y2;
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