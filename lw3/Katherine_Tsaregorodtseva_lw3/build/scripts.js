function Circle() {
    this.radius = 0;
    this.center_x = 0;
    this.center_y = 0;
}

Circle.prototype.__proto__ = Shape.prototype;
Circle.prototype.setRadius = function(value) {
    this.radius = value;
}
Circle.prototype.getRadius = function() {
    return this.radius;
}
Circle.prototype.getX = function() {
    return this.center_x;
}
Circle.prototype.setX = function(value) {
    this.center_x = value;
}
Circle.prototype.getY = function() {
    return this.center_y;
}
Circle.prototype.setY = function(value) {
    this.center_y = value;
}
Circle.prototype.calculateArea = function() {
    return (Math.PI * this.radius * this.radius);
}
Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.stroke();
    ctx.fill();

    this.drawText();
}


var circle = new Circle;
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

function Rectangle() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
}
Rectangle.prototype.__proto__ = Shape.prototype;
Rectangle.prototype.getX = function() {
    return this.x;
}
Rectangle.prototype.setX = function(value) {
    this.x = value;
}
Rectangle.prototype.getY = function() {
    return this.y;
}
Rectangle.prototype.setY = function(value) {
    this.y = value;
}
Rectangle.prototype.calculateArea = function() {
    return (this.width * this.height);
}
Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width + this.height);
}
Rectangle.prototype.setWidth = function(value) {
    this.width = value;
}
Rectangle.prototype.getWidth = function() {
    return this.width;
}
Rectangle.prototype.setHeight = function(value) {
    return this.height = value;
}
Rectangle.prototype.getHeight = function() {
    return this.height;
}
Rectangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.drawText();
}


var rectangle = new Rectangle;
function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
    this.borderLine = 1;
}

Shape.prototype.setFillColor = function(value) {
    this.fillColor = value;
};
Shape.prototype.getFillColor = function() {
    return this.fillColor;
};
    
Shape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};
    
Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};

Shape.prototype.draw = function() {
};
Shape.prototype.setBorderWidth = function(value) {
    this.borderLine = value;
};
Shape.prototype.getBorderWidth = function() {
    return this.borderLine;
};
Shape.prototype.drawText = function()
{
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
    var s = this.calculateArea().toFixed(2);
    var p = this.calculatePerimeter().toFixed(2);
    ctx.font = "15px Segoe UI";
    ctx.fillText('S : ' + s + ', P : ' + p, 10, 20);
    drawDelimiter();
};

function drawDelimiter() {
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 25);
    ctx.lineTo(1000, 25);
    ctx.stroke();
}
function Triangle() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.x3 = 0;
    this.y3 = 0;
}
Triangle.prototype.__proto__ = Shape.prototype;

Triangle.prototype.getVertex = function(index) {
    switch (index) {
        case 1:
            return this.vert1;
        case 2:
            return this.vert2;
        case 3:
            return this.vert3;
        default:
            return undefined;
    }
}

Triangle.prototype.setX = function(index, X) {
    switch (index) {
        case 1:
            this.x1 = X;
            break;
        case 2:
            this.x2 = X;
            break;
        case 3:
            this.x3 = X;
            break;
    }
}
Triangle.prototype.setY = function(index, Y) {
    switch (index) {
        case 1:
            this.y1 = Y;
            break;
        case 2:
            this.y2 = Y;
            break;
        case 3:
            this.y3 = Y;
            break;
    }

}
Triangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.lineTo(this.x3,this.y3);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    this.drawText();
}

Triangle.prototype.calculateArea = function() {
    var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
    var p2 = (a + b + c) / 2;
    var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
    return s;
}
Triangle.prototype.calculatePerimeter = function() {
    var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
    return (a + b + c);
}

function setTriangleVertexX(index, value) {
    triangle.setX(index, value);
    triangle.draw();
}
function setTriangleVertexY(index, value) {
    triangle.setY(index, value);
    triangle.draw();
}


var triangle = new Triangle;