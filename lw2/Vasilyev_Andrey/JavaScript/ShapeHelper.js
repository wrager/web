//переименовать (фабрика)(передать параметром тип шейпа)
function initializeShape() {
    e = getElementById("selectShape");
    switch (e.options[e.selectedIndex].text) {
        case "Circle":
            var x = parseInt(getElementValueById("circle-x"));
            var y = parseInt(getElementValueById('circle-y'));
            //проверку на заполнение x y, если нет то прототипные значения
            
            var radius = parseInt(getElementValueById('circle-radius'));       
            return new Circle(x, y, radius);
        case "Rectangle":
            var x = parseInt(getElementValueById("rectangle-x"));
            var y = parseInt(getElementValueById('rectangle-y'));
            var width = parseInt(getElementValueById('rectangle-width'));
            var height = parseInt(getElementValueById('rectangle-height'));
            return new Rectangle(x, y, width, height);
        case "Triangle":
            var x1 = parseInt(getElementValueById("triangle-x1"));
            var y1 = parseInt(getElementValueById("triangle-y1"));
            var x2 = parseInt(getElementValueById("triangle-x2"));
            var y2 = parseInt(getElementValueById("triangle-y2"));
            var x3 = parseInt(getElementValueById("triangle-x3"));
            var y3 = parseInt(getElementValueById("triangle-y3"));           
            return new Triangle(x1, y1, x2, y2, x3, y3);
        default:  
            alert('Error: Undefined shape type (' + e.options[e.selectedIndex].text + ')');
            break;
    }
}

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