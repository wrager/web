/**
 * Created by Dzzirt on 17.03.2017.
 */

function RectangleDrawer(shapeModel) {
    BaseDrawer.apply(this, arguments);
}

RectangleDrawer.prototype = Object.create(BaseDrawer.prototype);

RectangleDrawer.prototype.draw = function () {
    BaseDrawer.prototype.draw.apply(this);

    this._drawContext.beginPath();
    var upperLeftPoint = this._shapeModel.getUpperLeftPoint();
    var width = this._shapeModel.getWidth();
    var height = this._shapeModel.getHeight();
    this._drawContext.rect(upperLeftPoint.x, upperLeftPoint.y, width, height);
    this._drawContext.fillStyle = this._shapeModel.getFillColor();
    this._drawContext.strokeStyle = this._shapeModel.getBorderColor();
    this._drawContext.fill();
    this._drawContext.stroke();
    this._drawContext.closePath();
};