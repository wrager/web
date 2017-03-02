var Position = {
    "x": 0,
    "y": 0,
}

function Shape() {
    this._color = "#000000";
    this._borderColor = "#000000";
    this._perimeter = 0;
    this._area = 0;
}

Shape.prototype = {
    setFillColor: function(value) {
        this._color = value;
    },

    getFillColor: function() {
        return this._color;
    },
    setBorderColor: function(value) {
        this._borderColor = value;
    },
    getBorderColor: function() {
        return this._borderColor;
    },
    draw: function() {},
    calculateArea: function() {},
    calculatePerimeter: function() {},

    getPerimeter: function() {
        return this._perimeter;
    },
    getArea: function() {
        return this._area;
    },
};

function Circle() {
    this._centerPosition = new Position();
    this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype = {
    setRadius: function(value) {
        this._radius = value;
    },

    setCenterPosition: function(x, y) {
        this._centerPosition["x"] = x;
        this._centerPosition["y"] = y;
    },

    calculateArea: function() {
        this._area = Math.PI * Math.pow(this._radius, 2);
    },

    calculatePerimeter: function() {
        this._perimeter = 2 * Math.PI * this._radius;
    },

    draw: function() {

    },
};

function Rectangle() {
    this._leftTop = new Position();
    this._rightBottom = new Position();
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {
    setLeftTop: function(left, top) {
        this._leftTop["x"] = left;
        this._leftTop["y"] = top;
    },
    setRightBottom: function(right, bottom) {
        this._rightBottom["x"] = right;
        this._rightBottom["y"] = bottom;
    },

    calculateArea: function() {
        this._area = (this._rightBottom["x"] - this._leftTop["x"]) * (this._leftTop["y"] - this._rightBottom["y"]);
    },

    calculatePerimeter: function() {
        this._perimeter = ((this._rightBottom["x"] - this._leftTop["x"]) + (this._leftTop["y"] - this._rightBottom["y"])) * 2;
    },

    draw: function() {

    },
};

function Triangle() {
    this._pointA = new Position();
    this._pointB = new Position();
    this._pointC = new Position();
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype = {
    setPointA: function(x, y) {
        this._pointA["x"] = x;
        this._pointA["y"] = y;
    },
    setPointB: function(x, y) {
        this._pointB["x"] = x;
        this._pointB["y"] = y;
    },
    setPointC: function(x, y) {
        this._pointC["x"] = x;
        this._pointC["y"] = y;
    },
    calculateArea: function() {
        if (this.getPerimeter() == 0) {
            this.calculatePerimeter();
        }
        const sideAB = this._getSide(this._pointA, this._pointB);
        const sideAC = this._getSide(this._pointA, this._pointC);
        const sideBC = this._getSide(this._pointB, this._pointC);
        this._area = Math.sqrt(this._perimeter * (this._perimeter - sideAB) * (this._perimeter - sideAC) * (this._perimeter - sideBC));;
    },

    calculatePerimeter: function() {
        const sideAB = this._getSide(this._pointA, this._pointB);
        const sideAC = this._getSide(this._pointA, this._pointC);
        const sideBC = this._getSide(this._pointB, this._pointC);
        this._perimeter = (sideAB + sideAC + sideBC) * 0.5;
    },

    draw: function() {

    },

    _getSide: function(point1, point2) {
        return Math.sqrt(Math.pow((point2["x"] - point1["x"]), 2) + Math.pow((point2["y"] - point1["y"]), 2));
    }
};