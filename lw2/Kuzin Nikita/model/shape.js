/**
 * Created by Dzzirt on 15.03.2017.
 */

function Shape() {
    this._mFillColor = "#000000";
    this._mBorderColor = "#000000";
}

Shape.prototype.setFillColor = function (fillColor) {
    this._mFillColor = fillColor;
};

Shape.prototype.getFillColor = function () {
    return this._mFillColor;
};

Shape.prototype.setBorderColor = function (borderColor) {
    this._mBorderColor = borderColor;
};

Shape.prototype.getBorderColor = function () {
    return this._mBorderColor;
};

