/**
 * Created by Dzzirt on 17.03.2017.
 */

class TriangleDrawer extends BaseDrawer {

    constructor(shapeModel: Triangle) {
        super(shapeModel);
    }

    public draw() {
        BaseDrawer.clearCanvas();

        this.mDrawContext.beginPath();
        const first = this.mShapeModel.firstPoint;
        const second = this.mShapeModel.secondPoint;
        const third = this.mShapeModel.thirdPoint;
        this.mDrawContext.moveTo(first.x, first.y);
        this.mDrawContext.lineTo(second.x, second.y);
        this.mDrawContext.lineTo(third.x, third.y);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.fill();
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    }
}
