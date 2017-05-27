function Circle() {
    this.radius = 0;
    this.centerX = 0;
    this.centerY = 0;
};

Circle.prototype.__proto__ = Shape.prototype;

Circle.prototype.setRadius = function(value) {
    this.radius = value;
}

Circle.prototype.getRadius = function() {
    return this.radius;
}

Circle.prototype.setCenterX = function(value) {
    this.centerX = value;
}

Circle.prototype.getCenterX = function() {
    return this.centerX;
}

Circle.prototype.setCenterY = function(value) {
    this.centerY = value;
}

Circle.prototype.getCenterY = function() {
    return this.centerY;
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
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.stroke();
    ctx.fill();

    this.drawText();
}
function Rectangle() {
    this.leftTopX = 0;
    this.leftTopY = 0;
    this.width = 0;
    this.height = 0;
}
Rectangle.prototype.__proto__ = Shape.prototype;

Rectangle.prototype.setLeftTopX = function(value) {
    this.leftTopX = value;
}

Rectangle.prototype.getLeftTopX = function() {
    return this.leftTopX;
}

Rectangle.prototype.setLeftTopY = function(value) {
    this.leftTopY = value;
}

Rectangle.prototype.getLeftTopY = function() {
    return this.leftTopY;
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

Rectangle.prototype.calculateArea = function() {
    return (this.width * this.height);
}

Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width * 1.0 + this.height * 1.0);
}

Rectangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.leftTopX, this.leftTopY, this.width, this.height);
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.strokeRect(this.leftTopX, this.leftTopY, this.width, this.height);
    this.drawText();
}
window.onload = function() {
    var triangle = new Triangle();
    var rectangle = new Rectangle();
    var circle = new Circle();

    var type = selectShape();

    document.getElementById('fill-color').onchange = function() {
        Shape.prototype.SetFillColor()
    }

    document.getElementById("select-shape").onchange = function() {
        type = selectShape();
    }

    document.getElementById('fill-color').onchange = function() {
        if (type == 'Circle') {
            circle.setFillColor(document.getElementById('fill-color').value);
            circle.draw();
        }
        if (type == 'Rectangle') {
            rectangle.setFillColor(document.getElementById('fill-color').value);
            rectangle.draw();
        }
        if (type == 'Triangle') {
            triangle.setFillColor(document.getElementById('fill-color').value);
            triangle.draw();
        }
    }

    document.getElementById('outline-color').onchange = function() {
        if (type == 'Circle') {
            circle.setBorderColor(document.getElementById('outline-color').value);
            circle.draw();
        }
        if (type == 'Rectangle') {
            rectangle.setBorderColor(document.getElementById('outline-color').value);
            rectangle.draw();
        }
        if (type == 'Triangle') {
            triangle.setBorderColor(document.getElementById('outline-color').value);
            triangle.draw();
        }
    }

    document.getElementById('outline-thickness').onchange = function() {
        if (type == 'Circle') {
            circle.setBorderWidth(document.getElementById('outline-thickness').value);
            circle.draw();
        }
        if (type == 'Rectangle') {
            rectangle.setBorderWidth(document.getElementById('outline-thickness').value);
            rectangle.draw();
        }
        if (type == 'Triangle') {
            triangle.setBorderWidth(document.getElementById('outline-thickness').value);
            triangle.draw();
        }
    }

    document.getElementById('radius').onchange = function() {
        circle.setRadius(document.getElementById('radius').value);
        circle.draw();
    };

    document.getElementById('center-x').onchange = function() {
        circle.setCenterX(document.getElementById('center-x').value);
        circle.draw();
    };

    document.getElementById('center-y').onchange = function() {
        circle.setCenterY(document.getElementById('center-y').value);
        circle.draw();
    };

    document.getElementById('lefttop-x').onchange = function() {
        rectangle.setLeftTopX(document.getElementById('lefttop-x').value);
        rectangle.draw();
    };

    document.getElementById('lefttop-y').onchange = function() {
        rectangle.setLeftTopY(document.getElementById('lefttop-y').value);
        rectangle.draw();
    };

    document.getElementById('width').onchange = function() {
        rectangle.setWidth(document.getElementById('width').value);
        rectangle.draw();
    };

    document.getElementById('height').onchange = function() {
        rectangle.setHeight(document.getElementById('height').value);
        rectangle.draw();
    };

    document.getElementById('a-x').onchange = function() {
        triangle.setAX(document.getElementById('a-x').value);
        triangle.draw();
    };

    document.getElementById('a-y').onchange = function() {
        triangle.setAY(document.getElementById('a-y').value);
        triangle.draw();
    };

    document.getElementById('b-x').onchange = function() {
        triangle.setBX(document.getElementById('b-x').value);
        triangle.draw();
    };

    document.getElementById('b-y').onchange = function() {
        triangle.setBY(document.getElementById('b-y').value);
        triangle.draw();
    };

    document.getElementById('c-x').onchange = function() {
        triangle.setCX(document.getElementById('c-x').value);
        triangle.draw();
    };

    document.getElementById('c-y').onchange = function() {
        triangle.setCY(document.getElementById('c-y').value);
        triangle.draw();
    };
}

