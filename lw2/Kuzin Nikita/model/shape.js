/**
 * Created by Dzzirt on 15.03.2017.
 */
var Shape = (function () {
    function Shape() {
        this.mFillColor = "#000000";
        this.mBorderColor = "#000000";
    }
    Object.defineProperty(Shape.prototype, "fillColor", {
        get: function () {
            return this.mFillColor;
        },
        set: function (fillColor) {
            this.mFillColor = fillColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "borderColor", {
        get: function () {
            return this.mBorderColor;
        },
        set: function (value) {
            this.mBorderColor = value;
        },
        enumerable: true,
        configurable: true
    });
    return Shape;
}());
