function onSelectShapeType() {
    resetDependingContent();
    clearCanvas();
    getElementById("calculation-result").innerHTML = '';
}

function onCalculateResult() {
    var shape = initializeShape();
    var resArea = shape.calculateArea();
    var resPerimeter = shape.calculatePerimeter();
    getElementById("calculation-result").innerHTML = "Area: " + resArea + '\n' + "Perimeter: " + resPerimeter;
    drawShape(shape);
}