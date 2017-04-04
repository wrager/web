function Shape() {
    this.fillColor = "#000000";
    this.borderColor = "#000000";
    this.borderLine = 1;
};

Shape.prototype.setFillColor = function(value) {
    this.fillColor = value;
};
Shape.prototype.getFillColor = function() {
    return this.fillColor;
};
    
Shape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};
    
Shape.prototype.getBorderColor = function() {
    return this.borderColor;
};

Shape.prototype.draw = function() {
};
Shape.prototype.setBorderWidth = function(value) {
    this.borderLine = value;
};
Shape.prototype.getBorderWidth = function() {
    return this.borderLine;
};
Shape.prototype.drawText = function()
{
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
    var s = this.calculateArea().toFixed(2);
    var p = this.calculatePerimeter().toFixed(2);
    ctx.font = "15px Segoe UI";
    ctx.fillText('S : ' + s + ', P : ' + p, 10, 20);
    drawDelimiter();
};

function drawDelimiter() {
    var c = document.getElementById("canvasText");
    var ctx = c.getContext("2d");
    ctx.moveTo(0, 25);
    ctx.lineTo(1000, 25);
    ctx.stroke();
}