Rectangle = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);

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
    context.rect(this.x, this.y ,this.width, this.height);
    context.fill();
    context.stroke();
    context.lineWidth = 5;
}