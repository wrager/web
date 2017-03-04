
function drawShape(myShape) {
    var fillColor = getElementById('fill-color');
    var borderColor = getElementById('border-color');
    if(fillColor && fillColor.value) {
        myShape.setFillColor(fillColor.value);
    }
    if(borderColor && borderColor.value) {
        myShape.setBorderColor(borderColor.value);
    }

    canvas = getElementById('canvas');
    canvas.lineWidth = Shape.LINE_WIDTH;
    clearCanvas();

    myShape.draw(canvas);
}

function clearCanvas() {
    canvas = getElementById('canvas');
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}