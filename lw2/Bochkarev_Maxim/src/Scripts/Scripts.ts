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

    let shape = null;
    if (shapeType === "Rectangle") {
        shape = new Rectangle();
        shape.setX1(getElementNumberValue("rectX1"));
        shape.setX2(getElementNumberValue("rectX2"));
        shape.setY1(getElementNumberValue("rectY1"));
        shape.setY2(getElementNumberValue("rectY2"));
        shape.setBorderColor(getElementColorValue("borderColor"));
        shape.setFillColor(getElementColorValue("fillColor"));
    } else if (shapeType === "Triangle") {
        shape = new Triangle();
        shape.setX1(getElementNumberValue("triangleX1"));
        shape.setX2(getElementNumberValue("triangleX2"));
        shape.setX3(getElementNumberValue("triangleX3"));
        shape.setY1(getElementNumberValue("triangleY1"));
        shape.setY2(getElementNumberValue("triangleY2"));
        shape.setY2(getElementNumberValue("triangleY3"));
        shape.setBorderColor(getElementColorValue("borderColor"));
        shape.setFillColor(getElementColorValue("fillColor"));
    } else if (shapeType === "Circle") {
        shape = new Circle();
        shape.setX(getElementNumberValue("circleCenterX"));
        shape.setY(getElementNumberValue("circleCenterY"));
        shape.setRadius(getElementNumberValue("circleRadius"));
        shape.setBorderColor(getElementColorValue("borderColor"));
        shape.setFillColor(getElementColorValue("fillColor"));
    }
    if (shape != null) {
        shape.draw(context);
        printCalcResultOnCanvas(shape, context);
    }

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
    const value = (getElement(id) as HTMLElement).getAttribute("value");
    return (value != null) ? value : "";
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
        options[Number(index)];
}

function clearCanvas() {
    const canvas = getElement("shape_canvas") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx != null) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

function printCalcResultOnCanvas(shape: Shape, context: CanvasRenderingContext2D) {
    const areaResult = "Area: " + Number(shape.calculateArea()).toFixed(2);
    const perimeterResult = "Perimeter: " + Number(shape.calculatePerimeter()).toFixed(2);
    context.fillStyle = "black";
    context.font = "bold 12px Arial";
    context.fillText(perimeterResult, 5, 370);
    context.fillText(areaResult, 5, 390);
}
