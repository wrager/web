function Circle() {
    this.radius = 0;
    this.centerX = 0;
    this.centerY = 0;
};

Circle.prototype.__proto__ = Shape.prototype;

Circle.prototype.setRadius = function(value) {
    this.radius = value;
}

Circle.prototype.getRadius = function() {
    return this.radius;
}

Circle.prototype.setCenterX = function(value) {
    this.centerX = value;
}

Circle.prototype.getCenterX = function() {
    return this.centerX;
}

Circle.prototype.setCenterY = function(value) {
    this.centerY = value;
}

Circle.prototype.getCenterY = function() {
    return this.centerY;
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
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.stroke();
    ctx.fill();

    this.drawText();
}