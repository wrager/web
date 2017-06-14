var FONT_SIZE = 16;
var INFO_TEXT_COLOR = "#000000";

var circle;
var rectangle;
var triangle;

function onShapeSelect() {
    hide("circle-optional-form");
    hide("rectangle-optional-form");
    hide("triangle-optional-form");

    var selectedValue = getSelectorValue();
    if (selectedValue == "Circle") {
        show("circle-optional-form");
    } else if (selectedValue == "Rectangle") {
        show("rectangle-optional-form");
    } else if (selectedValue == "Triangle") {
        show("triangle-optional-form");
    }
}
document.getElementById("shape-selector").onchange = onShapeSelect;

function onApplyClick() {
    var shapeCanvas = getElement("canvas-shape");
    var shapeContext = shapeCanvas.getContext("2d");
    var selectedValue = getSelectorValue();
    shapeContext.clearRect(0, 0, shapeCanvas.width, shapeCanvas.height);

    var infoCanvas = getElement("canvas-info");
    var infoContext = infoCanvas.getContext("2d");
    infoContext.clearRect(0, 0, infoCanvas.width, infoCanvas.height);

   if (selectedValue == "Circle"){
       circle = new Circle();
       circle.setFillColor(getElementValue("input-fill-color"));
       circle.setBorderColor(getElementValue("input-border-color"));
       circle.setRadius(getElementValue("circle-r"));
       circle.setCenter(getElementValue("circle-x"), getElementValue("circle-y"));

   } else if  (selectedValue == "Rectangle") {
       rectangle = new Rectangle();
       rectangle.setFillColor(getElementValue("input-fill-color"));
       rectangle.setBorderColor(getElementValue("input-border-color"));
       rectangle.setFirstPoint(getElementValue("rectangle-x1"), getElementValue("rectangle-y1"));
       rectangle.setSecondPoint(getElementValue("rectangle-x2"), getElementValue("rectangle-y2"));

    } else if  (selectedValue == "Triangle") {
       triangle = new Triangle();
       triangle.setFillColor(getElementValue("input-fill-color"));
       triangle.setBorderColor(getElementValue("input-border-color"));
       triangle.setFristPoint(getElementValue("triangle-x1"), getElementValue("triangle-y1"));
       triangle.setSecondPoint(getElementValue("triangle-x2"), getElementValue("triangle-y2"));
       triangle.setThirdPoint(getElementValue("triangle-x3"), getElementValue("triangle-y3"));

   }
   draw([circle, rectangle, triangle], shapeContext, infoContext);
}
document.getElementById("apply-btn").onchange = onApplyClick;

function exist(item) {
    return typeof (item) != 'undefined' && item != null;
}

function draw(shapeList, shapeContext, infoContext){
    var index = 1;
    shapeList.forEach(function(element) {
        if (exist(element)) {
            element.draw(shapeContext);
            drawShapeInfo(infoContext, element, index);
            index+=2;
        }
    });
}

function drawShapeInfo(context, shape, shift){
    context.font=FONT_SIZE + "px Montserrat Alternates";
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, 20, shift * FONT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), 20, shift * FONT_SIZE * 2 + FONT_SIZE);
    context.fillText("Area: " + shape.calculateArea(), 20, shift * FONT_SIZE * 2 + FONT_SIZE * 2);
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