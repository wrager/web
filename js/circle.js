function Сircle() {
    this.x = 0;
    this.y = 0;
    this.radius = 0;
}

Сircle.prototype = Object.create(Shape.prototype);
Сircle.prototype.constructor = Сircle;

Сircle.prototype.getRadius = function () {
    return this.radius;
}

Сircle.prototype.setRadius = function (value) {
    this.radius = value;
}

Сircle.prototype.getX = function () {
    return this.x = value;
}

Сircle.prototype.setX = function (value) {
    this.x;
}

Сircle.prototype.getY = function () {
    return this.y = value;
}

Сircle.prototype.setY = function (value) {
    this.y = value;
}

Сircle.prototype.draw = function () {
}

Сircle.prototype.calculateArea = function () {
    return Math.PI * Math.pow(this.getRadius(), 2);
}

Сircle.prototype.calculatePerimeter = function () {
    return 2 * Math.PI * this.getRadius();
}