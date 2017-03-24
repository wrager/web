/**
 * Created by Dzzirt on 17.03.2017.
 */

function TriangleDrawer(shapeModel) {
    BaseDrawer.apply(this, arguments);
}

TriangleDrawer.prototype = Object.create(BaseDrawer.prototype);

TriangleDrawer.prototype.draw = function () {
    BaseDrawer.prototype.draw.apply(this);
    this._drawContext.beginPath();
    var first = this._shapeModel.getFirstPoint();
    var second = this._shapeModel.getSecondPoint();
    var third = this._shapeModel.getThirdPoint();
    this._drawContext.moveTo(first.x, first.y);
    this._drawContext.lineTo(second.x, second.y);
    this._drawContext.lineTo(third.x, third.y);
    this._drawContext.fillStyle = this._shapeModel.getFillColor();
    this._drawContext.strokeStyle = this._shapeModel.getBorderColor();
    this._drawContext.fill();
    this._drawContext.stroke();
    this._drawContext.closePath();
};