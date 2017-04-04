function clearPropField() {
    document.getElementsByClassName('circleProp')[0].style.display = 'none';
    document.getElementsByClassName('rectangleProp')[0].style.display = 'none';
    document.getElementsByClassName('triangleProp')[0].style.display = 'none';

}
function setPropField(shape) {
    document.getElementsByClassName(shape + 'Prop')[0].style.display = 'block';
}
function clearPropInputValues() {
    var x = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].value = '';
    }
}

function showParametersField(choosenShape) {
    clearPropField();
    clearPropInputValues();
    setPropField(choosenShape);
}

function changeShape(choosenShape) {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    showParametersField(choosenShape);
}
function setShapePosX(shape, x) {
    shape.setX(x);
    shape.draw();
}
function setShapePosY(shape, y) {
    shape.setY(y);
    shape.draw();
}
function setShapeFillColor(fillColor) {
    var shape = getCurrentShape();
    shape.setFillColor(fillColor);
    shape.draw();
}
function setShapeBorderColor(borderColor) {
    var shape = getCurrentShape();
    shape.setBorderColor(borderColor);
    shape.draw();
}

function setShapeBorderWidth(value) {
    var shape = getCurrentShape();
    shape.setBorderWidth(value);
    shape.draw();
}
function getCurrentShape() {
    var shapeName = document.getElementById("selectShape").value;
    switch (shapeName) {
        case 'circle':
            return circle;
        case 'rectangle':
            return rectangle;
        case 'triangle':
            return triangle;
    }
}