function selectShape() {
    var select = document.getElementById("select-shape")
    var selected = select.options[select.selectedIndex].value;
    if (selected === "Triangle") {
        myOnSelect('triangle-props');
    } else if (selected === "Circle") {
        myOnSelect('circle-props');
    } else if (selected === "Rectangle") {
        myOnSelect('rectangle-props');
    }
    return selected;
}

function myOnSelect(inpId) {
    makeVisible(inpId);
    clearChangedProps();
}

function makeVisible(inpId) {
    var ids = ['rectangle-props', 'circle-props', 'triangle-props'];
    ids.forEach(function(element) {
        var el = document.getElementById(element);
        if (inpId == element) {
            el.style.visibility = 'visible';
            el.style.display = 'block';
        } else {
            el.style.visibility = 'hidden';
            el.style.display = 'none';
        }
    }, this);
}

function clearChangedProps() {
    var changedFields = document.getElementsByClassName('changed-prop');
    for (var i = 0, len = changedFields.length; i < len; i++) {
        changedFields.item(i).value = '';
    }
}
function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
    this.borderLine = 1;
};

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

Shape.prototype.setBorderWidth = function(value) {
    this.borderLine = value;
};

Shape.prototype.getBorderWidth = function() {
    return this.borderLine;
};

Shape.prototype.draw = function() {};

Shape.prototype.calculateArea = function() {};

Shape.prototype.calculatePerimeter = function() {};

Shape.prototype.drawText = function() {
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
    var s = this.calculateArea().toFixed(2);
    var p = this.calculatePerimeter().toFixed(2);
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
    this.aX = 0;
    this.bX = 0;
    this.cX = 0;
    this.aY = 0;
    this.bY = 0;
    this.cY = 0;
}

Triangle.prototype.__proto__ = Shape.prototype;

Triangle.prototype.setAX = function(value) {
    this.aX = value;
}

Triangle.prototype.getAX = function() {
    return this.aX;
}

Triangle.prototype.setBX = function(value) {
    this.bX = value;
}

Triangle.prototype.getBX = function() {
    return this.bX;
}

Triangle.prototype.setCX = function(value) {
    this.cX = value;
}

Triangle.prototype.getCX = function() {
    return this.cX;
}

Triangle.prototype.setAY = function(value) {
    this.aY = value;
}

Triangle.prototype.getAY = function() {
    return this.aY;
}

Triangle.prototype.setBY = function(value) {
    this.bY = value;
}

Triangle.prototype.getBY = function() {
    return this.bY;
}

Triangle.prototype.setCY = function(value) {
    this.cY = value;
}

Triangle.prototype.getCY = function() {
    return this.cY;
}

Triangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.moveTo(this.aX, this.aY);
    ctx.lineTo(this.bX, this.bY);
    ctx.lineTo(this.cX, this.cY);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    this.drawText();
}

Triangle.prototype.calculateArea = function() {
    var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
    var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
    var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
    var p2 = (a + b + c) / 2;
    var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
    return s;
}

Triangle.prototype.calculatePerimeter = function() {
    var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
    var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
    var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
    return (a + b + c);
}