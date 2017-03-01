
initializeShape = function() {
    e = document.getElementById("selectShape");
    var myShape;
    switch (e.options[e.selectedIndex].text) {
        case "Окружность":
            var x = parseInt(document.getElementById("circle-x").value);
            var y = parseInt(document.getElementById('circle-y').value);
            var radius = parseInt(document.getElementById('circle-radius').value);       
            return new Circle(x, y, radius);
        case "Прямоугольник":
            var x = parseInt(document.getElementById("rectangle-x").value);
            var y = parseInt(document.getElementById('rectangle-y').value);
            var width = parseInt(document.getElementById('rectangle-width').value);
            var height = parseInt(document.getElementById('rectangle-height').value);
            return new Rectangle(x, y, width, height);
        case "Треугольник":
            var x1 = parseInt(document.getElementById("triangle-x1").value);
            var y1 = parseInt(document.getElementById("triangle-y1").value);
            var x2 = parseInt(document.getElementById("triangle-x2").value);
            var y2 = parseInt(document.getElementById("triangle-y2").value);
            var x3 = parseInt(document.getElementById("triangle-x3").value);
            var y3 = parseInt(document.getElementById("triangle-y3").value);           
            return new Triangle(x1, y1, x2, y2, x3, y3);
        default:
            alert("Error: Undefined shape type.");
            break;
    }
}

drawShape = function(myShape) {
    var fillColor = document.getElementById('fill-color');
    var borderColor = document.getElementById('border-color');
    if(fillColor && fillColor.value) {
        myShape.setFillColor(fillColor.value);
    }
    if(borderColor && borderColor.value) {
        myShape.setBorderColor(borderColor.value);
    }

    canvas = document.getElementById('canvas');
    if(canvas && canvas.getContext) {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        myShape.draw(canvas);
    }
    else alert('Error: No canvas');
}