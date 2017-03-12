function Triangle() {
    Shape.apply(this, arguments);
    this._firstVertex = new Point();
    this._secondVertex = new Point();
    this._thirdVertex = new Point();
}
extend(Triangle, Shape);

Triangle.prototype.setFirstVertex = function (firstVertex) {
    this._firstVertex = firstVertex;
}

Triangle.prototype.setSecondVertex = function (secondVertex) {
    this._secondVertex = secondVertex;
}

Triangle.prototype.setThirdVertex = function (thirdVertex) {
    this._thirdVertex = thirdVertex;
}

Triangle.prototype.getLineSegmentLength = function (point1, point2) {
    return Math.sqrt(Math.pow(point2._x - point1._x, 2) + (Math.pow(point2._y - point1._y, 2)));
}

Triangle.prototype.getSides = function () {
    var line1 = this.getLineSegmentLength(this._firstVertex, this._secondVertex);
    var line2 = this.getLineSegmentLength(this._firstVertex, this._thirdVertex);
    var line3 = this.getLineSegmentLength(this._secondVertex, this._thirdVertex);

    return [line1, line2, line3];
}

Triangle.prototype.draw = function (context) {
    context.beginPath();
    context.moveTo(this._firstVertex._x, this._firstVertex._y);
    context.lineTo(this._secondVertex._x, this._secondVertex._y);
    context.lineTo(this._thirdVertex._x, this._thirdVertex._y);
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Triangle.prototype.calculateArea = function () {
    var p = this.calculatePerimeter() / 2;
    var lines = this.getSides();

    return (Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(2);
}

Triangle.prototype.calculatePerimeter = function () {
    var lines = this.getSides();
    return (lines[0] + lines[1] + lines[2]).toFixed(2);
}