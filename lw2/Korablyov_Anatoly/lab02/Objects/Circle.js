/**
 * @constructor
 */
function CCircle() {
    CShape.apply(this, arguments);
    /**
     * @type {number}
     * @private
     */
    this._x = 0;

    /**
     * @type {number}
     * @private
     */
    this._y = 0;

    /**
     * @type {number}
     * @private
     */
    this._radius = 0;
}

CCircle.prototype = Object.create(CShape.prototype);
CCircle.prototype.constructor = CCircle;

/**
 * @param {number} value
 */
CCircle.prototype.setRadius = function (value) {
    this._radius = value;
};

/**
 * @return {number}
 */
CCircle.prototype.getRadius = function () {
    return this._radius;
};

/**
 * @param {number} value
 */
CCircle.prototype.setX = function (value) {
    this._x = value;
};

/**
 * @return {number}
 */
CCircle.prototype.getX = function () {
    return this._x;
};

/**
 * @param {number} value
 */
CCircle.prototype.setY = function (value) {
    this._y = value;
};

/**
 * @return {number}
 */
CCircle.prototype.getY = function () {
    return this._y;
};

CCircle.prototype.draw = function () {
};

/**
 * @returns {number}
 */
CCircle.prototype.calculateArea = function () {
    return (Math.PI * Math.pow(this._radius, 2));
};

/**
 * @returns {number}
 */
CCircle.prototype.calculatePerimeter = function () {
    return (2 * Math.PI * this._radius);
};