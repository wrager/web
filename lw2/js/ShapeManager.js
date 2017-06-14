
function ShapeManager() {
	this._canvasElement = document.getElementById("canvas");
	this._settingElement = document.getElementById("setting");
	this._ctx = this._canvasElement.getContext("2d");
	this._currentShape = null;
	this._settingField = undefined;
	this._shapes = [];
	this._setEditTextColorListener();
	this._createDefaultShapes();
}

ShapeManager.prototype = {

	_createDefaultShapes: function () {
		this._shapes.push(new Rectangle());
		this._shapes.push(new Triangle());
		this._shapes.push(new Circle());
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
		const type = (index == 0) ? "" : this._currentShape.type();

		const settingTitle = document.getElementById("setting_title");
		if(type!="") {			
			settingTitle.textContent = "Параметры " + type + "а";
		}
		else{
			settingTitle.textContent = "Выберите фигуру";
		}

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
			this._outputData(this._currentShape.getPerimeter(), this._currentShape.getArea());
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

	_applyColors: function () {
		this._ctx.strokeStyle = this._currentShape.getBorderColor();
		this._ctx.fillStyle = this._currentShape.getFillColor();
	},

	_setEditTextColorListener: function () {
		const colorShape = document.getElementById("color_shape");
		colorShape.onchange = function () {
			const color = colorShape.value;
			if (this._currentShape && color != "")
				this._currentShape.setFillColor(color);
		}.bind(this);

		const colorBorder = document.getElementById("color_border");
		colorBorder.onchange = function () {
			const color = colorBorder.value;
			if (this._currentShape && color != "")
				this._currentShape.setBorderColor(color);
		}.bind(this);
	},

	_outputData: function (firstData, secondData) {
		const perimeterContainer = document.getElementById("perimeter");
		perimeterContainer.textContent = firstData;

		const areaContainer = document.getElementById("area");
		areaContainer.textContent = secondData;
	},

	_initSettingForRectangle: function () {
		this._createInputField("x1", function(value) {
			this._currentShape.setLeftTop(value, this._currentShape.getLeftTop().y);
		}.bind(this), this._currentShape.getLeftTop().x);
		
		this._createInputField("y1", function(value) {
			this._currentShape.setLeftTop(this._currentShape.getLeftTop().x, value);
		}.bind(this), this._currentShape.getLeftTop().y);
		
		this._createInputField("x2", function(value) {
			this._currentShape.setRightBottom(value, this._currentShape.getRightBottom().y);
		}.bind(this), this._currentShape.getRightBottom().x);
		
		this._createInputField("y2", function(value) {
			this._currentShape.setRightBottom(this._currentShape.getRightBottom().x, value);
		}.bind(this), this._currentShape.getRightBottom().y);
	},

	_initSettingForTriangle: function () {
		this._createInputField("x1", function(value) {
				this._currentShape.setVertex1(value, this._currentShape.getVertex1().y);
		}.bind(this), this._currentShape.getVertex1().x);
		
		this._createInputField("y1", function(value) {
				this._currentShape.setVertex1(this._currentShape.getVertex1().x, value);
		}.bind(this), this._currentShape.getVertex1().y);
		
		this._createInputField("x2", function(value) {
			this._currentShape.setVertex2(value, this._currentShape.getVertex2().y);
		}.bind(this), this._currentShape.getVertex2().x);
		
		this._createInputField("y2", function(value) {
			this._currentShape.setVertex2(this._currentShape.getVertex2().x, value);
		}.bind(this), this._currentShape.getVertex2().y);
		
		this._createInputField("x3", function(value) {
			this._currentShape.setVertex3(value, this._currentShape.getVertex3().y);
		}.bind(this), this._currentShape.getVertex3().x);
		
		this._createInputField("y3", function(value) {
			this._currentShape.setVertex3( this._currentShape.getVertex3().x, value);
		}.bind(this), this._currentShape.getVertex3().y);
	},

	_initSettingForCircle: function () {
		this._createInputField("радиус", function(value) {
			this._currentShape.setRadius(value);
		}.bind(this), this._currentShape.getRadius());
		
		this._createInputField("х", function(value) {
			this._currentShape.setCenter(value, this._currentShape.getCenter().y);
		}.bind(this), this._currentShape.getCenter().x);

		this._createInputField("y", function(value) {
			this._currentShape.setCenter(this._currentShape.getCenter().x, value);		
		}.bind(this), this._currentShape.getCenter().y);
	},

	_createInputField: function (text, handler, value) {
		const input = document.createElement("input");
		input.setAttribute("class", "input");
		input.setAttribute("placeholder", text);
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