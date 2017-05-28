window.onload = function() {
    var triangle = new Triangle();
    var rectangle = new Rectangle();
    var circle = new Circle();

    var type = selectShape();

    document.getElementById("select-shape").onchange = function() {
        type = selectShape();
    }

    document.getElementById('fill-color').onchange = function() {
        if (type == 'Circle') {
            let element: any = document.getElementById('fill-color');
            circle.fillColor = element.value;
            circle.draw();
        }
        else if (type == 'Rectangle') {
            let element: any = document.getElementById('fill-color');
            rectangle.fillColor = element.value;
            rectangle.draw();
        }
        else if (type == 'Triangle') {
            let element: any = document.getElementById('fill-color');
            triangle.fillColor = element.value;
            triangle.draw();
        }
    }

    document.getElementById('outline-color').onchange = function() {
        if (type == 'Circle') {
            let element: any = document.getElementById('outline-color');
            circle.borderColor = element.value;
            circle.draw();
        }
        if (type == 'Rectangle') {
            let element: any = document.getElementById('outline-color');
            rectangle.borderColor = element.value; 
            rectangle.draw();
        }
        if (type == 'Triangle') {
            let element: any = document.getElementById('outline-color');
            triangle.borderColor = element.value;
            triangle.draw();
        }
    }

    document.getElementById('outline-thickness').onchange = function() {
        if (type == 'Circle') {
            let element: any = document.getElementById('outline-thickness');
            circle.borderLine = element.value;
            circle.draw();
        }
        if (type == 'Rectangle') {
            let element: any = document.getElementById('outline-thickness');
            rectangle.borderLine = element.value;
            rectangle.draw();
        }
        if (type == 'Triangle') {
            let element: any = document.getElementById('outline-thickness');
            triangle.borderLine = element.value;
            triangle.draw();
        }
    }

    document.getElementById('radius').onchange = function() {
        let element: any = document.getElementById('radius');
        circle.radius = element.value;
        circle.draw();
    };

    document.getElementById('center-x').onchange = function() {
        let element: any = document.getElementById('center-x');
        circle.centerX = element.value;
        circle.draw();
    };

    document.getElementById('center-y').onchange = function() {
        let element: any = document.getElementById('center-y');
        circle.centerY = element.value;
        circle.draw();
    };

    document.getElementById('lefttop-x').onchange = function() {
        let element: any = document.getElementById('lefttop-x');
        rectangle.leftTopX = element.value;
        rectangle.draw();
    };

    document.getElementById('lefttop-y').onchange = function() {
        let element: any = document.getElementById('lefttop-y');
        rectangle.leftTopY = element.value;
        rectangle.draw();
    };

    document.getElementById('width').onchange = function() {
        let element: any = document.getElementById('width');
        rectangle.width = element.value;
        rectangle.draw();
    };

    document.getElementById('height').onchange = function() {
        let element: any = document.getElementById('height');
        rectangle.height = element.value;
        rectangle.draw();
    };

    document.getElementById('a-x').onchange = function() {
        let element: any = document.getElementById('a-x');
        triangle.aX = element.value;
        triangle.draw();
    };

    document.getElementById('a-y').onchange = function() {
        let element: any = document.getElementById('a-y')
        triangle.aY = element.value;
        triangle.draw();
    };

    document.getElementById('b-x').onchange = function() {
        let element: any = document.getElementById('b-x')
        triangle.bX = element.value;
        triangle.draw();
    };

    document.getElementById('b-y').onchange = function() {
        let element: any = document.getElementById('b-y');
        triangle.bY = element.value;
        triangle.draw();
    };

    document.getElementById('c-x').onchange = function() {
        let element: any = document.getElementById('c-x')
        triangle.cX = element.value;
        triangle.draw();
    };

    document.getElementById('c-y').onchange = function() {
        let element: any = document.getElementById('c-y');
        triangle.cY = element.value;
        triangle.draw();
    };
}

function selectShape() {
    var select: any = document.getElementById("select-shape")
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
        let element: any = changedFields.item(i);
        element.value = '';
    }
}