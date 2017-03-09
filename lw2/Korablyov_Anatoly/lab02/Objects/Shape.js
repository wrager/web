/**
 * @constructor
 */
function CShape() {
    this.fillShape = "#000000";
    this.borderColor = "#000000";
}

/**
 * @param {string} value
 */
CShape.prototype.setFillColor = function(value) {
    this.fillShape = value;
};

/**
 * @return {string}
 */
CShape.prototype.getFillColor = function() {
    return this.fillShape;
};

/**
 * @param {string} value
 */
CShape.prototype.setBorderColor = function(value) {
    this.borderColor = value;
};

/**
 * @returns {string}
 */
CShape.prototype.getBorderColor = function() {
    return this.borderColor;
};

CShape.prototype.draw = function() {

};

CShape.prototype.calculateArea = function() {

};

CShape.prototype.calculatePerimeter = function() {

};