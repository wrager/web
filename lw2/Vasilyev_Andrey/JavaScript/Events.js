
onSelectShapeType = function () {
    e = document.getElementById("selectShape");
    //reset display property for all shapes-content
    for (i = 0; i < e.options.length; i++) {
        document.getElementById(e.options[i].value).style.display = 'none';
    }
     document.getElementById("calculation-result").innerHTML = '';

    //set visible for selected-shape content
    document.getElementById(e.options[e.selectedIndex].value).style.display = 'inline';
}

onClickCalculateResult = function () {
    var shape = initializeShape();
    var resArea = shape.calculateArea();
    var resPerimeter = shape.calculatePerimeter();
    document.getElementById("calculation-result").innerHTML = "Area is: " + resArea + '\n' + "Perimeter is: " + resPerimeter;
    drawShape(shape);
}