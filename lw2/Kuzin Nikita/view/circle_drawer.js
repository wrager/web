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
var CircleDrawer = (function (_super) {
    __extends(CircleDrawer, _super);
    function CircleDrawer(shapeModel) {
        return _super.call(this, shapeModel) || this;
    }
    CircleDrawer.prototype.draw = function () {
        BaseDrawer.clearCanvas();
        this.mDrawContext.beginPath();
        var center = this.mShapeModel.getCenter();
        var radius = this.mShapeModel.radius;
        this.mDrawContext.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.fill();
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    };
    return CircleDrawer;
}(BaseDrawer));
