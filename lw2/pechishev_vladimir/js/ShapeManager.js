

function ShapeManager() {
	this._canvasElement = document.getElementById("canvas");
	this._settingElement = document.getElementById("setting");
	this._ctx = this._canvasElement.getContext("2d");

	this._currentShape = null;
	this._settingField = undefined;

	this._colorShape = null;
	this._colorBorder = null;

	this._appendHandlersForInputFields();
}

ShapeManager.prototype = {

	choiseShape: function (value) {
		if (this._settingField)
		{
			this._settingElement.removeChild(this._settingField);
			this._settingField.remove();
		}
		this._createSettingField();

		if (value == "Triangle")
		{
			this._initSettingForTriangle();
			console.log(this._currentShape);
		}
		else if (value == "Rectangle")
		{
			this._initSettingForRectangle();
			console.log(this._currentShape);
		}
		else if (value == "Circle")
		{
			this._initSettingForCircle();
			console.log(this._currentShape);
		}
		else
		{
			throw new Error("unknown type shape");
		}
	},

	draw: function () {
		this.clearCanvas();
		if (this._currentShape)
		{
			this._applyColors();
			this._currentShape.draw(this._ctx);
			//this._updateShape();
			//this._outputData();
		}
	},

	clearCanvas: function () {
		const height = this._canvasElement.offsetHeight;
		const width = this._canvasElement.offsetWidth;
		this._ctx.clearRect(0,0, width, height);
	},

	_applyColors: function () {
		if (this._colorBorder)
		{
			this._ctx.strokeStyle = this._colorBorder;
		}
		if (this._colorShape)
		{
			this._ctx.fillStyle = this._colorShape;
		}
	},

	_appendHandlersForInputFields: function () {
		const colorShape = document.getElementById("color_shape");
		colorShape.onchange = function () {
			this._colorShape = colorShape.value;
			console.log(this._colorShape);
		}.bind(this);

		const colorBorder = document.getElementById("color_border");
		colorBorder.onchange = function () {
			this._colorBorder = colorBorder.value;
			console.log(this._colorBorder);
		}.bind(this);
	},

	_outputData: function () {
		// TODO: replace data in result div or create result field
	},

	_updateShape: function () {
		this._currentShape.calculatePerimeter();
		this._currentShape.calculateArea();
	},

	_initSettingForRectangle: function () {
		this._currentShape = new Rectangle();
		this._createInputField("x1", function(value) {
			this._currentShape.setX1(value);
		}.bind(this));
		this._createInputField("y1", function(value) {
			this._currentShape.setY1(value);
		}.bind(this));
		this._createInputField("x2", function(value) {
			this._currentShape.setX2(value);
		}.bind(this));
		this._createInputField("y2", function(value) {
			this._currentShape.setY2(value);
		}.bind(this));
	},

	_initSettingForTriangle: function () {
		this._currentShape = new Triangle();
		this._createInputField("x1", function(value) {
			this._currentShape.setX1(value);
		}.bind(this));
		this._createInputField("y1", function(value) {
			this._currentShape.setY1(value);
		}.bind(this));
		this._createInputField("x2", function(value) {
			this._currentShape.setX2(value);
		}.bind(this));
		this._createInputField("y2", function(value) {
			this._currentShape.setY2(value);
		}.bind(this));
		this._createInputField("x3", function(value) {
			this._currentShape.setX3(value);
		}.bind(this));
		this._createInputField("y3", function(value) {
			this._currentShape.setY3(value);
		}.bind(this));
	},

	_initSettingForCircle: function () {
		this._currentShape = new Circle();
		this._createInputField("radius", function(value) {
			this._currentShape.setRadius(value);
		}.bind(this));
		this._createInputField("centerX", function(value) {
			this._currentShape.setCenterX(value);
		}.bind(this));
		this._createInputField("centerY", function(value) {
			this._currentShape.setCenterY(value);
		}.bind(this));

	},

	_createInputField: function (text, func) {
		const input = document.createElement("input");
		input.setAttribute("class", "input");
		input.setAttribute("placeholder", text);
		input.onchange = function() {
			func(Number(input.value));
		};
		this._settingField.appendChild(input);
	},
	
	_createSettingField: function () {
		this._settingField = document.createElement("div");
		this._settingField.setAttribute("class", "setting_field");
		this._settingElement.appendChild(this._settingField);
	}
};