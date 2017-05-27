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