function onSelectShapeType() {
    resetDependingContent();
    clearCanvas();
    getElementById("calculation-result").innerHTML = '';
}

function onCalculateResult() {
    var currentSelectShapeType = getCurrentSelectedOptionValue();
    var shape = ShapeFactory.createShape(currentSelectShapeType);
    var resArea = shape.calculateArea();
    var resPerimeter = shape.calculatePerimeter();
    getElementById("calculation-result").innerHTML = "Area: " + resArea + '\n' + "Perimeter: " + resPerimeter;
    drawShape(shape);
}