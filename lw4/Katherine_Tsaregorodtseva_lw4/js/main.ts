let circle = new Circle();
let rectangle = new Rectangle();
let triangle = new Triangle();

function hide(className: string){
    const elements = document.getElementsByClassName(className)[0] as HTMLElement;
    elements.style.display = 'none';
}
function display(shapeName: string) {
    const elements = document.getElementsByClassName(shapeName + "Prop")[0] as HTMLElement;
    elements.style.display = 'block';
}

function clearPropInputValues() {
    let x = document.getElementsByTagName("input");
    for (let i = 0; i < x.length; i++) {
        x[i].value = '';
    }
}

function showParametersField(choosenShapeName: string) {
    hide("circleProp");
    hide("rectangleProp");
    hide("triangleProp");
    clearPropInputValues();
    display(choosenShapeName);
}

function setShapePosX(shape: string, x: number) {
    if (shape == "circle")
    {
        circle.setX(x);
        circle.draw();
    }
    else {
        rectangle.setX(x);
        rectangle.draw();
    }
}
function setShapePosY(shape: string, y: number) {
    if (shape == "circle")
    {
        circle.setY(y);
        circle.draw();
    }
    else {
        rectangle.setY(y);
        rectangle.draw();
    }
}
function setShapeFillColor(shape: string, fillColor: string) {
    if (shape == "circle"){
        circle.setFillColor(fillColor);
        circle.draw();
    }
    else if (shape == "rectangle"){
        rectangle.setFillColor(fillColor);
        rectangle.draw();
    }
    else{
        triangle.setFillColor(fillColor);
        triangle.draw();
    }
}
function setShapeBorderColor(shape: string, borderColor: string) {
    if (shape == "circle"){
        circle.setBorderColor(borderColor);
        circle.draw();
    }
    else if (shape == "rectangle"){
        rectangle.setBorderColor(borderColor);
        rectangle.draw();
    }
    else{
        triangle.setBorderColor(borderColor);
        triangle.draw();
    }
}
function setShapeBorderWidth(shape: string, value: number) {
    if (shape == "circle"){
        circle.setBorderWidth(value);
        circle.draw();
    }
    else if (shape == "rectangle"){
        rectangle.setBorderWidth(value);
        rectangle.draw();
    }
    else{
        triangle.setBorderWidth(value);
        triangle.draw();
    }
}
function setTriangleVertexX(index: number, value: number) {
    triangle.setX(index, value);
    triangle.draw();
}
function setTriangleVertexY(index: number, value: number) {
    triangle.setY(index, value);
    triangle.draw();
}

window.onload = function() {
     function getCurrentShape() {
        const elem: any = document.getElementById("select-shape");
        return elem.value;
    }
    function getValueById(id: string)
    {
        var el: any = document.getElementById(id);
        return el.value;
    };
    /*shape properties */
    (document.getElementById("select-shape") as HTMLElement).onchange = function(){
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        showParametersField(getValueById("select-shape"));
    };
    (document.getElementById("shape-fill-color") as HTMLElement).onchange = function() {
        setShapeFillColor(getCurrentShape(), getValueById("shape-fill-color"));
    };
    (document.getElementById("shape-border-color") as HTMLElement).onchange = function() {
        setShapeBorderColor(getCurrentShape(), getValueById("shape-border-color"));
    };
    (document.getElementById("shape-border-width") as HTMLElement).onchange = function() {
        setShapeBorderWidth(getCurrentShape(), getValueById("shape-border-width"));
    };
    /*set circle position */
    (document.getElementById("circleRadius") as HTMLElement).onchange = function() {
        circle.setRadius(getValueById("circleRadius"));
        circle.draw();
    };
    (document.getElementById("circle-pos-x") as HTMLElement).onchange = function() {
        setShapePosX("circle",getValueById("circle-pos-x"));
    };
    (document.getElementById("circle-pos-y") as HTMLElement).onchange = function() {
        setShapePosY("circle", getValueById("circle-pos-y"));
    };
    /*set rectangle parameters */
    (document.getElementById("rectangle-width") as HTMLElement).onchange = function() {
        rectangle.setWidth(getValueById("rectangle-width"));
        rectangle.draw();
};
    (document.getElementById("rectangle-height") as HTMLElement).onchange = function() {
        rectangle.setHeight(getValueById("rectangle-height"));
        rectangle.draw();
    };
    (document.getElementById("rectangle-pos-x") as HTMLElement).onchange = function() {
        setShapePosX("rectangle", getValueById("rectangle-pos-x"));
    };
    (document.getElementById("rectangle-pos-y") as HTMLElement).onchange = function() {
        setShapePosY("rectangle", getValueById("rectangle-pos-y"));
    };
    /*set triangle position*/
    (document.getElementById("triangle-pos-x-1") as HTMLElement).onchange = function() {
        setTriangleVertexX(1, getValueById("triangle-pos-x-1"));
    };
    (document.getElementById("triangle-pos-y-1") as HTMLElement).onchange = function() {
        setTriangleVertexY(1, getValueById("triangle-pos-y-1"));
    };
    (document.getElementById("triangle-pos-x-2") as HTMLElement).onchange = function() {
        setTriangleVertexX(2, getValueById("triangle-pos-x-2"));
    };
    (document.getElementById("triangle-pos-y-2") as HTMLElement).onchange = function() {
        setTriangleVertexY(2, getValueById("triangle-pos-y-2"));
    };
    (document.getElementById("triangle-pos-x-3") as HTMLElement).onchange = function() {
        setTriangleVertexX(3, getValueById("triangle-pos-x-3"));
    };
    (document.getElementById("triangle-pos-y-3") as HTMLElement).onchange = function() {
        setTriangleVertexY(3, getValueById("triangle-pos-y-3"));
    };
}
