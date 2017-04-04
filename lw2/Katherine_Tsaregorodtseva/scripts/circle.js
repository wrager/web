function Circle() {
    this.radius = 0;
    this.center_x = 0;
    this.center_y = 0;
};

Circle.prototype.__proto__ = Shape.prototype;
Circle.prototype.setRadius = function(value) {
    this.radius = value;
}
Circle.prototype.getRadius = function() {
    return this.radius;
}
Circle.prototype.getX = function() {
    return this.center_x;
}
Circle.prototype.setX = function(value) {
    this.center_x = value;
}
Circle.prototype.getY = function() {
    return this.center_y;
}
Circle.prototype.setY = function(value) {
    this.center_y = value;
}
Circle.prototype.calculateArea = function() {
    return (Math.PI * this.radius * this.radius);
}
Circle.prototype.calculatePerimeter = function() {
    return 2 * Math.PI * this.radius;
}
Circle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.stroke();
    ctx.fill();

    this.drawText();
}
function setCircleRadiusAndDraw(circle, radius) {
    circle.setRadius(radius);
    circle.draw();
}

var circle = new Circle;