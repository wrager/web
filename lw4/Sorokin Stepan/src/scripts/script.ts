let selectShape: HTMLSelectElement;
selectShape = document.getElementById("select_shape") as HTMLSelectElement;
selectShape.onchange = SelectShape;

let addTriangle: HTMLSelectElement;
addTriangle = document.getElementById("add_triangle") as HTMLSelectElement;
addTriangle.onclick = AddTriangle;

let addCircle: HTMLSelectElement;
addCircle = document.getElementById("add_circle") as HTMLSelectElement;
addCircle.onclick = AddCircle;

let addRectangle: HTMLSelectElement;
addRectangle = document.getElementById("add_rectangle") as HTMLSelectElement;
addRectangle.onclick = AddRectangle;

let clearCanvas: HTMLSelectElement;
clearCanvas = document.getElementById("clear_canvas") as HTMLSelectElement;
clearCanvas.onclick = ClearCanvas;

let circle: Circle;
let rectangle: Rectangle;
let triangle: Triangle;

function SelectShape() {
    ResetMenu();
    const selector = document.getElementById("select_shape") as HTMLSelectElement;
    const value = selector.options[selector.selectedIndex].value;
    (document.getElementById(value + "_menu") as HTMLElement).style.display = "block";
}

function ResetMenu() {
    (document.getElementById("circle_menu") as HTMLElement).style.display = "none";
    (document.getElementById("triangle_menu") as HTMLElement).style.display = "none";
    (document.getElementById("rectangle_menu") as HTMLElement).style.display = "none";
}
function AddTriangle() {

    triangle = new Triangle();
    triangle.setX1(parseInt((document.getElementById("triangle_x1") as HTMLInputElement).value, 10));
    triangle.setX2(parseInt((document.getElementById("triangle_x2") as HTMLInputElement).value, 10));
    triangle.setX3(parseInt((document.getElementById("triangle_x3") as HTMLInputElement).value, 10));
    triangle.setY1(parseInt((document.getElementById("triangle_y1") as HTMLInputElement).value, 10));
    triangle.setY2(parseInt((document.getElementById("triangle_y2") as HTMLInputElement).value, 10));
    triangle.setY3(parseInt((document.getElementById("triangle_y3") as HTMLInputElement).value, 10));

    AddShape(triangle);
}

function AddCircle() {
    circle = new Circle();
    circle.setX(parseInt((document.getElementById("circ_centerX") as HTMLInputElement).value, 10));
    circle.setY(parseInt((document.getElementById("circ_centerY") as HTMLInputElement).value, 10));
    circle.setRadius(parseInt((document.getElementById("circ_radius") as HTMLInputElement).value, 10));

    AddShape(circle);
}

function AddRectangle() {
    rectangle = new Rectangle();

    rectangle.setX1(parseInt((document.getElementById("rect_x1") as HTMLInputElement).value, 10));
    rectangle.setY1(parseInt((document.getElementById("rect_y1") as HTMLInputElement).value, 10));
    rectangle.setX2(parseInt((document.getElementById("rect_x2") as HTMLInputElement).value, 10));
    rectangle.setY2(parseInt((document.getElementById("rect_y2") as HTMLInputElement).value, 10));

    AddShape(rectangle);
}

function AddShape(shape: any) {
    shape.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    shape.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);
    shape.draw();
    document.getElementById("figure").innerHTML = shape.getShapeName;
    document.getElementById("area").innerHTML = "Area: " + shape.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + shape.calculatePerimeter();
}

function ClearCanvas() {
    this._canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    document.getElementById("figure").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimeter").innerHTML = "";
}
