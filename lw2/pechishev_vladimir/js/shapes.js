function Position(x , y){
    this.x = x;
	this.y = y;
}

function Shape(type) {
	this._color= "#000000";
	this._borderColor=  "#000000";
	this._type = type;
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
    draw: function(ctx) {},
    calculateArea: function() {},
    calculatePerimeter: function() {},
	
	type: function() {
		return this._type;
	},
};

function Circle(type) {
	Shape.call(this, type);
    this._centerX = 0;
	this._centerY = 0;
    this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.setRadius = function(value) {
	this._radius = value;
};
Circle.prototype.setCenterX = function(value) {
	this._centerX = value;
};
Circle.prototype.setCenterY = function(value) {
	this._centerY = value;
};

Circle.prototype.getRadius = function() {
	return this._radius;
};
Circle.prototype.getCenterX = function() {
	return this._centerX;
};
Circle.prototype.getCenterY = function() {
	return this._centerY;
};

Circle.prototype.calculateArea = function() {
	return Math.PI * Math.pow(this._radius, 2);
};
Circle.prototype.calculatePerimeter = function() {
	return 2 * Math.PI * this._radius;
};
Circle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.arc(this._centerX, this._centerY, this._radius, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};


function Rectangle(type) {
	Shape.call(this, type);
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.setX1 = function(value) {
	this._x1 = value;
};
Rectangle.prototype.setX2 = function(value) {
	this._x2 = value;
};
Rectangle.prototype.setY1 = function(value) {
	this._y1 = value;
};
Rectangle.prototype.setY2 = function(value) {
	this._y2 = value;
};

Rectangle.prototype.getX1 = function() {
	return this._x1;
};
Rectangle.prototype.getY1 = function() {
	return this._y1;
};
Rectangle.prototype.getX2 = function() {
	return this._x2;
};
Rectangle.prototype.getY2 = function() {
	return this._y2;
};

Rectangle.prototype.calculateArea = function() {
	return (this._x2 - this._x1) * (this._y2 - this._y1);
};
Rectangle.prototype.calculatePerimeter = function() {
	return ((this._x2 - this._x1) + (this._y2 - this._y1)) * 2;
};
Rectangle.prototype.draw = function(ctx) {
	ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
	ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
};

function Triangle(type) {
	Shape.call(this, type);
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
	this._x3 = 0;
	this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.setX1 = function(value) {
	this._x1 = value;
} ;

Triangle.prototype.setX2 = function(value) {
	this._x2 = value;
};

Triangle.prototype.setY1 = function(value) {
	this._y1 = value;
};

Triangle.prototype.setY2 = function(value) {
	this._y2 = value;
};

Triangle.prototype.setX3 = function(value) {
	this._x3 = value;
};

Triangle.prototype.setY3 = function(value) {
	this._y3 = value;
};

Triangle.prototype.getX1 = function() {
	return this._x1;
};
Triangle.prototype.getY1 = function() {
	return this._y1;
};
Triangle.prototype.getX2 = function() {
	return this._x2;
};
Triangle.prototype.getY2 = function() {
	return this._y2;
};
Triangle.prototype.getX3 = function() {
	return this._x3;
};
Triangle.prototype.getY3 = function() {
	return this._y3;
};

Triangle.prototype.calculateArea = function() {
	const perimeter = this.calculatePerimeter();
	const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
	const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
	return Math.sqrt(perimeter * (perimeter - sideAB) * (perimeter - sideAC) * (perimeter - sideBC));
};

Triangle.prototype.calculatePerimeter = function() {
	const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
	const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
	return (sideAB + sideAC + sideBC) * 0.5;
};

Triangle.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.moveTo(this._x1, this._y1);
	ctx.lineTo(this._x2, this._y2);
	ctx.lineTo(this._x3, this._y3);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();
};

Triangle.prototype._getSide = function(point1, point2) {
	return Math.sqrt(Math.pow((point2["x"] - point1["x"]), 2) + Math.pow((point2["y"] - point1["y"]), 2));
};