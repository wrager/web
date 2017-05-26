const SHAPE_INFO_TEXT_SIZE = 14;
let circle: Circle;

function createTriangle() {
    const triangle = new Triangle();
    triangle.setFillColor(getElementValueById("input-fill-color"));
    triangle.setBorderColor(getElementValueById("input-border-color"));
    triangle.setFirstPoint(Point.createPoint(getElementValueById("triangle-x1"),
            getElementValueById("triangle-y1")));
    triangle.setSecondPoint(Point.createPoint(getElementValueById("triangle-x2"),
            getElementValueById("triangle-y2")));
    triangle.setThirdPoint(Point.createPoint(getElementValueById("triangle-x3"),
            getElementValueById("triangle-y3")));
    return triangle;
}

function createRectangle() {
    const rectangle = new Rectangle();
    rectangle.setFillColor(getElementValueById("input-fill-color"));
    rectangle.setBorderColor(getElementValueById("input-border-color"));
    rectangle.setLeftTopPoint(Point.createPoint(getElementValueById("rectangle-x1"),
            getElementValueById("rectangle-y1")));
    rectangle.setRightBottomPoint(Point.createPoint(getElementValueById("rectangle-x2"),
            getElementValueById("rectangle-y2")));

    return rectangle;
}

function createCircle() {
    circle = new Circle();
    alert("asd");
    circle.setFillColor(getElementValueById("input-fill-color"));
    circle.setBorderColor(getElementValueById("input-border-color"));
    circle.setRadius(getElementValueById("circle-r"));
    circle.setPoint(Point.createPoint(getElementValueById("circle-x"),
            getElementValueById("circle-y")));

    return circle;
}

function drawShapeInfo(context: any, shape: any) {
    const SHAPE_INFO_X_POS = 0;
    context.fillStyle = INFO_TEXT_COLOR;
    context.fillText(shape.constructor.name, SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 2);
    context.fillText("Perimeter: " + shape.calculatePerimeter(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 3);
    context.fillText("Area: " + shape.calculateArea(), SHAPE_INFO_X_POS, SHAPE_INFO_TEXT_SIZE * 4);
}
