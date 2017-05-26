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
var RectangleDrawer = (function (_super) {
    __extends(RectangleDrawer, _super);
    function RectangleDrawer(shapeModel) {
        return _super.call(this, shapeModel) || this;
    }
    RectangleDrawer.prototype.draw = function () {
        BaseDrawer.clearCanvas();
        this.mDrawContext.beginPath();
        var upperLeftPoint = this.mShapeModel.upperLeft;
        var width = this.mShapeModel.getWidth();
        var height = this.mShapeModel.getHeight();
        this.mDrawContext.rect(upperLeftPoint.x, upperLeftPoint.y, width, height);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.fill();
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    };
    return RectangleDrawer;
}(BaseDrawer));
