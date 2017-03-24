/**
 * Created by Dzzirt on 17.03.2017.
 */

function CircleDrawer(shapeModel) {
    BaseDrawer.apply(this, arguments);
}

CircleDrawer.prototype = Object.create(BaseDrawer.prototype);

CircleDrawer.prototype.draw = function () {
    BaseDrawer.prototype.draw.apply(this);

    this._drawContext.beginPath();
    var center = this._shapeModel.getCenter();
    var radius = this._shapeModel.getRadius();
    this._drawContext.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
    this._drawContext.fillStyle = this._shapeModel.getFillColor();
    this._drawContext.fill();
    this._drawContext.strokeStyle = this._shapeModel.getBorderColor();
    this._drawContext.stroke();
    this._drawContext.closePath();
};