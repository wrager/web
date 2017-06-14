/**
 * Created by Dzzirt on 17.03.2017.
 */

class RectangleDrawer extends BaseDrawer {

    constructor(shapeModel: Rectangle) {
        super(shapeModel);
    }

    public draw() {
        BaseDrawer.clearCanvas();

        this.mDrawContext.beginPath();
        const upperLeftPoint = this.mShapeModel.upperLeft;
        const width = this.mShapeModel.getWidth();
        const height = this.mShapeModel.getHeight();
        this.mDrawContext.rect(upperLeftPoint.x, upperLeftPoint.y, width, height);
        this.mDrawContext.fillStyle = this.mShapeModel.fillColor;
        this.mDrawContext.strokeStyle = this.mShapeModel.borderColor;
        this.mDrawContext.fill();
        this.mDrawContext.stroke();
        this.mDrawContext.closePath();
    }

}
