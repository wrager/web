/**
 * Created by Dzzirt on 20.03.2017.
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
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mUpperLeft = { x: 0, y: 0 };
        _this.mBottomRight = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "upperLeft", {
        get: function () {
            return this.mUpperLeft;
        },
        set: function (value) {
            this.mUpperLeft = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "bottomRight", {
        get: function () {
            return this.mBottomRight;
        },
        set: function (value) {
            this.mBottomRight = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.getWidth = function () {
        return this.mBottomRight.x - this.mUpperLeft.x;
    };
    Rectangle.prototype.getHeight = function () {
        return this.mBottomRight.y - this.mUpperLeft.y;
    };
    Rectangle.prototype.getArea = function () {
        return this.getWidth() * this.getHeight();
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.getWidth() + this.getHeight());
    };
    return Rectangle;
}(Shape));
