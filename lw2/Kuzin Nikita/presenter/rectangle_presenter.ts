/**
 * Created by Dzzirt on 20.03.2017.
 */

class RectanglePresenter extends BaseShapePresenter {

    public static create(model: Shape, view: BaseDrawer) {
        return new RectanglePresenter(model, view);
    }

    constructor(model: Shape, view: BaseDrawer) {
        super(model, view);
        this.addRectangleFields();

    }

    private addRectangleFields() {
        this.addUpperLeftPointFields();
        this.addBottomRightFields();
    }

    private addUpperLeftPointFields() {
        const upperLeftX = document.createElement("input");
        upperLeftX.type = "text";
        upperLeftX.title = "Верхний левый X";
        upperLeftX.setAttribute("placeholder", "Верхний левый X");
        upperLeftX.className = "form-control";

        const self = this;

        upperLeftX.onchange = () => {
            const oldY = self.mModel.upperLeft.y;
            self.mModel.upperLeft = {x : upperLeftX.value, y : oldY};
            self.mView.draw();
            self.updateShapeInfo();
        };

        const upperLeftY = document.createElement("input");
        upperLeftY.type = "text";
        upperLeftY.title = "Верхний левый Y";
        upperLeftY.setAttribute("placeholder", "Верхний левый Y");
        upperLeftY.className = "form-control";

        upperLeftY.onchange = () => {
            const oldX = self.mModel.upperLeft.x;
            self.mModel.upperLeft = { x : oldX, y : upperLeftY.value};
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(upperLeftX);
        this.createFormGroupDiv().appendChild(upperLeftY);
    }

    private addBottomRightFields() {
        const bottomRightX = document.createElement("input");
        bottomRightX.type = "text";
        bottomRightX.title = "Нижний правый X";
        bottomRightX.setAttribute("placeholder", "Нижний правый X");
        bottomRightX.className = "form-control";

        const self = this;

        bottomRightX.onchange = () => {
            const oldY = self.mModel.bottomRight.y;
            self.mModel.bottomRight = { x : bottomRightX.value, y : oldY};
            self.mView.draw();
            self.updateShapeInfo();
        };

        const bottomRightY = document.createElement("input");
        bottomRightY.type = "text";
        bottomRightY.title = "Нижний правый Y";
        bottomRightY.setAttribute("placeholder", "Нижний правый Y");
        bottomRightY.className = "form-control";

        bottomRightY.onchange = () => {
            const oldX = self.mModel.bottomRight.x;
            self.mModel.bottomRight = { x : oldX, y : bottomRightY.value};
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(bottomRightX);
        this.createFormGroupDiv().appendChild(bottomRightY);
    }
}
