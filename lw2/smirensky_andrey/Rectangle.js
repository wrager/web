function Rectangle() {
    Shape.apply(this, arguments);

    this.X1 = 0;
    this.X2 = 0;
    this.Y1 = 0;
    this.Y2 = 0;

}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype = {

    setX1: function (value) {
        this.X1 = value;
    },

    setX2: function (value) {
        this.X2 = value;
    },

    setY1: function (value) {
        this.Y1 = value;
    },

    setY2: function (value) {
        this.Y2 = value;
    },

    getX1: function () {
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
        return Math.abs(this.getX1() - this.getX2());
    },

    draw: function (context) {
        var x = Math.min(this.getX1(), this.getX2());
        var y = Math.min(this.getY1(), this.getY2());
        context.beginPath();
        context.rect(x, y, this.getWidth(), this.getHeight());
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

