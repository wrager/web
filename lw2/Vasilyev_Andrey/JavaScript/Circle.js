Circle = function (x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this.radius, 2));
}

Circle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this.radius);
}

Circle.prototype.draw = function(canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.arc(this.x, this.y ,this.radius,0,Math.PI*2,true);
    context.closePath();
    context.stroke();
    context.fill();    
}