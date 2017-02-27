var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var circle = new Circle();
var rectangle = new Rectangle();
var triangle = new Triangle();
circle.draw();
rectangle.draw();
triangle.draw();

function onShapeSelect() {
    var selector = document.getElementById("shape-selector");
    var circleOptional = document.getElementById("circle-optional-form");
    var rectangleOptional = document.getElementById("rectangle-optional-form");
    var triangleOptional = document.getElementById("triangle-optional-form");

    circleOptional.style.display = "none";
    rectangleOptional.style.display = "none";
    triangleOptional.style.display = "none";
    document.getElementById("apply-btn").style.display = "block";

    var selectedValue = selector.options[selector.selectedIndex].value;
    

    if (selectedValue == "Circle") {
        circleOptional.style.display = "block";
    } else if (selectedValue == "Rectangle") {
        rectangleOptional.style.display = "block";
    } else if (selectedValue == "Triangle") {
        triangleOptional.style.display = "block";
    }
}

function onApplyClick() {
    var selector = document.getElementById("shape-selector");
    var selectedValue = selector.options[selector.selectedIndex].value;
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue == "Circle") {
        circle.setFillColor(document.getElementById("input-fill-color").value);
        circle.setBorderColor(document.getElementById("input-border-color").value);
        circle.setRadius(document.getElementById("circle-r").value);
        circle.setX(document.getElementById("circle-x").value);
        circle.setY(document.getElementById("circle-y").value);
    } else if (selectedValue == "Rectangle") {
        rectangle.setFillColor(document.getElementById("input-fill-color").value);
        rectangle.setBorderColor(document.getElementById("input-border-color").value);
        rectangle.setTopLeftX(document.getElementById("rectangle-x1").value);
        rectangle.setTopLeftY(document.getElementById("rectangle-y1").value);
        rectangle.setDownRightX(document.getElementById("rectangle-x2").value);
        rectangle.setDownRightY(document.getElementById("rectangle-y2").value);
    } else if (selectedValue == "Triangle") {
        triangle.setFillColor(document.getElementById("input-fill-color").value);
        triangle.setBorderColor(document.getElementById("input-border-color").value);
        triangle.setTopLeftX(document.getElementById("triangle-x1").value);
        triangle.setTopLeftY(document.getElementById("triangle-y1").value);
        triangle.setDownRightX(document.getElementById("triangle-x2").value);
        triangle.setDownRightY(document.getElementById("triangle-y2").value);
        triangle.setDownRightX(document.getElementById("triangle-x3").value);
        triangle.setDownRightY(document.getElementById("triangle-y3").value);
    }

    redraw();
}

function redraw() {
    circle.draw();
    rectangle.draw();
    triangle.draw();
}



