var FONT_SIZE = 16;
var INFO_TEXT_COLOR = "#000000";

var circle;
var rectangle;
var triangle;

function onShapeSelect() {

    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");
    show("apply-btn");

    var selectedValue = getSelectorValue();
    if (selectedValue == "Circle") {
        show("circle-optional-form");
    } else if (selectedValue == "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue == "Triangle") {
        show("triangle-optional-form");
    }
}

function onApplyClick() {
    var canvas = getElement("canvas");
    var context = canvas.getContext("2d");
    var selectedValue = getSelectorValue();
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue == "Circle") {
        circle = new Circle();
        circle.setFillColor(getElementValue("input-fill-color"));
        circle.setBorderColor(getElementValue("input-border-color"));
        circle.setRadius(getElementValue("circle-r"));
        circle.setX(getElementValue("circle-x"));
        circle.setY(getElementValue("circle-y"));
    } else if (selectedValue == "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("input-fill-color"));
        rectangle.setBorderColor(getElementValue("input-border-color"));
        rectangle.setX1(getElementValue("rectangle-x1"));
        rectangle.setY1(getElementValue("rectangle-y1"));
        rectangle.setX2(getElementValue("rectangle-x2"));
        rectangle.setY2(getElementValue("rectangle-y2"));
    } else if (selectedValue == "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("input-fill-color"));
        triangle.setBorderColor(getElementValue("input-border-color"));
        triangle.setP1X(getElementValue("triangle-x1"));
        triangle.setP1Y(getElementValue("triangle-y1"));
        triangle.setP2X(getElementValue("triangle-x2"));
        triangle.setP2Y(getElementValue("triangle-y2"));
        triangle.setP3X(getElementValue("triangle-x3"));
        triangle.setP3Y(getElementValue("triangle-y3"));
    }

    draw([circle, rectangle, triangle], context);
}

function exist(item) {
    return typeof (item) != 'undefined' && item != null;
}

function draw(shapes, context) {
    var index = 1;

    shapes.forEach(function(element) {
        if (exist(element)) {
            element.draw(context);
            drawShapeInfo(context, element, index);
            index+=2;
        }
    });
}

function drawShapeInfo(context, shape, shift) {
    context.font=FONT_SIZE + "px Georgia";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, 800, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
}

function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function hide(id) {
    var element =  getElement(id);
    element.style.display = "none";
}

function show (id) {
    var element =  getElement(id);
    element.style.display = "block"
}

function getSelectorValue() {
    var selector = getElement("shape-selector");
    return selector.options[selector.selectedIndex].value;
}