
function Position(x , y){
	this.x = x;
	this.y = y;
}

var ShapeType = {
	RECTANGLE: "Rectangle",
	TRIANGLE: "Triangle",
	CIRCLE: "Circle"
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
	return  Math.abs((this._x2 - this._x1) * (this._y2 - this._y1));
};
Rectangle.prototype.calculatePerimeter = function() {
	return  Math.abs(((this._x2 - this._x1) + (this._y2 - this._y1)) * 2);
};
Rectangle.prototype.draw = function(ctx) {
	ctx.fillRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
	ctx.strokeRect(this._x1, this._y1, this._x2 - this._x1, this._y2 - this._y1);
};

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

Triangle.prototype._getSide = function(point1, point2) {
    return Math.sqrt(Math.pow((point2["x"] - point1["x"]), 2) + Math.pow((point2["y"] - point1["y"]), 2));
};

Triangle.prototype.calculateArea = function() {
	const perimeter = this.calculatePerimeter();
	const first = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
    const second = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
    const third = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	return Math.abs(Math.sqrt(perimeter * (perimeter - first) * (perimeter - third) * (perimeter - second)));
};

Triangle.prototype.calculatePerimeter = function() {
	const first = this._getSide(new Position(this._x1, this._y1), new Position(this._x2, this._y2));
	const third = this._getSide(new Position(this._x1, this._y1), new Position(this._x3, this._y3));
	const second = this._getSide(new Position(this._x2, this._y2), new Position(this._x3, this._y3));
	return first + third + second;
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


function ShapeManager() {
	this._canvasElement = document.getElementById("canvas");
	this._settingElement = document.getElementById("setting");
	this._ctx = this._canvasElement.getContext("2d");

	this._currentShape = null;
	this._settingField = undefined;

	this._shapes = [];

	this._appendHandlersForInputFields();
}

ShapeManager.prototype = {

	addShape: function (type) {
		var shape;
		switch (type)
		{
		case ShapeType.TRIANGLE:
			shape = new Triangle(ShapeType.TRIANGLE);
			break;
		case ShapeType.RECTANGLE:
			shape = new Rectangle(ShapeType.RECTANGLE);
			break;
		case ShapeType.CIRCLE:
			shape = new Circle(ShapeType.CIRCLE);
			break;
		default:
			throw new Error("Unknown shape type");
		}
		this._shapes.push(shape);
		this._addShapeToSelectElement(type);
	},

	choiseShape: function (index) {
		this._clearCanvas();
		this._clearOutData();
		this._fillColorsFields("", "");

		if (this._settingField)
		{
			this._settingElement.removeChild(this._settingField);
			this._settingField.remove();
		}
		this._createSettingField();

		this._currentShape = this._shapes[index - 1];
		const type = (index === 0) ? "" : this._currentShape.type();

		const settingTitle = document.getElementById("setting_title");
		settingTitle.textContent = "Setting " + type;

		switch (type)
		{
			case ShapeType.TRIANGLE:
				this._initSettingForTriangle();
				break;
			case ShapeType.RECTANGLE:
				this._initSettingForRectangle();
				break;
			case ShapeType.CIRCLE:
				this._initSettingForCircle();
				break;
			default:
				this._currentShape = undefined;
				break;
		}

		if (this._currentShape)
		{
			this._fillColorsFields(this._currentShape.getFillColor(), this._currentShape.getBorderColor());
		}
	},

	draw: function () {
		this._clearCanvas();
		if (this._currentShape)
		{
			this._applyColors();
			this._currentShape.draw(this._ctx);
			this._outputData(this._currentShape.calculatePerimeter(), this._currentShape.calculateArea());
		}
	},

	_fillColorsFields: function (colorShapeValue, colorBorderValue) {
		document.getElementById("color_shape").value = colorShapeValue;
		document.getElementById("color_border").value = colorBorderValue;
	},

	_clearCanvas: function () {
		const height = this._canvasElement.offsetHeight;
		const width = this._canvasElement.offsetWidth;
		this._ctx.clearRect(0,0, width, height);
	},

	_clearOutData: function () {
		this._outputData("", "");
	},

	_addShapeToSelectElement: function (type) {
		const option = document.createElement("option");
		option.setAttribute("value", type);
		option.textContent = type;
		
		var select = document.getElementById("type_shape");
		select.appendChild(option);
	},

	_applyColors: function () {
		this._ctx.strokeStyle = this._currentShape.getBorderColor();
		this._ctx.fillStyle = this._currentShape.getFillColor();
	},

	_appendHandlersForInputFields: function () {
		const colorShape = document.getElementById("color_shape");
		colorShape.onchange = function () {
			const value = colorShape.value;
			if (this._currentShape && (value !== ""))
			{
                this._currentShape.setFillColor(value);
            }
		}.bind(this);

		const colorBorder = document.getElementById("color_border");
		colorBorder.onchange = function () {
			const value = colorBorder.value;
			if (this._currentShape && (value !== ""))
			{
                this._currentShape.setBorderColor(value);
			}
		}.bind(this);
	},

	_outputData: function (firstData, secondData) {
		const perimeterContainer = document.getElementById("perimeter");
		perimeterContainer.textContent = firstData;

		const areaContainer = document.getElementById("area");
		areaContainer.textContent = secondData;
	},

	_initSettingForRectangle: function () {
		this._createInputField(
			"x1",
			function(value) {
				this._currentShape.setX1(value);
			},
			this._currentShape.getX1()
		);
		this._createInputField(
			"y1",
			function(value) {
				this._currentShape.setY1(value);
			},
			this._currentShape.getY1()
		);
		this._createInputField(
			"x2",
			function(value) {
				this._currentShape.setX2(value);
			},
			this._currentShape.getX2()
		);
		this._createInputField(
			"y2",
			function(value) {
				this._currentShape.setY2(value);
			},
			this._currentShape.getY2()
		);
	},

	_initSettingForTriangle: function () {
		this._createInputField(
			"x1",
			function(value) {
				this._currentShape.setX1(value);
			},
			this._currentShape.getX1()
		);
		this._createInputField(
			"y1",
			function(value) {
				this._currentShape.setY1(value);
			},
			this._currentShape.getY1()
		);
		this._createInputField("x2",
			function(value) {
				this._currentShape.setX2(value);
			},
			this._currentShape.getX2()
		);
		this._createInputField("y2",
			function(value) {
				this._currentShape.setY2(value);
			},
			this._currentShape.getY2()
		);
		this._createInputField("x3",
			function(value) {
				this._currentShape.setX3(value);
			},
			this._currentShape.getX3()
		);
		this._createInputField("y3",
			function(value) {
				this._currentShape.setY3(value);
			},
			this._currentShape.getY3()
		);
	},

	_initSettingForCircle: function () {
        this._createInputField(
            "centerX",
            function(value) {
                this._currentShape.setCenterX(value);
            },
            this._currentShape.getCenterX()
        );
        this._createInputField(
            "centerY",
            function(value) {
                this._currentShape.setCenterY(value);
            },
            this._currentShape.getCenterY()
        );
		this._createInputField(
			"radius",
			function(value) {
				this._currentShape.setRadius(value);
			},
			this._currentShape.getRadius()
		);
	},

	_createInputField: function (text, handler, value) {
		const input = document.createElement("input");
        input.setAttribute("class", "input");
		input.setAttribute("placeholder", text);

        input.onchange = function () {
        	this.draw();
        };

		if (value > 0)
		{
			input.value = value;
		}
		input.onchange = function() {
			handler(Number(input.value));
		};
		this._settingField.appendChild(input);
	},
	
	_createSettingField: function () {
		this._settingField = document.createElement("div");
		this._settingField.setAttribute("class", "setting_field");
		this._settingElement.appendChild(this._settingField);
	}
};
function Start() {
	const shapeManager = new ShapeManager();

	const addShapeButton = document.getElementById("add_shape");
	addShapeButton.onclick = function () {
		var select = document.getElementById("shape_type"); 
		var type = select.options[select.selectedIndex].value;
		shapeManager.addShape(type);
	};

	const selectShapeButton = document.getElementById("type_shape");
	selectShapeButton.onchange = function () {
		shapeManager.choiseShape(selectShapeButton.selectedIndex);
	};

	const drawShapeButton = document.getElementById("draw_shape");
	drawShapeButton.onclick = function () {
		shapeManager.draw();
	};

};