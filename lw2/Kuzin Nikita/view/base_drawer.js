/**
 * Created by Dzzirt on 17.03.2017.
 */
var BaseDrawer = (function () {
    function BaseDrawer(shapeModel) {
        this.mShapeModel = shapeModel;
        this.mDrawContext = BaseDrawer.sCanvas.getContext("2d");
        BaseDrawer.clearCanvas();
    }
    BaseDrawer.clearCanvas = function () {
        BaseDrawer.sCanvas.width = BaseDrawer.sCanvas.width;
    };
    return BaseDrawer;
}());
BaseDrawer.sCanvas = document.getElementById("canvas");
