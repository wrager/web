function Triangle() {
    this.aX = 0;
    this.bX = 0;
    this.cX = 0;
    this.aY = 0;
    this.bY = 0;
    this.cY = 0;
}

Triangle.prototype.__proto__ = Shape.prototype;

Triangle.prototype.setAX = function(value) {
    this.aX = value;
}

Triangle.prototype.getAX = function() {
    return this.aX;
}

Triangle.prototype.setBX = function(value) {
    this.bX = value;
}

Triangle.prototype.getBX = function() {
    return this.bX;
}

Triangle.prototype.setCX = function(value) {
    this.cX = value;
}

Triangle.prototype.getCX = function() {
    return this.cX;
}

Triangle.prototype.setAY = function(value) {
    this.aY = value;
}

Triangle.prototype.getAY = function() {
    return this.aY;
}

Triangle.prototype.setBY = function(value) {
    this.bY = value;
}

Triangle.prototype.getBY = function() {
    return this.bY;
}

Triangle.prototype.setCY = function(value) {
    this.cY = value;
}

Triangle.prototype.getCY = function() {
    return this.cY;
}

Triangle.prototype.draw = function() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.beginPath();
    ctx.moveTo(this.aX, this.aY);
    ctx.lineTo(this.bX, this.bY);
    ctx.lineTo(this.cX, this.cY);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.borderColor;
    ctx.lineWidth = this.borderLine;
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    this.drawText();
}

Triangle.prototype.calculateArea = function() {
    var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
    var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
    var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
    var p2 = (a + b + c) / 2;
    var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
    return s;
}

Triangle.prototype.calculatePerimeter = function() {
    var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
    var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
    var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
    return (a + b + c);
}