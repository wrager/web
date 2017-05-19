import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

window.onload = () => {
    (getElement("draw_figure_button") as HTMLElement).onclick = onDrawButtonClick;
    (getElement("shape_select") as HTMLElement).onchange = onShapeParametersChoice;
};

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
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    clearCanvas();

    let shape;
    if (shapeType === "Rectangle") {
        shape = new Rectangle( {
            X1: getElementNumberValue("rectX1"),
            X2: getElementNumberValue("rectX2"),
            Y1: getElementNumberValue("rectY1"),
            Y2: getElementNumberValue("rectY2"),
            borderColor: getElementColorValue("borderColor"),
            fillColor: getElementColorValue("fillColor")});
    } else if (shapeType === "Triangle") {
        shape = new Triangle( {
            X1: getElementNumberValue("triangleX1"),
            X2: getElementNumberValue("triangleX2"),
            X3: getElementNumberValue("triangleX3"),
            Y1: getElementNumberValue("triangleY1"),
            Y2: getElementNumberValue("triangleY2"),
            Y3: getElementNumberValue("triangleY3"),
            borderColor: getElementColorValue("borderColor"),
            fillColor: getElementColorValue("fillColor")});
    } else if (shapeType === "Circle") {
        shape = new Circle({
            borderColor: getElementColorValue("borderColor"),
            centerX: getElementNumberValue("circleCenterX"),
            centerY: getElementNumberValue("circleCenterY"),
            fillColor: getElementColorValue("fillColor"),
            radius: getElementNumberValue("circleRadius")});
    }
    shape.draw(context);
    printCalcResultOnCanvas(shape, context);
}

function getElementNumberValue(elem: string) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0) as number;
}

function getElementColorValue(elem: string) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : "#000000") as string;
}

function getElement(id: string) {
    return document.getElementById(id) as HTMLElement;
}

function getElementValue(id: string) {
    const element = getElement(id) as HTMLElement;
    return element.getAttribute("value");
}

function isNumber(value: any) {
    return !(Number(value) !== Number(value));
}

function isColor(value: string) {
    return value.match(/^#[0-9A-F]{6}$/);
}

function showElement(elemId: string) {
    getElement(elemId).style.display = "block";
}

function hideElement(elemId: string) {
    getElement(elemId).style.display = "none";
}

function getShapeTypeValue() {
    const shape = getElement("shape_select") as HTMLElement;
    const options = shape.getAttribute("options");
    const index = shape.getAttribute("selectedIndex") as string;
    return (options === null || index === null) ?
        null :
        options[index].text;
}

function clearCanvas() {
    const canvas = getElement("shape_canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function printCalcResultOnCanvas(shape: Shape, context: CanvasRenderingContext2D) {
    const areaResult = "Area: " + Number(shape.calculateArea()).toFixed(2);
    const perimeterResult = "Perimeter: " + Number(shape.calculatePerimeter()).toFixed(2);
    context.fillStyle = "black";
    context.font = "bold 12px Arial";
    context.fillText(perimeterResult, 5, 370);
    context.fillText(areaResult, 5, 390);
}
