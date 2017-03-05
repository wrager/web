var shape = undefined;

function onShapeParametersChoice(shapeType) {
    //TODO: wrap style display
    //TODO: each tag on new line
    console.log("User has selected " + shapeType + ": " + getCurrentTime());
    document.getElementById("draw_figure_button").disabled = false;
    if (shapeType == 'Rectangle') {
        document.getElementById("rectangle_options").style.display = "block";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "none";
    } else if (shapeType == 'Triangle') {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "block";
        document.getElementById("circle_options").style.display = "none";
    } else if (shapeType == 'Circle') {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "block";
    } else {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "none";
        document.getElementById("draw_figure_button").disabled = true;
    }
}

function onDrawButtonClick() {
    var sel = document.getElementById("shape_choice");
    var shapeType = sel.options[sel.selectedIndex].text;

    var canvas = document.getElementById("shape_canvas");
    var context = canvas.getContext("2d");

    clearCanvas();
    console.log("Shape type: " + shapeType + "-- " + getCurrentTime());
    console.log("Program draw shape with parametres:" + JSON.stringify(getDrawParameters(shapeType)) + "-- " + getCurrentTime());

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

        //TODO: rename Classes members
        params.X1 = getElementNumberValue("rectX1");
        params.coordX2 = getElementNumberValue("rectX2");
        params.coordY1 = getElementNumberValue("rectY1");
        params.coordY2 = getElementNumberValue("rectY2");
    } else if (shapeType == 'Triangle') {
        params.X1 = getElementNumberValue("triangleX1");
        params.coordX2 = getElementNumberValue("triangleX2");
        params.coordX3 = getElementNumberValue("triangleX3");
        params.coordY1 = getElementNumberValue("triangleY1");
        params.coordY2 = getElementNumberValue("triangleY2");
        params.coordY3 = getElementNumberValue("triangleY3");
    } else if (shapeType == 'Circle') {
        params.coordX = getElementNumberValue("circleCenterX");
        params.coordY = getElementNumberValue("circleCenterY");
        params.radius = getElementNumberValue("circleRadius");
    }
    params.fillColor = getValidColorValue("fillColor");
    params.borderColor = getValidColorValue("borderColor");

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

function getValidColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : '#000000');
}

function getElementValue(id) {
    return document.getElementById(id).value;
}

function isNumber(value) {
    //TODO: replace by NUMBER
    return value.match(/^\d+$/);
}

function isColor(value) {
    return value.match(/^#[0-9A-F]{6}$/);
}

function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

function clearCanvas() {
    var canvas = document.getElementById('shape_canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log("Canvas cleared: " + getCurrentTime());
}