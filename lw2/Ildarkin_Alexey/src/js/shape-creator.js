var SHAPE_INFO_TEXT_SIZE = 14;
var shape = null;

function createTriangle() {
    shape = new Triangle();
    shape.setFillColor(getElementValueById("input-fill-color"));
    shape.setBorderColor(getElementValueById("input-border-color"));
    shape.setFirstPoint(createPoint(getElementValueById("triangle-x1"),
     getElementValueById("triangle-y1")));
    shape.setSecondPoint(createPoint(getElementValueById("triangle-x2"),
     getElementValueById("triangle-y2")));
    shape.setThirdPoint(createPoint(getElementValueById("triangle-x3"),
     getElementValueById("triangle-y3")));

    return shape;
}

function createRectangle() {
    shape = new Rectangle();
    shape.setFillColor(getElementValueById("input-fill-color"));
    shape.setBorderColor(getElementValueById("input-border-color"));
    shape.setLeftTopPoint(createPoint(getElementValueById("rectangle-x1"),
     getElementValueById("rectangle-y1")));
    shape.setRightBottomPoint(createPoint(getElementValueById("rectangle-x2"),
     getElementValueById("rectangle-y2")));

    return shape;
}

function createCircle() {
    shape = new Circle();
    shape.setFillColor(getElementValueById("input-fill-color"));
    shape.setBorderColor(getElementValueById("input-border-color"));
    shape.setRadius(getElementValueById("circle-r"));
    shape.setCenterPoint(createPoint(getElementValueById("circle-x"),
     getElementValueById("circle-y")));

    return shape;
}

function drawShapeInfo(context, shape) {
    var SHAPE_INFO_X_POS = 0;
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 3);
    context.fillText("Area: " + shape.calculateArea(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 4);
}