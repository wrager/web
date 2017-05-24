var SHAPE_INFO_TEXT_SIZE = 14;

var shape = null;

function createTriangle() {
    triangleShape = new Triangle();
    triangleShape.setFillColor(getElementValueById("input-fill-color"));
    triangleShape.setBorderColor(getElementValueById("input-border-color"));
    triangleShape.setFirstPoint(createPoint(getElementValueById("triangle-x1"),
     getElementValueById("triangle-y1")));
    triangleShape.setSecondPoint(createPoint(getElementValueById("triangle-x2"),
     getElementValueById("triangle-y2")));
    triangleShape.setThirdPoint(createPoint(getElementValueById("triangle-x3"),
     getElementValueById("triangle-y3")));

    return triangleShape;
}

function createRectangle() {
    rectangleShape = new Rectangle();
    rectangleShape.setFillColor(getElementValueById("input-fill-color"));
    rectangleShape.setBorderColor(getElementValueById("input-border-color"));
    rectangleShape.setLeftTopPoint(createPoint(getElementValueById("rectangle-x1"),
     getElementValueById("rectangle-y1")));
    rectangleShape.setRightBottomPoint(createPoint(getElementValueById("rectangle-x2"),
     getElementValueById("rectangle-y2")));

    return rectangleShape;
}

function createCircle() {
    circleShape = new Circle();
    circleShape.setFillColor(getElementValueById("input-fill-color"));
    circleShape.setBorderColor(getElementValueById("input-border-color"));
    circleShape.setRadius(getElementValueById("circle-r"));
    circleShape.setCenterPoint(createPoint(getElementValueById("circle-x"),
     getElementValueById("circle-y")));

    return circleShape;
}

function drawShapeInfo(context, shape) {
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 3);
    context.fillText("Area: " + shape.calculateArea(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 4);
}