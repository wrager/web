
Shape = function () {
    return this;
}

Shape.prototype.borderColor = "#000000";
Shape.prototype.fillColor = "#FFFFFF";

Shape.prototype.setFillColor = function (value) {
    this.fillColor = value;
};
Shape.prototype.setBorderColor = function (value) {
    this.borderColor = value;
};
Shape.prototype.getFillColor = function () {
    return this.fillColor;
};
Shape.prototype.getBorderColor = function () {
    return this.borderColor;
};

Circle = function (x, y, radius) {
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.radius, 2));
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.radius);
}

Circle.prototype.draw = function(canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.arc(this.x, this.y ,this.radius,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();    
}

Triangle = function (x1, y1, x2, y2, x3, y3) {
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.calculateArea = function () {
    return Math.abs((this.x1 - this.x3)*(this.y2 - this.y3) - (this.x2 - this.x3)*(this.y1 - this.y3)) * 0.5;
}

Triangle.prototype.calculatePerimeter = function () {
    length1 = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x2),2) + Math.pow(Math.abs(this.y1 - this.y2),2));
    length2 = Math.sqrt(Math.pow(Math.abs(this.x2 - this.x3),2) + Math.pow(Math.abs(this.y2 - this.y3),2));
    length3 = Math.sqrt( Math.pow(Math.abs(this.x1 - this.x3),2) + Math.pow(Math.abs(this.y1 - this.y3),2));
    return length1 + length2 + length3;
}

Triangle.prototype.draw = function(canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.moveTo(this.x1, this.y2);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.x3, this.y3);
    context.closePath();
    context.fill();
    context.stroke();
}

Rectangle = function (x, y, width, height) {
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
}

Rectangle.prototype.calculatePerimeter = function () {
    return this.width + this.height + this.width + this.height;
}

Rectangle.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.rect(this.x, this.y ,this.width, this.height);
    context.fill();
    context.stroke();
    context.lineWidth = 5;
}

onSelectShapeType = function () {
    e = document.getElementById("selectShape");
    e.addEventListener('change', function () {
            'use strict';
            var vis = document.querySelector('.vis'),
                target = document.getElementById(this.value);
            if (vis !== null) {
                vis.className = 'depending-content';
            }
            if (target !== null) {
                target.className = 'vis';
            }
        });
}

onClickCalculateResult = function () {
    e = document.getElementById("selectShape");
    var myShape;
    switch (e.options[e.selectedIndex].text) {
        case "Окружность":
            var x = parseInt(document.getElementById("circle-x").value);
            var y = parseInt(document.getElementById('circle-y').value);
            var radius = parseInt(document.getElementById('circle-radius').value);
            
            myShape = new Circle(x, y, radius);
            break;
        case "Прямоугольник":
            var x = parseInt(document.getElementById("rectangle-x").value);
            var y = parseInt(document.getElementById('rectangle-y').value);
            var width = parseInt(document.getElementById('rectangle-width').value);
            var height = parseInt(document.getElementById('rectangle-height').value);

            myShape = new Rectangle(x, y, width, height);
            break;
        case "Треугольник":
            var x1 = parseInt(document.getElementById("triangle-x1").value);
            var y1 = parseInt(document.getElementById("triangle-y1").value);
            var x2 = parseInt(document.getElementById("triangle-x2").value);
            var y2 = parseInt(document.getElementById("triangle-y2").value);
            var x3 = parseInt(document.getElementById("triangle-x3").value);
            var y3 = parseInt(document.getElementById("triangle-y3").value);
            
            myShape = new Triangle(x1, y1, x2, y2, x3, y3);
            break;
        default:
            alert("Error: Undefined shape type.");
            break;
    };

    var resArea = myShape.calculateArea();
    var resPerimeter = myShape.calculatePerimeter();
    alert("Area is: " + resArea + '\n' + "Perimeter is: " + resPerimeter);
    

    var fillColor = document.getElementById('fill-color');
    var borderColor = document.getElementById('border-color');
    if(fillColor && fillColor.value) {
        alert("setFillColor");
        myShape.setFillColor(fillColor.value);
    }
    if(borderColor && borderColor.value) {
        alert('setBorderColor');
        myShape.setBorderColor(borderColor.value);
    }
    alert("KEK3");
    canvas = document.getElementById('canvas');

    if(canvas && canvas.getContext == false) {
        return;
    }

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    myShape.draw(canvas);
}