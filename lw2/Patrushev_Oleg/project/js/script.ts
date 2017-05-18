let FONT_SIZE = 16;
let INFO_TEXT_COLOR = "#000000";

let canvas = getElement("canvas") as HTMLCanvasElement;
let circle: Circle;
let rectangle: Rectangle;
let triangle: Triangle;

function onShapeSelect() {

    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");
    show("apply-btn");

    const selectedValue = getSelectorValue();

    if (selectedValue === "Circle") {
        show("circle-optional-form");
    } else if (selectedValue === "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue === "Triangle") {
        show("triangle-optional-form");
    }
}
(document.getElementById("shape-selector") as HTMLElement).onchange = onShapeSelect;

function onApplyClick() {
    const selectedValue = getSelectorValue();
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue === "Circle") {
        circle = new Circle();
        circle.setFillColor(getElementValue("input-fill-color"));
        circle.setBorderColor(getElementValue("input-border-color"));
        circle.setRadius(getElementValue("input-circle-r"));
        circle.setX(getElementValue("input-circle-x"));
        circle.setY(getElementValue("input-circle-y"));
    } else if (selectedValue === "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("input-fill-color"));
        rectangle.setBorderColor(getElementValue("input-border-color"));
        rectangle.setX1(getElementValue("input-rectangle-x1"));
        rectangle.setY1(getElementValue("input-rectangle-y1"));
        rectangle.setX2(getElementValue("input-rectangle-x2"));
        rectangle.setY2(getElementValue("input-rectangle-y2"));
    } else if (selectedValue === "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("input-fill-color"));
        triangle.setBorderColor(getElementValue("input-border-color"));
        triangle.setP1X(getElementValue("input-triangle-x1"));
        triangle.setP1Y(getElementValue("input-triangle-y1"));
        triangle.setP2X(getElementValue("input-triangle-x2"));
        triangle.setP2Y(getElementValue("input-triangle-y2"));
        triangle.setP3X(getElementValue("input-triangle-x3"));
        triangle.setP3Y(getElementValue("input-triangle-y3"));
    }

    draw([circle, rectangle, triangle], context);
}
(document.getElementById("apply-btn") as HTMLElement).onchange = onApplyClick;

function exist(item) {
    return typeof (item) !== "undefined" && item !== null;
}

function draw(shapes, context) {
    let index = 1;

    shapes.forEach((element) => {
        if (exist(element)) {
            element.draw(context);
            drawShapeInfo(context, element, index);
            index += 2;
        }
    });
}

function drawShapeInfo(context, shape, shift) {
    context.font = FONT_SIZE + "px Montserrat Alternates";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, 800, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
}

function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return (getElement(id) as HTMLInputElement).value;
}

function hide(id) {
    const element =  getElement(id);
    element.style.display = "none";
}

function show(id) {
    const element =  getElement(id);
    element.style.display = "block";
}

function getSelectorValue() {
    const selector = getElement("shape-selector") as HTMLSelectElement;
    return (selector).options[selector.selectedIndex].value;
}
