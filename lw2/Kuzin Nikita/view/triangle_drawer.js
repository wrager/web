/**
 * Created by Dzzirt on 17.03.2017.
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
var TriangleDrawer = (function (_super) {
    __extends(TriangleDrawer, _super);
    function TriangleDrawer(shapeModel) {
        return _super.call(this, shapeModel) || this;
    }
    TriangleDrawer.prototype.draw = function () {
        BaseDrawer.clearCanvas();
        this.mDrawContext.beginPath();
        var first = this.mShapeModel.firstPoint;
        var second = this.mShapeModel.secondPoint;
        var third = this.mShapeModel.thirdPoint;
        this.mDrawContext.moveTo(first.x, first.y);
        this.mDrawContext.lineTo(second.x, second.y);
        this.mDrawContext.lineTo(third.x, third.y);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.fill();
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    };
    return TriangleDrawer;
}(BaseDrawer));
