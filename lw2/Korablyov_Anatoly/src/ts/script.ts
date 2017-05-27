(document.getElementById("select_shape") as HTMLSelectElement).onchange = SelectShape;
(document.getElementById("add_triangle") as HTMLElement).onclick = AddTriangle;
(document.getElementById("add_circle") as HTMLElement).onclick = AddCircle;
(document.getElementById("add_rectangle") as HTMLElement).onclick = AddRectangle;
(document.getElementById("clear_canvas") as HTMLElement).onclick = ClearCanvas;

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

    triangle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    triangle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);
    triangle.draw();
    (document.getElementById("figure") as HTMLElement).innerHTML = "Triangle";
    (document.getElementById("area") as HTMLElement).innerHTML = "Area: " + triangle.calculateArea();
    (document.getElementById("perimeter") as HTMLElement).innerHTML = "P=: " + triangle.calculatePerimeter();

}

function AddCircle() {
    circle = new Circle();
    circle.setX(parseInt((document.getElementById("circ_centerX") as HTMLInputElement).value, 10));
    circle.setY(parseInt((document.getElementById("circ_centerY") as HTMLInputElement).value, 10));
    circle.setRadius(parseInt((document.getElementById("circ_radius") as HTMLInputElement).value, 10));

    circle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    circle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);

    circle.draw();

    document.getElementById("figure").innerHTML = "Circle";
    document.getElementById("area").innerHTML = "Area: " + circle.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + circle.calculatePerimeter();

}

function AddRectangle() {
    rectangle = new Rectangle();

    rectangle.setX1(parseInt((document.getElementById("rect_x1") as HTMLInputElement).value, 10));
    rectangle.setY1(parseInt((document.getElementById("rect_y1") as HTMLInputElement).value, 10));
    rectangle.setX2(parseInt((document.getElementById("rect_x2") as HTMLInputElement).value, 10));
    rectangle.setY2(parseInt((document.getElementById("rect_y2") as HTMLInputElement).value, 10));

    rectangle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    rectangle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);

    rectangle.draw();

    document.getElementById("figure").innerHTML = "Rectangle";
    document.getElementById("area").innerHTML = "Area: " + rectangle.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + rectangle.calculatePerimeter();

}

function ClearCanvas() {
    this._canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this._context = this._canvas.getContext("2d") as CanvasRenderingContext2D;
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    document.getElementById("figure").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimeter").innerHTML = "";
}
