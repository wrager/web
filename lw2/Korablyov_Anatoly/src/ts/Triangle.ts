/**
 * @constructor
 */
function CTriangle() {
    CShape.apply(this, arguments);
    /**
     * @type {number}
     * @private
     */
    this._x1 = 0;

    /**
     * @type {number}
     * @private
     */
    this._y1 = 0;

    /**
     * @type {number}
     * @private
     */
    this._x2 = 0;

    /**
     * @type {number}
     * @private
     */
    this._y2 = 0;

    /**
     * @type {number}
     * @private
     */
    this._x3 = 0;

    /**
     * @type {number}
     * @private
     */
    this._y3 = 0;
}

CTriangle.prototype = Object.create(CShape.prototype);
CTriangle.prototype.constructor = CTriangle;

/**
 * @param {number} value
 */
CTriangle.prototype.setX1 = function (value) {
    this._x1 = value;
};

/**
 * @param {number} value
 */
CTriangle.prototype.setX2 = function (value) {
    this._x2 = value;
};

/**
 * @param {number} value
 */
CTriangle.prototype.setX3 = function (value) {
    this._x3 = value;
};

/**
 * @param {number} value
 */
CTriangle.prototype.setY1 = function (value) {
    this._y1 = value;
};

/**
 * @param {number} value
 */
CTriangle.prototype.setY2 = function (value) {
    this._y2 = value;
};

/**
 * @param {number} value
 */
CTriangle.prototype.setY3 = function (value) {
    this._y3 = value;
};

/**
 * @return {number}
 */
CTriangle.prototype.getX1 = function () {
    return this._x1;
};

/**
 * @return {number}
 */
CTriangle.prototype.getX2 = function () {
    return this._x2;
};

/**
 * @return {number}
 */
CTriangle.prototype.getX3 = function () {
    return this._x3;
};

/**
 * @return {number}
 */
CTriangle.prototype.getY1 = function () {
    return this._y1;
};

/**
 * @return {number}
 */
CTriangle.prototype.getY2 = function () {
    return this._y2;
};

/**
 * @return {number}
 */
CTriangle.prototype.getY3 = function () {
    return this._y3;
};


CTriangle.prototype.draw = function () {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.beginPath();
    context.moveTo(this.getX1(), this.getY1());
    context.lineTo(this.getX2(), this.getY2());
    context.lineTo(this.getX3(), this.getY3());
    context.closePath();
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function subAbsNum(num1, num2) {
    return (Math.abs(Math.abs(num2) - Math.abs(num1)));
}

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
function lengthSide(x1, y1, x2, y2) 
{
    return (Math.sqrt(Math.pow(subAbsNum(x1, x2), 2) + Math.sqrt(Math.pow(subAbsNum(y1, y2), 2))));
}

/**
 * @returns {Array}
 */
CTriangle.prototype.getSides = function() {
    var sideA = lengthSide(this._x1, this._y1, this._x2, this._y2);
    var sideB = lengthSide(this._x2, this._y2, this._x3, this._y3);
    var sideC = lengthSide(this._x3, this._y3, this._x1, this._y1);
    return [sideA, sideB, sideC];
};

/**
 * @returns {number}
 */
CTriangle.prototype.calculateArea = function () {
    var p = this.calculatePerimeter() / 2;
    var sides = this.getSides();

    return (Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])));
};

/**
 * @returns {number}
 */
CTriangle.prototype.calculatePerimeter = function () {
    /**
     * @type {Array}
     */
    var sides = this.getSides();
    return (sides[0] + sides[1] + sides[2]);
};