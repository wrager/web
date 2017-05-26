var shape = undefined;

function onShapeParametersChoice(shapeType) {
    document.getElementById("draw_figure_button").disabled = false;
    if (shapeType == 'Rectangle') {
        showElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType == 'Triangle') {
        hideElement("rectangle_options");
        showElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType == 'Circle') {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        showElement("circle_options");
    } else {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
        document.getElementById("draw_figure_button").disabled = true;
    }
}

function onDrawButtonClick() {
    var sel = document.getElementById("shape_choice");
    var shapeType = sel.options[sel.selectedIndex].text;

    var canvas = document.getElementById("shape_canvas");
    var context = canvas.getContext("2d");

    clearCanvas();

    if (shapeType == 'Rectangle') {
        shape = new Rectangle(getDrawParameters(shapeType));
    } else if (shapeType == 'Triangle') {
        shape = new Triangle(getDrawParameters(shapeType));
    } else if (shapeType == 'Circle') {
        shape = new Circle(getDrawParameters(shapeType));
    }
    shape.draw(context);
    printCalcResultOnCanvas(context);
}

function getDrawParameters(shapeType) {
    var params = {};
    if (shapeType == 'Rectangle') {
        params.X1 = getElementNumberValue("rectX1");
        params.X2 = getElementNumberValue("rectX2");
        params.Y1 = getElementNumberValue("rectY1");
        params.Y2 = getElementNumberValue("rectY2");
    } else if (shapeType == 'Triangle') {
        params.X1 = getElementNumberValue("triangleX1");
        params.X2 = getElementNumberValue("triangleX2");
        params.X3 = getElementNumberValue("triangleX3");
        params.Y1 = getElementNumberValue("triangleY1");
        params.Y2 = getElementNumberValue("triangleY2");
        params.Y3 = getElementNumberValue("triangleY3");
    } else if (shapeType == 'Circle') {
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
    context.fillText(perimeterResult, 5, 220);
    context.fillText(areaResult, 5, 240);
}

function getElementNumberValue(elem) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0);
}

function getElementColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : '#000000');
}

function getElementValue(id) {
    return document.getElementById(id).value;
}

function isNumber(value) {
    return !(Number(value) !== Number(value));
}

function isColor(value) {
    return value.match(/^#[0-9A-F]{6}$/);
}

function showElement(elemId) {
    document.getElementById(elemId).style.display = "block";
}

function hideElement(elemId) {
    document.getElementById(elemId).style.display = "none";
}

function clearCanvas() {
    var canvas = document.getElementById('shape_canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}