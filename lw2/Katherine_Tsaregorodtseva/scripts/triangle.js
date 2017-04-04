function Triangle() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = 0;
    this.y2 = 0;
    this.x3 = 0;
    this.y3 = 0;
}
Triangle.prototype.__proto__ = Shape.prototype;

Triangle.prototype.getVertex = function(index) {
    switch (index) {
        case 1:
            return this.vert1;
        case 2:
            return this.vert2;
        case 3:
            return this.vert3;
        default:
            return undefined;
    }
}

Triangle.prototype.setX = function(index, X) {
    switch (index) {
        case 1:
            this.x1 = X;
            break;
        case 2:
            this.x2 = X;
            break;
        case 3:
            this.x3 = X;
            break;
    }
}
Triangle.prototype.setY = function(index, Y) {
    switch (index) {
        case 1:
            this.y1 = Y;
            break;
        case 2:
            this.y2 = Y;
            break;
        case 3:
            this.y3 = Y;
            break;
    }

}
Triangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.moveTo(this.x1,this.y1);
    ctx.lineTo(this.x2,this.y2);
    ctx.lineTo(this.x3,this.y3);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    this.drawText();
}

Triangle.prototype.calculateArea = function() {
    var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
    var p2 = (a + b + c) / 2;
    var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
    return s;
}
Triangle.prototype.calculatePerimeter = function() {
    var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
    var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
    var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
    return (a + b + c);
}

function setTriangleVertexX(index, value) {
    triangle.setX(index, value);
    triangle.draw();
}
function setTriangleVertexY(index, value) {
    triangle.setY(index, value);
    triangle.draw();
}


var triangle = new Triangle;