
function Circle() {
    Shape.apply(this, arguments);
        this.centerX = 0;
        this.centerY = 0;
        this.radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype = {

    setFillColor: function (color) {
        this.fillColor = color;
    },

    setCenterX: function (value) {
        this.centerX = value;
    },

    setCenterY: function (value) {
        this.centerY = value;
    },

    setRadius: function (value) {
        this.radius = value;
    },

    getCenterX: function () {
        return this.centerX;
    },

    getCenterY: function () {
        return this.centerY;
    },

    getRadius: function () {
        return this.radius;
    },

    draw: function (context) {
        context.beginPath();
        context.arc(this.getCenterX(), this.getCenterY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
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

