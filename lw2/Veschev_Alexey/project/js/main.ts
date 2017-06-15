let FONT_SIZE = 16;
let INFO_TEXT_COLOR = "#000000";
let RADIX = 10;

let shapeCanvas = getElement("canvas-shape") as HTMLCanvasElement;
let infoCanvas = getElement("canvas-info") as HTMLCanvasElement;
let circle: Circle;
let rectangle: Rectangle;
let triangle: Triangle;

function onShapeSelect() {
    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");

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
    const shapeContext = shapeCanvas.getContext("2d") as CanvasRenderingContext2D;
    shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);
    const infoContext = infoCanvas.getContext("2d") as CanvasRenderingContext2D;
    infoContext.clearRect(0, 0, infoCanvas.width, infoCanvas.height);

    if (selectedValue === "Circle") {
       circle = new Circle();
       circle.setFillColor(getElementValue("input-fill-color"));
       circle.setBorderColor(getElementValue("input-border-color"));
       circle.setRadius(parseInt(getElementValue("circle-r"), RADIX));
       circle.setCenter(parseInt(getElementValue("circle-x"), RADIX),
       parseInt(getElementValue("circle-y"), RADIX));

    } else if  (selectedValue === "Rectangle") {
       rectangle = new Rectangle();
       rectangle.setFillColor(getElementValue("input-fill-color"));
       rectangle.setBorderColor(getElementValue("input-border-color"));
       rectangle.setFirstPoint(parseInt(getElementValue("rectangle-x1"), RADIX),
       parseInt(getElementValue("rectangle-y1"), RADIX));
       rectangle.setSecondPoint(parseInt(getElementValue("rectangle-x2"), RADIX),
       parseInt(getElementValue("rectangle-y2"), RADIX));

    } else if  (selectedValue === "Triangle") {
       triangle = new Triangle();
       triangle.setFillColor(getElementValue("input-fill-color"));
       triangle.setBorderColor(getElementValue("input-border-color"));
       triangle.setFristPoint(parseInt(getElementValue("triangle-x1"), RADIX),
       parseInt(getElementValue("triangle-y1"), RADIX));
       triangle.setSecondPoint(parseInt(getElementValue("triangle-x2"), RADIX),
       parseInt(getElementValue("triangle-y2"), RADIX));
       triangle.setThirndPoint(parseInt(getElementValue("triangle-x3"), RADIX),
       parseInt(getElementValue("triangle-y3"), RADIX));

    }

    draw([circle, rectangle, triangle], shapeContext, infoContext);
}
(document.getElementById("apply-btn") as HTMLElement).onchange = onApplyClick;

function exist(item) {
    return typeof (item) !== "undefined" && item != null;
}

function draw(shapes: any, shapeContext: CanvasRenderingContext2D, infoContext: CanvasRenderingContext2D) {
    let index = 1;

    shapes.forEach((element: Shape) => {
        if (exist(element)) {
            element.draw(shapeContext);
            drawShapeInfo(infoContext, element, index);
            index += 2;
        }
    });
}

function drawShapeInfo(context, shape, shift) {
    context.font = FONT_SIZE + "px Montserrat Alternates";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.toString().match(/\w+/g)[1], 800, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
}

function getElement(id: string) {
    return document.getElementById(id);
}

function getElementValue(id: string) {
    return (getElement(id) as HTMLInputElement).value;
}

function hide(id: string) {
    const element =  getElement(id) as HTMLElement;
    element.style.display = "none";
}

function show(id: string) {
    const element =  getElement(id) as HTMLElement;
    element.style.display = "block";
}

function getSelectorValue() {
    const selector = getElement("shape-selector") as HTMLSelectElement;
    return (selector).options[selector.selectedIndex].value;
}
