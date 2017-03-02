
function Triangle(params) {
    Shape.apply(this, arguments);
    if (params == undefined){
        this.coordX1 = 0;
        this.coordX2 = 0;
        this.coordY1 = 0;
        this.coordY2 = 0;
        this.coordX3 = 0;
        this.coordY3 = 0;
    } else {
        this.coordX1 = params.coordX1;
        this.coordX2 = params.coordX2;
        this.coordX3 = params.coordX3;
        this.coordY1 = params.coordY1;
        this.coordY2 = params.coordY2;
        this.coordY3 = params.coordY3;
        this.fillColor = params.fillColor;
        this.borderColor = params.borderColor;
    }

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

    draw: function (context) {
        context.beginPath();
        context.moveTo(this.getCoordX1(), this.getCoordY1());
        context.lineTo(this.getCoordX2(), this.getCoordY2());
        context.lineTo(this.getCoordX3(), this.getCoordY3());
        context.closePath();
        context.fillStyle = Shape.prototype.getFillColor.call(this);
        context.strokeStyle = Shape.prototype.getBorderColor.call(this);
        context.fill();
        context.stroke();
    },

    calculateArea: function() {
        var halfPerimeter = this.calculatePerimeter() / 2;
        var sideA = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX2(), this.getCoordY2());
        var sideB = this.getLineLength(this.getCoordX1(), this.getCoordY1(), this.getCoordX3(), this.getCoordY3());
        var sideC = this.getLineLength(this.getCoordX3(), this.getCoordY3(), this.getCoordX2(), this.getCoordY2());

        return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    }
};