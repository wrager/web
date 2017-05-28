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
             changeShapeProp('fill-color', circle, 'fillColor');
        }
        else if (type == 'Rectangle') {
            changeShapeProp('fill-color', rectangle, 'fillColor');
        }
        else if (type == 'Triangle') {
            changeShapeProp('fill-color', triangle, 'fillColor');
        }
    }

    document.getElementById('outline-color').onchange = function() {
        if (type == 'Circle') {
             changeShapeProp('outline-color', circle, 'borderColor');
        }
        else if (type == 'Rectangle') {
            changeShapeProp('outline-color', rectangle, 'borderColor');
        }
        else if (type == 'Triangle') {
            changeShapeProp('outline-color', triangle, 'borderColor');
        }
    }

    document.getElementById('outline-thickness').onchange = function() {
        if (type == 'Circle') {
             changeShapeProp('outline-thickness', circle, 'borderLine');
        }
        else if (type == 'Rectangle') {
            changeShapeProp('outline-thickness', rectangle, 'borderLine');
        }
        else if (type == 'Triangle') {
            changeShapeProp('outline-thickness', triangle, 'borderLine');
        }
    }

    document.getElementById('radius').onchange = function() {
        changeShapeProp('radius', circle, 'radius');
    };

    document.getElementById('center-x').onchange = function() {
        changeShapeProp('center-x', circle, 'centerX');
    };

    document.getElementById('center-y').onchange = function() {
        changeShapeProp('center-y', circle, 'centerY');
    };

    document.getElementById('lefttop-x').onchange = function() {
        changeShapeProp('lefttop-x', rectangle, 'leftTopX');
    };

    document.getElementById('lefttop-y').onchange = function() {
        changeShapeProp('lefttop-y', rectangle, 'leftTopY');
    };

    document.getElementById('width').onchange = function() {
        changeShapeProp('width', rectangle, 'width');
    };

    document.getElementById('height').onchange = function() {
        changeShapeProp('height', rectangle, 'height');
    };

    document.getElementById('a-x').onchange = function() {
        changeShapeProp('a-x', triangle, 'aX');
    };

    document.getElementById('a-y').onchange = function() {
        changeShapeProp('a-y', triangle, 'aY');
    };

    document.getElementById('b-x').onchange = function() {
        changeShapeProp('b-x', triangle, 'bX');
    };

    document.getElementById('b-y').onchange = function() {
        changeShapeProp('b-y', triangle, 'bY');
    };

    document.getElementById('c-x').onchange = function() {
        changeShapeProp('c-x', triangle, 'cX');
    };

    document.getElementById('c-y').onchange = function() {
        changeShapeProp('c-y', triangle, 'cY');
    };
}

function changeShapeProp(node: string, shape: Shape, val: string) {
    let element: any = document.getElementById(node);
    shape[val] = element.value;
    console.log(element.value);
    shape.draw();
}

function selectShape() {
    var select: any = document.getElementById("select-shape");
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
    clearCanvas(); 
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

function clearCanvas() {
    var c = <HTMLCanvasElement>document.getElementById("canvasShape");
    var ctx = c.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, 1000, 1000);
}

function clearChangedProps() {
    var changedFields = document.getElementsByClassName('changed-prop');
    for (var i = 0, len = changedFields.length; i < len; i++) {
        let element: any = changedFields.item(i);
        element.value = '';
    }
}