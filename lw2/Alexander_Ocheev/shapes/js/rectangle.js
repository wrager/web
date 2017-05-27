function Rectangle() {
    this.leftTopX = 0;
    this.leftTopY = 0;
    this.width = 0;
    this.height = 0;
}
Rectangle.prototype.__proto__ = Shape.prototype;

Rectangle.prototype.setLeftTopX = function(value) {
    this.leftTopX = value;
}

Rectangle.prototype.getLeftTopX = function() {
    return this.leftTopX;
}

Rectangle.prototype.setLeftTopY = function(value) {
    this.leftTopY = value;
}

Rectangle.prototype.getLeftTopY = function() {
    return this.leftTopY;
}

Rectangle.prototype.setWidth = function(value) {
    this.width = value;
}

Rectangle.prototype.getWidth = function() {
    return this.width;
}

Rectangle.prototype.setHeight = function(value) {
    return this.height = value;
}

Rectangle.prototype.getHeight = function() {
    return this.height;
}

Rectangle.prototype.calculateArea = function() {
    return (this.width * this.height);
}

Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width * 1.0 + this.height * 1.0);
}

Rectangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.leftTopX, this.leftTopY, this.width, this.height);
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.strokeRect(this.leftTopX, this.leftTopY, this.width, this.height);
    this.drawText();
}