/**
 * Created by Dzzirt on 17.03.2017.
 */

abstract class BaseDrawer {
    public static clearCanvas() {
        BaseDrawer.sCanvas.width = BaseDrawer.sCanvas.width;
    }

    private static sCanvas = (document.getElementById("canvas") as HTMLCanvasElement);
    protected mShapeModel;
    protected mDrawContext;

    constructor(shapeModel: Shape) {
        this.mShapeModel = shapeModel;
        this.mDrawContext = BaseDrawer.sCanvas.getContext("2d");
        BaseDrawer.clearCanvas();
    }

    protected abstract draw();

}
