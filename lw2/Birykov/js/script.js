var canvas = getElement("canvas");
var context = canvas.getContext("2d");

function onShapeSelect() {

    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");
    show("apply-btn");

    var selector = getElement("shape-selector");
    var selectedValue = selector.options[selector.selectedIndex].value;

    if (selectedValue == "Circle") {
        show("circle-optional-form");
    } else if (selectedValue == "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue == "Triangle") {
        show("triangle-optional-form");
    }
}

function onApplyClick() {
    var selector = getElement("shape-selector");
    var selectedValue = selector.options[selector.selectedIndex].value;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue == "Circle") {
        var circle = new Circle();
        circle.setFillColor(getElementValue("input-fill-color"));
        circle.setBorderColor(getElementValue("input-border-color"));
        circle.setRadius(getElementValue("circle-r"));
        circle.setX(getElementValue("circle-x"));
        circle.setY(getElementValue("circle-y"));
    } else if (selectedValue == "Rectangle") {
        var rectangle = new Rectangle();
        rectangle.setFillColor(getElementValue("input-fill-color"));
        rectangle.setBorderColor(getElementValue("input-border-color"));
        rectangle.setX1(getElementValue("rectangle-x1"));
        rectangle.setY1(getElementValue("rectangle-y1"));
        rectangle.setX2(getElementValue("rectangle-x2"));
        rectangle.setY2(getElementValue("rectangle-y2"));
    } else if (selectedValue == "Triangle") {
        var triangle = new Triangle();
        triangle.setFillColor(getElementValue("input-fill-color"));
        triangle.setBorderColor(getElementValue("input-border-color"));
        triangle.setP1X(getElementValue("triangle-x1"));
        triangle.setP1Y(getElementValue("triangle-y1"));
        triangle.setP2X(getElementValue("triangle-x2"));
        triangle.setP2Y(getElementValue("triangle-y2"));
        triangle.setP3X(getElementValue("triangle-x3"));
        triangle.setP3Y(getElementValue("triangle-y3"));
    }

    circle && circle.draw();
    rectangle && rectangle.draw();
    triangle && triangle.draw();
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