var circle;
var rectangle;
var triangle;

function onShapeSelect() {

    show("apply");
    var selectedShape = getSelectorShape();

    if (selectedShape == "Circle") {
        show("circle-options");
        hide("rectangle-options");
        hide("triangle-options");
    } else if (selectedShape == "Rectangle") {
        show("rectangle-options");
        hide("circle-options");
        hide("triangle-options");
    } else if (selectedShape == "Triangle") {
        show("triangle-options");
        hide("circle-options");
        hide("rectangle-options");
    }
}

function onApplyClick() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");    
    var selectedShape = getSelectorShape();
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedShape == "Circle") {
        circle = new Circle(); //создаем объект
        circle.setFillColor(getElementValue("fill-color"));
        circle.setBorderColor(getElementValue("border-color"));
        circle.setRadius(getElementValue("circle-r"));
        circle.setX(getElementValue("circle-x"));
        circle.setY(getElementValue("circle-y"));
    } else if (selectedShape == "Rectangle") {
        rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("fill-color"));
        rectangle.setBorderColor(getElementValue("border-color"));
        rectangle.setX1(getElementValue("rectangle-x1"));
        rectangle.setY1(getElementValue("rectangle-y1"));
        rectangle.setX2(getElementValue("rectangle-x2"));
        rectangle.setY2(getElementValue("rectangle-y2"));
    } else if (selectedShape == "Triangle") {
        triangle = new Triangle();
        triangle.setFillColor(getElementValue("fill-color"));
        triangle.setBorderColor(getElementValue("border-color"));
        triangle.setX1(getElementValue("triangle-x1"));
        triangle.setY1(getElementValue("triangle-y1"));
        triangle.setX2(getElementValue("triangle-x2"));
        triangle.setY2(getElementValue("triangle-y2"));
        triangle.setX3(getElementValue("triangle-x3"));
        triangle.setY3(getElementValue("triangle-y3"));
    }
    
    draw([circle, rectangle, triangle], context);
}

function draw(shapes, context) {
    var index = 1;
    shapes.forEach(function(element) {
        if (typeof(element) != 'undefined' && element != null) {
            element.draw(context);
            drawFigureInformation(context, element, index);
            index+=2;
        }
    });
}

function drawFigureInformation(context, shape, shift) {
    context.font = "14px Arial";
    context.fillText(shape.constructor.name, 800, shift * 14 * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 800, shift * 14 * 2 + 14);
    context.fillText("Area: " + shape.calculateArea(), 800, shift * 14 * 2 + 14 * 2);
}

function getElementValue(id) {
    return document.getElementById(id).value; //доступ к элменту
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function getSelectorShape() {
    var selector = document.getElementById("shape-selector");
    return selector.options[selector.selectedIndex].value;
}