function SelectShape(value) {
    ResetMenu();
    document.getElementById(value + "_menu").style.display = "block";
}

function ResetMenu() {
    document.getElementById("circle_menu").style.display = "none";
    document.getElementById("triangle_menu").style.display = "none";
    document.getElementById("rectangle_menu").style.display = "none";
}

function AddTriangle() {
    this.triangle = new Triangle();
    this.triangle.setX1(document.getElementById("triangle_x1").value);
    this.triangle.setX2(document.getElementById("triangle_x2").value);
    this.triangle.setX3(document.getElementById("triangle_x3").value);
    this.triangle.setY1(document.getElementById("triangle_y1").value);
    this.triangle.setY2(document.getElementById("triangle_y2").value);
    this.triangle.setY3(document.getElementById("triangle_y3").value);
    AddShape(this.triangle);
}

function AddCircle() {
    this.circle = new Circle();
    this.circle.setX(document.getElementById("circ_centerX").value);
    this.circle.setY(document.getElementById("circ_centerY").value);
    this.circle.setRadius(document.getElementById("circ_radius").value);
    AddShape(this.circle);
}

function AddRectangle() {
    this.rectangle = new Rectangle();
    this.rectangle.setX1(document.getElementById("rect_x1").value);
    this.rectangle.setY1(document.getElementById("rect_y1").value);
    this.rectangle.setX2(document.getElementById("rect_x2").value);
    this.rectangle.setY2(document.getElementById("rect_y2").value);
    AddShape(this.rectangle);
}

function AddShape(shape) {
    shape.setFillColor(document.getElementById("shape_fill_color").value);
    shape.setBorderColor(document.getElementById("shape_border_color").value);
    shape.draw();
    document.getElementById("figure").innerHTML = shape.getShapeName();
    document.getElementById("area").innerHTML = "Area: " + shape.calculateArea();
    document.getElementById("perimeter").innerHTML = "Perimeter: " + shape.calculatePerimeter();
}

function ClearCanvas() {
    this._canvas = document.getElementById("canvas");
    this._context = this.canvas.getContext('2d');
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

    document.getElementById("figure").innerHTML = "";
    document.getElementById("area").innerHTML = "";
    document.getElementById("perimeter").innerHTML = "";
}