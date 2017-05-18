
getElement("draw_figure_button").onclick = onDrawButtonClick;
getElement("shape_select").onchange = onShapeParametersChoice;

function onShapeParametersChoice() {
    const shapeType = getShapeTypeValue();
    getElement("draw_figure_button").setAttribute("disabled", "false");

    if (shapeType === "Rectangle") {
        showElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType === "Triangle") {
        hideElement("rectangle_options");
        showElement("triangle_options");
        hideElement("circle_options");
    } else if (shapeType === "Circle") {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        showElement("circle_options");
    } else {
        hideElement("rectangle_options");
        hideElement("triangle_options");
        hideElement("circle_options");
        getElement("draw_figure_button").setAttribute("disabled", "true");
    }
}

function onDrawButtonClick() {
    const shapeType = getShapeTypeValue() as string;

    const canvas = getElement("shape_canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as Canvas2DContextAttributes;

    clearCanvas();

    let shape;
    if (shapeType === "Rectangle") {
        shape = new Rectangle(
            getElementNumberValue("rectX1"),
            getElementNumberValue("rectX2"),
            getElementNumberValue("rectY1"),
            getElementNumberValue("rectY2"),
            getElementColorValue("fillColor"),
            getElementColorValue("borderColor"));
    } else if (shapeType === "Triangle") {
        shape = new Triangle(
            getElementNumberValue("triangleX1"),
            getElementNumberValue("triangleX2"),
            getElementNumberValue("triangleX3"),
            getElementNumberValue("triangleY1"),
            getElementNumberValue("triangleY2"),
            getElementNumberValue("triangleY3"),
            getElementColorValue("fillColor"),
            getElementColorValue("borderColor"));
    } else if (shapeType === "Circle") {
        shape = new Circle(
            getElementNumberValue("circleCenterX"),
            getElementNumberValue("circleCenterY"),
            getElementNumberValue("circleRadius"),
            getElementColorValue("fillColor"),
            getElementColorValue("borderColor"));
    }
    shape.draw(context);
    printCalcResultOnCanvas(shape, context);
}

function getElementNumberValue(elem) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0) as number;
}

function getElementColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : "#000000");
}

function getElement(id) {
    return document.getElementById(id) as HTMLElement;
}

function getElementValue(id) {
    const element = getElement(id) as HTMLElement;
    return element.getAttribute("value");
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

function getShapeTypeValue() {
    const shape = getElement("shape_select") as HTMLElement;
    return shape.getAttribute("options")[shape.getAttribute("selectedIndex")].text;
}

function clearCanvas() {
    const canvas = getElement("shape_canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function printCalcResultOnCanvas(shape, context) {
    const areaResult = "Area: " + Number(shape.calculateArea()).toFixed(2);
    const perimeterResult = "Perimeter: " + Number(shape.calculatePerimeter()).toFixed(2);
    context.fillStyle = "black";
    context.font = "bold 12px Arial";
    context.fillText(perimeterResult, 5, 370);
    context.fillText(areaResult, 5, 390);
}
