function shapeParametresChoice(shapeType)
{
    console.log(shapeType);
    if (shapeType == 'Rectangle') {
        document.getElementById("rectangle_options").style.display = "block";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "none";
    } else if (shapeType == 'Triangle') {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "block";
        document.getElementById("circle_options").style.display = "none";
    } else if (shapeType == 'Circle') {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "block";
    } else {
        document.getElementById("rectangle_options").style.display = "none";
        document.getElementById("triangle_options").style.display = "none";
        document.getElementById("circle_options").style.display = "none";
    }
}

function validateShapeParameters(){

}

function drawShape() {
    var rect = new Rectangle();
    rect.setCoordX1(20);
    rect.setCoordY2(20);
    rect.setCoordX1(50);
    rect.setCoordY2(50);
    console.log(rect.getFillColor().toString());
    rect.draw();
    validateShapeParameters();
}