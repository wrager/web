function Rectangle() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
}
Rectangle.prototype.__proto__ = Shape.prototype;
Rectangle.prototype.getX = function() {
    return this.x;
}
Rectangle.prototype.setX = function(value) {
    this.x = value;
}
Rectangle.prototype.getY = function() {
    return this.y;
}
Rectangle.prototype.setY = function(value) {
    this.y = value;
}
Rectangle.prototype.calculateArea = function() {
    return (this.width * this.height);
}
Rectangle.prototype.calculatePerimeter = function() {
    return 2 * (this.width + this.height);
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
Rectangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.drawText();
}


var rectangle = new Rectangle;