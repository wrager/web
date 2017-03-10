function Position(x , y){
    this.x = x;
	this.y = y;
}

function Shape() {
    this._color = "#000000";
    this._borderColor = "green";
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
    draw: function(ctx) {},
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
    this._centerX = 0;
	this._centerY = 0;
    this._radius = 0;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype = {
    setRadius: function(value) {
        this._radius = value;
    },

	setCenterX: function(value) {
		this._centerX = value;
    },

	setCenterY: function(value) {
		this._centerY = value;
	},

    calculateArea: function() {
        this._area = Math.PI * Math.pow(this._radius, 2);
    },

    calculatePerimeter: function() {
        this._perimeter = 2 * Math.PI * this._radius;
    },

    draw: function(ctx) {
		Shape.prototype.draw.apply(this, ctx);
		ctx.beginPath();
		ctx.arc(this._centerX, this._centerY, this._radius, 0, Math.PI * 2, true);
		ctx.fill();
		ctx.stroke();
    },
};

function Rectangle() {
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype = {
	setX1: function(value) {
		this._x1 = value;
    },

	setX2: function(value) {
		this._x2 = value;
	},

	setY1: function(value) {
		this._y1 = value;
	},

	setY2: function(value) {
		this._y2 = value;
	},

    calculateArea: function() {
        this._area = (this._x2 - this._x1) * (this._y2 - this._y1);
    },

    calculatePerimeter: function() {
        this._perimeter = ((this._x2 - this._x1) + (this._y2 - this._y1)) * 2;
    },

    draw: function(ctx) {
		Shape.prototype.draw.apply(this, ctx);
		ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
		ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
    },
};

function Triangle() {
	this._x1 = 0;
	this._x2 = 0;
	this._y1 = 0;
	this._y2 = 0;
	this._x3 = 0;
	this._y3 = 0;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype = {
	setX1: function(value) {
		this._x1 = value;
	},

	setX2: function(value) {
		this._x2 = value;
	},

	setY1: function(value) {
		this._y1 = value;
	},

	setY2: function(value) {
		this._y2 = value;
	},

	setX3: function(value) {
		this._x3 = value;
	},

	setY3: function(value) {
		this._y3 = value;
	},

    calculateArea: function() {
        if (this.getPerimeter() == 0) {
            this.calculatePerimeter();
        }
        const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
        const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
        const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
        this._area = Math.sqrt(this._perimeter * (this._perimeter - sideAB) * (this._perimeter - sideAC) * (this._perimeter - sideBC));
    },

    calculatePerimeter: function() {
		const sideAB = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
		const sideAC = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
		const sideBC = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
        this._perimeter = (sideAB + sideAC + sideBC) * 0.5;
    },

    draw: function(ctx) {
		Shape.prototype.draw.apply(this, ctx);
		ctx.beginPath();
		ctx.moveTo(this._x1, this._y1);
		ctx.lineTo(this._x2, this._y2);
		ctx.lineTo(this._x3, this._y3);
		ctx.fill();
		ctx.stroke();
    },

    _getSide: function(point1, point2) {
        return Math.sqrt(Math.pow((point2["x"] - point1["x"]), 2) + Math.pow((point2["y"] - point1["y"]), 2));
    }
};