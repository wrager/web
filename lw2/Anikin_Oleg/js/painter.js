function Painter() {
    this._canvas = new Canvas();

    this._cssCavas = undefined;
    this._drawContext =  undefined;
    this._selectedShapeType = undefined
}

Painter.prototype.onShapeSelect = function() {
    showElement("circle-form", false);
    showElement("rectangle-form", false);
    showElement("triangle-form", false);
    showElement("draw");

    this._selectedShapeType = getComboValue();
    if (this._selectedShapeType == "Circle") {
        showElement("circle-form");
    } else if (this._selectedShapeType == "Rectangle") {
        showElement("rectangle-form");
    } else if (this._selectedShapeType == "Triangle") {
        showElement("triangle-form");
    }
}

Painter.prototype.onDrawButtonClick = function() {
    if(this._cssCavas == undefined) {
        this._cssCavas = getElement("canvas");
        this._drawContext = this._cssCavas.getContext("2d");
    }
    
    this._drawContext.clearRect(0, 0, this._cssCavas.width, this._cssCavas.height);

    var fillColor = getElementValue("fill-color") 
    var borderColor = getElementValue("border-color")

    if (this._selectedShapeType == "Circle") {

        this._canvas.updateCircle(
            createPoint(getElementValue("circle-x"), getElementValue("circle-y"))
        , getElementValue("circle-r"), fillColor, borderColor);

        this.drawShape(this._canvas.getCircle());

    } else if (this._selectedShapeType == "Rectangle") {
        this._canvas.updateRectangle(

            createPoint(getElementValue("rectangle-x1"), getElementValue("rectangle-y1"))
        , createPoint(getElementValue("rectangle-x2"), getElementValue("rectangle-y2"))
        , fillColor, borderColor);

        this.drawShape(this._canvas.getRectangle());

    } else if (this._selectedShapeType == "Triangle") {

        this._canvas.updateTriangle(createPoint(
            getElementValue("triangle-x1"), getElementValue("triangle-y1"))
        , createPoint(getElementValue("triangle-x2"), getElementValue("triangle-y2"))
        , createPoint(getElementValue("triangle-x3"), getElementValue("triangle-y3"))
        , fillColor, borderColor);

        this.drawShape(this._canvas.getTriangle());
    }
}

Painter.prototype.drawShapeInfo = function(shape) {
    this._drawContext.font= FONT_SIZE + "px Arial";
    this._drawContext.fillStyle = INFO_TEXT_COLOR;
    this._drawContext.fillText("Perimeter: " + shape.calculatePerimeter(), 800, (FONT_SIZE * 2 + FONT_SIZE) + 500);
    this._drawContext.fillText("Area: " + shape.calculateArea(), 800, (FONT_SIZE * 2 + FONT_SIZE * 2) + 500);
}

Painter.prototype.drawShape = function(shape, index) {
    shape.draw(this._drawContext);
    this.drawShapeInfo(shape, index);
}

var FONT_SIZE = 16;
var INFO_TEXT_COLOR = "#000000";

function getElement(id) {
    return document.getElementById(id);
}

 function getElementValue(id) {
    return getElement(id).value;
}

 function showElement(id, show = true) {
    var element = getElement(id);
    if (show) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function getComboValue() {
    var combobox = getElement("shape-combobox");
    return combobox.options[combobox.selectedIndex].value;
}