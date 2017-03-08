

function ShapeManager() {
	this._canvasElement = document.getElementById("canvas");
	this._settingElement = document.getElementById("setting");
	this._ctx = this._canvasElement.getContext("2d");

	this._currentShape = null;
	this._settingField = undefined;
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
		}
		else if (value == "Rectangle")
		{
			this._initSettingForRectangle();
		}
		else if (value == "Circle")
		{
			this._initSettingForCircle();
		}
		else
		{
			throw new Error("unknown type shape");
		}
	},

	draw: function () {
		const height = this._canvasElement.offsetHeight;
		const width = this._canvasElement.offsetWidth;
		this._ctx.clearRect(0,0, width, height);
		if (this._currentShape)
		{
			this._updareShape();
			this._outputData();
		}
	},

	_outputData: function () {
		// TODO: replace data in result div or create result field
	},

	_updareShape: function () {
		this._currentShape.draw();
		this._currentShape.calculatePerimeter();
		this._currentShape.calculateArea();
	},

	_initSettingForRectangle: function () {
		this._createInputField("x1", this._currentShape.setX1);
		this._createInputField("y1", this._currentShape.setY1);
		this._createInputField("x2", this._currentShape.setX2);
		this._createInputField("y2", this._currentShape.setY2);
	},

	_initSettingForTriangle: function () {
		this._createInputField("x1", this._currentShape.setX1);
		this._createInputField("y1", this._currentShape.setY1);
		this._createInputField("x2", this._currentShape.setX2);
		this._createInputField("y2", this._currentShape.setY2);
		this._createInputField("x3", this._currentShape.setX3);
		this._createInputField("y3", this._currentShape.setY3);
	},

	_initSettingForCircle: function () {
		this._createInputField("radius", this._currentShape.setRadius);
		this._createInputField("centerX", this._currentShape.setCenterX);
		this._createInputField("centerY", this._currentShape.setCenterY);
	},

	_createInputField: function (text, func) {
		const input = document.createElement("input");
		input.setAttribute("class", "input");
		input.setAttribute("placeholder", text);
		input.onchange = function () {
			const value = Number(input.value);
			func(value);
		};
		this._settingField.appendChild(input);
	},
	
	_createSettingField: function () {
		this._settingField = document.createElement("div");
		this._settingField.setAttribute("class", "setting_field");
		this._settingElement.appendChild(this._settingField);
	}
};