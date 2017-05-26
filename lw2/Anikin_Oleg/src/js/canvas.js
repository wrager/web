function setShapeColor(shape, fillColor, borderColor) {
    shape.setFillColor(fillColor);
    shape.setBorderColor(borderColor);
}

function Canvas() {
    this._circle = undefined;
    this._rectangle = undefined;
    this._triangle = undefined;
}

Canvas.prototype.updateCircle = function(center, radius, fillColor, borderColor) {
    if(this._circle == undefined) {
        this._circle = new Circle();
    }

    this._circle.setCenter(center);
    this._circle.setRadius(radius);

    setShapeColor(this._circle, fillColor, borderColor);
}

Canvas.prototype.updateRectangle = function(leftTop, rightButtom, fillColor, borderColor) {
    if(this._rectangle == undefined) {
        this._rectangle = new Rectangle();
    }

    this._rectangle.setLeftTop(leftTop);
    this._rectangle.setRightButtom(rightButtom);

    setShapeColor(this._rectangle, fillColor, borderColor);
}

Canvas.prototype.updateTriangle = function(first, second, third, fillColor, borderColor) {
    if(this._triangle == undefined) {
        this._triangle = new Triangle();
    }

    this._triangle.setFirstVertex(first);
    this._triangle.setSecondVertex(second);
    this._triangle.setThirdVertex(third);

    setShapeColor(this._triangle, fillColor, borderColor);
}

Canvas.prototype.getTriangle = function() {
    return this._triangle;
}

Canvas.prototype.getCircle = function() {
    return this._circle;
}

Canvas.prototype.getRectangle = function() {
    return this._rectangle;
}