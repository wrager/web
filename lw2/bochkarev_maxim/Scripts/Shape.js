
function Shape() {
    this.fillColor = '#000000';
    this.borderColor = '#000000';
}

Shape.prototype = {
    getFillColor: function () {
        return this.fillColor;
    },

    setFillColor: function(color) {
        this.fillColor = color;
    },

    getBorderColor: function () {
        return this.borderColor;
    },

    setBorderColor: function(color) {
        this.borderColor = color;
    }
};

// ==============================================================
function Rectangle() {
    Shape.apply(this, arguments);
    this.coordX1 = 0;
    this.coordX2 = 0;
    this.coordY1 = 0;
    this.coordY2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {

    setCoordX1: function(coord) { this.coordX1 = coord; },

    setCoordX2: function(coord) { this.coordX2 = coord; },

    setCoordY1: function(coord) { this.coordY1 = coord; },

    setCoordY2: function(coord) { this.coordY2 = coord; },

    getCoordX1: function() { return this.coordX1; },

    getCoordX2: function() { return this.coordX2; },

    getCoordY1: function() { return this.coordY1; },

    getCoordY2: function() { return this.coordY2; },

    getHeight: function() { return Math.abs(this.getCoordY1() - this.getCoordY2()); },

    getWidth: function() { return Math.abs(this.getCoordX1() - this.getCoordX2()); },

    draw: function () {
        // TODO: RECTANGLE draw realization
    },

    calculateArea: function () { return (this.getWidth() * this.getHeight()); },

    calculatePerimeter: function () { return ((this.getHeight() + this.getWidth()) * 2); }
};

// ==============================================================
function Triangle() {
    Shape.apply(this, arguments);
    this.coordX1 = 0;
    this.coordX2 = 0;
    this.coordY1 = 0;
    this.coordY2 = 0;
    this.coordX3 = 0;
    this.coordY3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype = {
    setCoordX1: function(coord) { this.coordX1 = coord; },

    setCoordX2: function(coord) { this.coordX2 = coord; },

    setCoordX3: function(coord) { this.coordX3 = coord; },

    setCoordY1: function(coord) { this.coordY1 = coord; },

    setCoordY2: function(coord) { this.coordY2 = coord; },

    setCoordY3: function(coord) { this.coordY3 = coord; },

    getCoordX1: function() { return this.coordX1; },

    getCoordX2: function() { return this.coordX2; },

    getCoordX3: function() { return this.coordX3; },

    getCoordY1: function() { return this.coordY1; },

    getCoordY2: function() { return this.coordY2; },

    getCoordY3: function() { return this.coordY3; },

    getLineLength: function(coordX1, coordY1, coordX2, coordY2) {
        return Math.sqrt(Math.pow(coordX2 - coordX1, 2) + (Math.pow(coordY2 - coordY1, 2)));
    },

    calculatePerimeter: function(){
        var sideA = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX2(), this.getCoordY2());
        var sideB = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX3(), this.getCoordY3());
        var sideC = this.getLineLength(this.getCoordX3(), this.getCoordY3(), this.getCoordX2(), this.getCoordY2());

        return sideA + sideB + sideC;
    },

    draw: function () {
        // TODO: TRIANGLE draw realization
    },

    calculateArea: function() {
        var halfPerimeter = this.calculatePerimeter() / 2;
        var sideA = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX2(), this.getCoordY2());
        var sideB = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX3(), this.getCoordY3());
        var sideC = this.getLineLength(this.getCoordX3(), this.getCoordY3(), this.getCoordX2(), this.getCoordY2());

        return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    }
};

// ==============================================================
function Circle() {
    Shape.apply(this, arguments);
    this.coordX = 0;
    this.coordY = 0;
    this.radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype = {

    setCoordX: function(coord) { this.coordX = coord; },

    setCoordY: function(coord) { this.coordY = coord; },

    setRadius: function(value) { this.radius = value; },

    getCoordX: function() { return this.coordX; },

    getCoordY: function() { return this.coordY; },

    getRadius: function() { return this.radius; },

    draw: function () {
        // TODO: CIRCLE draw realization
    },

    calculatePerimeter: function(){ return Math.PI * this.getRadius() * 2; },

    calculateArea: function(){ return Math.pow(this.getRadius(), 2) * Math.PI; }
}
