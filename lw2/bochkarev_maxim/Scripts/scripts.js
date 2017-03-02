function shapeParametersChoice(shapeType)
{
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

function drawShape() {
    var sel = document.getElementById("shape_choice");
    var shapeType = sel.options[sel.selectedIndex].text;

    clearCanvas();
    getDrawParameters(shapeType);

}

function getDrawParameters(shapeType){
    var params = {};
    if(shapeType == 'Rectangle') {
        params.coordX1 = getValidNumberValue("rectX1");
        params.coordX2 = getValidNumberValue("rectX2");
        params.coordY1 = getValidNumberValue("rectY1");
        params.coordY2 = getValidNumberValue("rectY2");
    } else if (shapeType == 'Triangle') {
        params.coordX1 = getValidNumberValue("triangleX1");
        params.coordX2 = getValidNumberValue("triangleX2");
        params.coordX3 = getValidNumberValue("triangleX3");
        params.coordY1 = getValidNumberValue("triangleY1");
        params.coordY2 = getValidNumberValue("triangleY2");
        params.coordY3 = getValidNumberValue("triangleY3");
    } else if (shapeType == 'Circle') {
        params.coordX = getValidNumberValue("circleCenterX");
        params.coordY = getValidNumberValue("circleCenterY");
        params.radius = getValidNumberValue("circleRadius");
    }

    params.fillColor = getValidColorValue("fillColor");
    params.borderColor = getValidColorValue("borderColor");

    console.log("Canvas drawing parameters: " + (JSON.stringify(params)));
    return params;
}


function getValidNumberValue(elem) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0);
}

function getValidColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : '#000000');
}

function getElementValue(elem) {
    return document.getElementById(elem).value;
}

function isNumber(value) {
    return value.match(/^[0-9]$/);
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

