function Rectangle() {
    Rectangle.superclass.constructor.apply(this)
    this._leftTop = new Point();
    this._rightButtom = new Point();
}
extend(Rectangle, Shape);

Rectangle.prototype.setLeftTop = function (x1, y1) {
    this._leftTop._x = x1;
    this._leftTop._y = y1;
}

Rectangle.prototype.setRightButtom = function (x1, y1) {
    this._rightButtom._x = x1;
    this._rightButtom._y = y1;
}

Rectangle.prototype.getRightButtom = function () {
    return _rightButtom;
}

Rectangle.prototype.getLeftTop = function () {
    return _leftTop;
}

Rectangle.prototype.getWidth = function () {
    return Math.abs(this._leftTop._x - this._rightButtom._x);
}

Rectangle.prototype.getHeight = function () {
    return Math.abs(this._leftTop._y - this._rightButtom._y);
}

Rectangle.prototype.draw = function (context) {
    var tLeftX = Math.min(this._leftTop._x, this._rightButtom._x);
    var tLeftY = Math.min(this._leftTop._y, this._rightButtom._y);
    context.beginPath();
    context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
}

Rectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight()).toFixed(2);
}

Rectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(2);
}