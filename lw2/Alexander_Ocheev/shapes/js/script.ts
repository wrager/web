window.onload = function() {
    changeField();

}

function changeField() {
    var shape = selectShape();

    document.getElementById("select-shape").onchange = function() {
        shape = selectShape();
    }

    var elements = document.getElementsByClassName("changed-prop");

    for (let i: number = 0, len: number = elements.length; i < len; i++) {
        let node: string = elements.item(i).id;
        document.getElementById(node).onchange = function() {
            changeShapeProp(node, shape, node);
        }
        
    }
}

function changeShapeProp(id: string, shape: Shape, fieldName: string) {
    if (shape[fieldName] !== null) {
        let element: any = document.getElementById(id);
        shape[fieldName] = element.value;
        shape.draw();
    }
}

function selectShape(): Shape {
    var select: any = document.getElementById("select-shape");
    var selected = select.options[select.selectedIndex].value;
    if (selected === "Triangle") {
        myOnSelect('triangle-props');
        return new Triangle();
    } else if (selected === "Circle") {
        myOnSelect('circle-props');
        return new Circle();
    } else if (selected === "Rectangle") {
        myOnSelect('rectangle-props');
        return new Rectangle();
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
    c = <HTMLCanvasElement>document.getElementById("canvasText");
    ctx = c.getContext("2d") as CanvasRenderingContext2D;
    ctx.clearRect(0, 0, 1000, 25);
}

function clearChangedProps() {
    var changedFields = document.getElementsByClassName('changed-prop');
    for (var i = 0, len = changedFields.length; i < len; i++) {
        let element: any = changedFields.item(i);
        element.value = '';
    }
}