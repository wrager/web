function Circle(params) {
    Shape.apply(this, arguments);
    if (params == undefined) {
        this.coordX = 0;
        this.coordY = 0;
        this.radius = 0;
    } else {
        this.coordX = params.coordX;
        this.coordY = params.coordY;
        this.radius = params.radius;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype = {

    setCoordX: function (coord) {
        this.coordX = coord;
    },

    setCoordY: function (coord) {
        this.coordY = coord;
    },

    setRadius: function (value) {
        this.radius = value;
    },

    getCoordX: function () {
        return this.coordX;
    },

    getCoordY: function () {
        return this.coordY;
    },

    getRadius: function () {
        return this.radius;
    },

    draw: function (context) {
        context.beginPath();
        context.arc(this.getCoordX(), this.getCoordY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = Shape.prototype.getFillColor.call(this);
        context.strokeStyle = Shape.prototype.getBorderColor.call(this);
        context.fill();
        context.stroke();
    },

    calculatePerimeter: function () {
        return Math.PI * this.getRadius() * 2;
    },

    calculateArea: function () {
        return Math.pow(this.getRadius(), 2) * Math.PI;
    }
};
