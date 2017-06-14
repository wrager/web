

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