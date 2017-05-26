/**
 * Created by Dzzirt on 17.03.2017.
 */

class CircleDrawer extends BaseDrawer {

    constructor(shapeModel: Circle) {
        super(shapeModel);
    }

    public draw() {
        BaseDrawer.clearCanvas();

        this.mDrawContext.beginPath();
        const center = this.mShapeModel.getCenter();
        const radius = this.mShapeModel.radius;
        this.mDrawContext.arc(center.x, center.y, radius, 0, 2 * Math.PI, false);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.fill();
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    }

}
