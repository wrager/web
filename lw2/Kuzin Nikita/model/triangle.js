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
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mFirstPoint = { x: 0, y: 0 };
        _this.mSecondPoint = { x: 0, y: 0 };
        _this.mThirdPoint = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "firstPoint", {
        get: function () {
            return this.mFirstPoint;
        },
        set: function (value) {
            this.mFirstPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "secondPoint", {
        get: function () {
            return this.mSecondPoint;
        },
        set: function (value) {
            this.mSecondPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "thirdPoint", {
        get: function () {
            return this.mThirdPoint;
        },
        set: function (value) {
            this.mThirdPoint = value;
        },
        enumerable: true,
        configurable: true
    });
    Triangle.prototype.getArea = function () {
        var a = this.getSide(this.mFirstPoint, this.mSecondPoint);
        var b = this.getSide(this.mSecondPoint, this.mThirdPoint);
        var c = this.getSide(this.mThirdPoint, this.mFirstPoint);
        var halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
    };
    Triangle.prototype.getPerimeter = function () {
        var a = this.getSide(this.mFirstPoint, this.mSecondPoint);
        var b = this.getSide(this.mSecondPoint, this.mThirdPoint);
        var c = this.getSide(this.mThirdPoint, this.mFirstPoint);
        return a + b + c;
    };
    Triangle.prototype.getSide = function (secondPoint, firstPoint) {
        return Math.sqrt(Math.pow(secondPoint.x - firstPoint.x, 2)
            + Math.pow(secondPoint.y - firstPoint.y, 2));
    };
    return Triangle;
}(Shape));
