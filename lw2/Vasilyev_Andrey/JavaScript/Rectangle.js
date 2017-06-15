function Rectangle() {
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.x = 0;
Rectangle.prototype.y = 0;
Rectangle.prototype.width = 0;
Rectangle.prototype.height = 0;


Rectangle.prototype.getX = function () {
    return this.x;
}

Rectangle.prototype.getY = function () {
    return this.Y;
}

Rectangle.prototype.getWidth = function () {
    return this.Width;
}

Rectangle.prototype.getHeight = function () {
    return this.height;
}

Rectangle.prototype.setX = function (value) {
    this.x = value;
}

Rectangle.prototype.setY = function (value) {
    this.y = value;
}

Rectangle.prototype.setWidth = function (value) {
    this.width = value;
}

Rectangle.prototype.setHeight = function (value) {
    this.height = value;
}

Rectangle.prototype.calculateArea = function () {
    return this.width * this.height;
}

Rectangle.prototype.calculatePerimeter = function () {
    return this.width + this.height + this.width + this.height;
}

Rectangle.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.rect(this.x, this.y ,this.width, this.height);
    context.closePath();
    context.fill();
    context.stroke();
}