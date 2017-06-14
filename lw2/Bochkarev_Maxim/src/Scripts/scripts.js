var shape = undefined;

getElement("draw_figure_button").onclick = onDrawButtonClick;
getElement("shape_select").onchange = onShapeParametersChoice;

function onShapeParametersChoice() {
    var shapeType = getShapeTypeValue();
    getElement("draw_figure_button").disabled = false;

    if (shapeType == "Rectangle") {
        showElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType == "Triangle") {
        hideElement("rectangle_options");
        showElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType == "Circle") {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        showElement("circle_options");
    } else {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
        getElement("draw_figure_button").disabled = true;
    }
}

function onDrawButtonClick() {
    var shapeType = getShapeTypeValue();

    var canvas = getElement("shape_canvas");
    var context = canvas.getContext("2d");

    clearCanvas();
    var drawParameters = getDrawParameters(shapeType);
    if (shapeType == "Rectangle") {
        shape = new Rectangle(drawParameters);
    } else if (shapeType == "Triangle") {
        shape = new Triangle(drawParameters);
    } else if (shapeType == "Circle") {
        shape = new Circle(drawParameters);
    }
    shape.draw(context);
    printCalcResultOnCanvas(context);
}

function getDrawParameters(shapeType) {
    var params = {};
    if (shapeType == "Rectangle") {
        params.X1 = getElementNumberValue("rectX1");
        params.X2 = getElementNumberValue("rectX2");
        params.Y1 = getElementNumberValue("rectY1");
        params.Y2 = getElementNumberValue("rectY2");
    } else if (shapeType == "Triangle") {
        params.X1 = getElementNumberValue("triangleX1");
        params.X2 = getElementNumberValue("triangleX2");
        params.X3 = getElementNumberValue("triangleX3");
        params.Y1 = getElementNumberValue("triangleY1");
        params.Y2 = getElementNumberValue("triangleY2");
        params.Y3 = getElementNumberValue("triangleY3");
    } else if (shapeType == "Circle") {
        params.centerX = getElementNumberValue("circleCenterX");
        params.centerY = getElementNumberValue("circleCenterY");
        params.radius = getElementNumberValue("circleRadius");
    }
    params.fillColor = getElementColorValue("fillColor");
    params.borderColor = getElementColorValue("borderColor");

    return params;
}

function printCalcResultOnCanvas(context) {
    var areaResult = "Area: " + Number(shape.calculateArea()).toFixed(2);
    var perimeterResult = "Perimeter: " + Number(shape.calculatePerimeter()).toFixed(2);
    context.fillStyle = "black";
    context.font = "bold 12px Arial";
    context.fillText(perimeterResult, 5, 370);
    context.fillText(areaResult, 5, 390);
}

function getElementNumberValue(elem) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0);
}

function getElementColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : "#000000");
}
function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function isNumber(value) {
    return !(Number(value) !== Number(value));
}

function isColor(value) {
    return value.match(/^#[0-9A-F]{6}$/);
}

function showElement(elemId) {
    getElement(elemId).style.display = "block";
}

function hideElement(elemId) {
    getElement(elemId).style.display = "none";
}

function clearCanvas() {
    var canvas = getElement("shape_canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getShapeTypeValue() {
    return getElement("shape_select").options[getElement("shape_select").selectedIndex].text;
}