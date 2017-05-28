let circle: Circle;
let rectangle: Rectangle;
let triangle: Triangle;

function onShapeSelect() {

    show("apply");

    const selectedShape = getSelectorShape();

    if (selectedShape === "Circle") {
        show("circle-options");
        hide("rectangle-options");
        hide("triangle-options");
    } else if (selectedShape === "Rectangle") {
        show("rectangle-options");
        hide("circle-options");
        hide("triangle-options");
    } else if (selectedShape === "Triangle") {
        show("triangle-options");
        hide("circle-options");
        hide("rectangle-options");
    }
}
(document.getElementById("shape-selector") as HTMLElement).onchange = onShapeSelect;

function onApplyClick() {
    const selectedShape = getSelectorShape();
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedShape === "Circle") {
        circle = new Circle();
        circle.setFillColor(getElementValue("fill-color"));
        circle.setBorderColor(getElementValue("border-color"));
        circle.setRadius(parseInt(getElementValue("circle-r"), 10));
        circle.setX(parseInt(getElementValue("circle-x"), 10));
        circle.setY(parseInt(getElementValue("circle-y"), 10));
    } else if (selectedShape === "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("fill-color"));
        rectangle.setBorderColor(getElementValue("border-color"));
        rectangle.setX1(parseInt(getElementValue("rectangle-x1"), 10));
        rectangle.setY1(parseInt(getElementValue("rectangle-y1"), 10));
        rectangle.setX2(parseInt(getElementValue("rectangle-x2"), 10));
        rectangle.setY2(parseInt(getElementValue("rectangle-y2"), 10));
    } else if (selectedShape === "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("fill-color"));
        triangle.setBorderColor(getElementValue("border-color"));
        triangle.setX1(parseInt(getElementValue("triangle-x1"), 10));
        triangle.setY1(parseInt(getElementValue("triangle-y1"), 10));
        triangle.setX2(parseInt(getElementValue("triangle-x2"), 10));
        triangle.setY2(parseInt(getElementValue("triangle-y2"), 10));
        triangle.setX3(parseInt(getElementValue("triangle-x3"), 10));
        triangle.setY3(parseInt(getElementValue("triangle-y3"), 10));
    }

    draw([circle, rectangle, triangle], context);
}
(document.getElementById("apply") as HTMLElement).onchange = onApplyClick;

function draw(shapes: any, context: CanvasRenderingContext2D) {
    let index = 1;
    shapes.forEach((element: Shape) => {
        if (typeof(element) !== "undefined" && element !== null) {
            element.draw(context);
            drawFigureInformation(context, element, index);
            index += 2;
        }
    });
}

function drawFigureInformation(context: CanvasRenderingContext2D, shape: Shape, shift: number) {
    context.font = "14px Arial";
    context.fillText(shape.constructor.toString().match(/\w+/g)[1], 800, shift * 14 * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * 14 * 2 + 14);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * 14 * 2 + 14 * 2);
}

function getElementValue(id: string) {
    return (document.getElementById(id) as HTMLInputElement).value;
}

function hide(id: string) {
    const element =  document.getElementById(id) as HTMLElement;
    element.style.display = "none";
}

function show(id: string) {
    const element =  document.getElementById(id) as HTMLElement;
    element.style.display = "block";
}

function getSelectorShape() {
    const selector = document.getElementById("shape-selector") as HTMLSelectElement;
    return (selector).options[selector.selectedIndex].value;
}
