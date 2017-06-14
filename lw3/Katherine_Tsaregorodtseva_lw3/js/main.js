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

function setShapePosX(shape, x) {
    shape.setX(x);
    shape.draw();
}
function setShapePosY(shape, y) {
    shape.setY(y);
    shape.draw();
}
function setShapeFillColor(shape, fillColor) {
    shape.setFillColor(fillColor);
    shape.draw();
}
function setShapeBorderColor(shape, borderColor) {
    shape.setBorderColor(borderColor);
    shape.draw();
}

function setShapeBorderWidth(shape, value) {
    shape.setBorderWidth(value);
    shape.draw();
}


window.onload = function() {
     function getCurrentShape() {
        var shapeName = document.getElementById("select-shape").value;
        switch (shapeName) {
            case 'circle':
                return circle;
            case 'rectangle':
                return rectangle;
            case 'triangle':
                return triangle;
        }
    }
    /*shape properties */
    document.getElementById("select-shape").onchange = function() {
        var c = document.getElementById("canvasShape");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
        showParametersField(document.getElementById("select-shape").value);
    }
    document.getElementById("shape-fill-color").onchange = function() {
        setShapeFillColor(getCurrentShape(), document.getElementById("shape-fill-color").value);
    }
    document.getElementById("shape-border-color").onchange = function() {
        setShapeBorderColor(getCurrentShape(), document.getElementById("shape-border-color").value);
    }
    document.getElementById("shape-border-width").onchange = function() {
        setShapeBorderWidth(getCurrentShape(), document.getElementById("shape-border-width").value);
    }
    /*set circle position */
    document.getElementById("circleRadius").onchange = function() {
        circle.setRadius(document.getElementById("circleRadius").value);
        circle.draw();
    }
    document.getElementById("circle-pos-x").onchange = function() {
        setShapePosX(circle, document.getElementById("circle-pos-x").value);
    }
    document.getElementById("circle-pos-y").onchange = function() {
        setShapePosY(circle, document.getElementById("circle-pos-y").value);
    }
    /*set rectangle parameters */
    document.getElementById("rectangle-width").onchange = function() {
        rectangle.setWidth(document.getElementById("rectangle-width").value);
        rectangle.draw();
}
    document.getElementById("rectangle-height").onchange = function() {
        rectangle.setHeight(document.getElementById("rectangle-height").value);
        rectangle.draw();
    }
    document.getElementById("rectangle-pos-x").onchange = function() {
        setShapePosX(rectangle, document.getElementById("rectangle-pos-x").value);
    }
    document.getElementById("rectangle-pos-y").onchange = function() {
        setShapePosY(rectangle, document.getElementById("rectangle-pos-y").value);
    }
    /*set triangle position*/
    document.getElementById("triangle-pos-x-1").onchange = function() {
        setTriangleVertexX(1, document.getElementById("triangle-pos-x-1").value);
    }
    document.getElementById("triangle-pos-y-1").onchange = function() {
        setTriangleVertexY(1, document.getElementById("triangle-pos-y-1").value);
    }
    document.getElementById("triangle-pos-x-2").onchange = function() {
        setTriangleVertexX(2, document.getElementById("triangle-pos-x-2").value);
    }
    document.getElementById("triangle-pos-y-2").onchange = function() {
        setTriangleVertexY(2, document.getElementById("triangle-pos-y-2").value);
    }
    document.getElementById("triangle-pos-x-3").onchange = function() {
        setTriangleVertexX(3, document.getElementById("triangle-pos-x-3").value);
    }
    document.getElementById("triangle-pos-y-3").onchange = function() {
        setTriangleVertexY(3, document.getElementById("triangle-pos-y-3").value);
    }
}
