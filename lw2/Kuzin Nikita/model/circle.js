/**
 * Created by Dzzirt on 16.03.2017.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mRadius = 0;
        _this.mPos = { x: 0, y: 0 };
        return _this;
    }
    Circle.prototype.setCenter = function (pos) {
        this.mPos = pos;
    };
    Circle.prototype.getCenter = function () {
        return this.mPos;
    };
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this.mRadius;
        },
        set: function (value) {
            this.mRadius = value;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.getPerimeter = function () {
        return Math.PI * this.mRadius * 2;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.mRadius, 2);
    };
    return Circle;
}(Shape));
