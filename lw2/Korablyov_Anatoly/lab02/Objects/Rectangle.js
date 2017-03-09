/**
 * @constructor
 */
function CRectangle() {
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
}

CRectangle.prototype = Object.create(CShape.prototype);
CRectangle.prototype.constructor = CRectangle;

/**
 * @param {number} value
 */
CRectangle.prototype.setX1 = function (value) {
    this._x1 = value;
};

/**
 * @param {number} value
 */
CRectangle.prototype.setX2 = function (value) {
    this._x2 = value;
};

/**
 * @param {number} value
 */
CRectangle.prototype.setY1 = function (value) {
    this._y1 = value;
};

/**
 * @param {number} value
 */
CRectangle.prototype.setY2 = function (value) {
    this._y2 = value;
};

/**
 * @return {number}
 */
CRectangle.prototype.getX1 = function () {
    return this._x1;
};

/**
 * @return {number}
 */
CRectangle.prototype.getX2 = function () {
    return this._x2;
};

/**
 * @return {number}
 */
CRectangle.prototype.getY1 = function () {
    return this._y1;
};

/**
 * @return {number}
 */
CRectangle.prototype.getY2 = function () {
    return this._y2;
};

/**
 * @return {number}
 */
CRectangle.prototype.getWidth = function () {
    return (Math.abs(this._x2) - Math.abs(this._x1));
};

/**
 * @return {number}
 */
CRectangle.prototype.getHeight = function () {
    return (Math.abs(this._y2) - Math.abs(this._y1));
};

CRectangle.prototype.draw = function () {

};

/**
 * @return {string}
 */
CRectangle.prototype.calculateArea = function () {
    return (this.getWidth() * this.getHeight());
};

/**
 * @returns {string}
 */
CRectangle.prototype.calculatePerimeter = function () {
    return (this.getWidth() * 2 + this.getHeight() * 2);
};