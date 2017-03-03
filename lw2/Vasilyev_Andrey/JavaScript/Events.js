//TODO: обернуть в функцию скрытие и показ, декл функцию через func..name
function onSelectShapeType() {
    e = document.getElementById("selectShape");
    //reset display property for all shapes-content
    for (i = 0; i < e.options.length; i++) {
        document.getElementById(e.options[i].value).style.display = 'none';
    }
    clearCanvas();
    document.getElementById("calculation-result").innerHTML = '';

    //set visible for selected-shape content
    document.getElementById(e.options[e.selectedIndex].value).style.display = 'inline';
}

//обернуть в фунцкцию получение значения селекта

function onCalculateResult() {
    var shape = initializeShape();
    var resArea = shape.calculateArea();
    var resPerimeter = shape.calculatePerimeter();
    document.getElementById("calculation-result").innerHTML = "Area: " + resArea + '\n' + "Perimeter: " + resPerimeter;
    drawShape(shape);
}
//document.getElementById("calculation-result") обернуть в функцию