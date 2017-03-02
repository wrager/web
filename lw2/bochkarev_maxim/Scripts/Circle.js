
function Circle() {
    Shape.apply(this, arguments);
    if (params == undefined){
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
};
