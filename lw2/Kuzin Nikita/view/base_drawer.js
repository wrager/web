/**
 * Created by Dzzirt on 17.03.2017.
 */

function BaseDrawer(shapeModel) {
    this._canvasName = "canvas";
    this._drawContext = document.getElementById(this._canvasName).getContext("2d");
    this._shapeModel = shapeModel;
    this.draw();
}

BaseDrawer.clearCanvas = function (canvasName) {
    var canvas = document.getElementById(canvasName);
    canvas.width = canvas.width;
};

BaseDrawer.prototype.draw = function () {
    BaseDrawer.clearCanvas(this._canvasName)
};