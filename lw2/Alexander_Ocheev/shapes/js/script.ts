window.onload = function() {
    var triangle = new Triangle();
    var rectangle = new Rectangle();
    var circle = new Circle();

    changeField(triangle, rectangle, circle);

}

function changeField(triangle: Triangle, rectangle: Rectangle, circle: Circle) {
    var type = selectShape();

    document.getElementById("select-shape").onchange = function() {
        type = selectShape();
    }

    var elements = document.getElementsByClassName("changed-prop");

    for (let i: number = 0, len: number = elements.length; i < len; i++) {
        let node: string = elements.item(i).id;
        document.getElementById(node).onchange = function() {
            if (type == 'Triangle')
            {
                changeShapeProp(node, triangle, node);
            }
            else if (type == 'Rectangle')
            {
                changeShapeProp(node, rectangle, node);
            }
            else if (type == 'Circle')
            {
                changeShapeProp(node, circle, node);
            }
        }
        
    }
}

function changeShapeProp(node: string, shape: Shape, val: string) {
    if (shape[val] !== null) {
        let element: any = document.getElementById(node);
        shape[val] = element.value;
        shape.draw();
    }
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