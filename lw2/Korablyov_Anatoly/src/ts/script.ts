(document.getElementById("clear_canvas") as HTMLElement).onclick = ClearCanvas;
(document.getElementById("select_shape") as HTMLSelectElement).onchange = SelectShape;
(document.getElementById("add_triangle") as HTMLElement).onclick = AddTriangle;
(document.getElementById("add_circle") as HTMLElement).onclick = AddCircle;
(document.getElementById("add_rectangle") as HTMLElement).onclick = AddRectangle;

function SelectShape()
{
    ResetMenu();
	const selector = document.getElementById("select_shape") as HTMLSelectElement;
	const value = selector.options[selector.selectedIndex].value;
    (document.getElementById(value + "_menu") as HTMLElement).style.display = "block";
}

function ResetMenu()
{
    (document.getElementById("circle_menu") as HTMLElement).style.display = "none";
    (document.getElementById("triangle_menu") as HTMLElement).style.display = "none";
    (document.getElementById("rectangle_menu") as HTMLElement).style.display = "none";
}



function AddTriangle() {

    this.triangle = new CTriangle();
    this.triangle.setX1((document.getElementById("triangle_x1") as HTMLInputElement).value);
    this.triangle.setX2((document.getElementById("triangle_x2") as HTMLInputElement).value);
    this.triangle.setX3((document.getElementById("triangle_x3") as HTMLInputElement).value);
    this.triangle.setY1((document.getElementById("triangle_y1") as HTMLInputElement).value);
    this.triangle.setY2((document.getElementById("triangle_y2") as HTMLInputElement).value);
    this.triangle.setY3((document.getElementById("triangle_y3") as HTMLInputElement).value);

    this.triangle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    this.triangle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);
    this.triangle.draw();
    (document.getElementById("figure") as HTMLElement).innerHTML = "Triangle";
    (document.getElementById("area") as HTMLElement).innerHTML = "Area: " + this.triangle.calculateArea();
    (document.getElementById("perimeter") as HTMLElement).innerHTML = "Perimeter: " + this.triangle.calculatePerimeter();

}

function AddCircle() {
    this.circle = new CCircle();
    this.circle.setX((document.getElementById("circ_centerX") as HTMLInputElement).value);
    this.circle.setY((document.getElementById("circ_centerY") as HTMLInputElement).value);
    this.circle.setRadius((document.getElementById("circ_radius") as HTMLInputElement).value);

	this.circle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    this.circle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);

    this.circle.draw();

    document.getElementById("figure").innerHTML = "Circle";
    document.getElementById("area").innerHTML = "Area: " + this.circle.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + this.circle.calculatePerimeter();

}

function AddRectangle() {
    this.rectangle = new CRectangle();

    this.rectangle.setX1((document.getElementById("rect_x1") as HTMLInputElement).value);
    this.rectangle.setY1((document.getElementById("rect_y1") as HTMLInputElement).value);
    this.rectangle.setX2((document.getElementById("rect_x2") as HTMLInputElement).value);
    this.rectangle.setY2((document.getElementById("rect_y2") as HTMLInputElement).value);

	this.rectangle.setFillColor((document.getElementById("shape_fill_color") as HTMLInputElement).value);
    this.rectangle.setBorderColor((document.getElementById("shape_border_color") as HTMLInputElement).value);
    
    this.rectangle.draw();

    document.getElementById("figure").innerHTML = "Rectangle";
    document.getElementById("area").innerHTML = "Area: " + this.rectangle.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + this.rectangle.calculatePerimeter();

}

function ClearCanvas() {
	this._canvas = document.getElementById("canvas") as HTMLCanvasElement;
    this._context = this._canvas.getContext('2d') as CanvasRenderingContext2D;
	this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);      

	document.getElementById("figure").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimeter").innerHTML = "";   
}
