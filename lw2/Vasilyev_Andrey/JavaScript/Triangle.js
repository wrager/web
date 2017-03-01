
Triangle = function (x1, y1, x2, y2, x3, y3) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.calculateArea = function () {
    return Math.abs((this.x1 - this.x3)*(this.y2 - this.y3) - (this.x2 - this.x3)*(this.y1 - this.y3)) * 0.5;
}

Triangle.prototype.calculatePerimeter = function () {
    length1 = Math.sqrt(Math.pow(Math.abs(this.x1 - this.x2),2) + Math.pow(Math.abs(this.y1 - this.y2),2));
    length2 = Math.sqrt(Math.pow(Math.abs(this.x2 - this.x3),2) + Math.pow(Math.abs(this.y2 - this.y3),2));
    length3 = Math.sqrt( Math.pow(Math.abs(this.x1 - this.x3),2) + Math.pow(Math.abs(this.y1 - this.y3),2));
    return length1 + length2 + length3;
}

Triangle.prototype.draw = function(canvas) {
    var context = canvas.getContext('2d');
    context.strokeStyle = this.borderColor;
    context.fillStyle = this.fillColor;
    context.beginPath();
    context.moveTo(this.x1, this.y2);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.x3, this.y3);
    context.closePath();
    context.fill();
    context.stroke();
}