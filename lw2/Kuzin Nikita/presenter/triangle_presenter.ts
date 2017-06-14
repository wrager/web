/**
 * Created by Dzzirt on 23.03.2017.
 */

class TrianglePresenter extends BaseShapePresenter {

    public static create(model: Shape, view: BaseDrawer) {
        return new TrianglePresenter(model, view);
    }

    constructor(model: Shape, view: BaseDrawer) {
        super(model, view);
        this.addTriangleFields();
    }

    private addTriangleFields() {
        this.addFirstPointFields();
        this.addSecondPointFields();
        this.addThirdPointFields();
    }

    private addFirstPointFields() {
        const firstX = document.createElement("input");
        firstX.type = "text";
        firstX.title = "Первая точка: X";
        firstX.setAttribute("placeholder", "Первая точка: X");
        firstX.className = "form-control";

        const self = this;

        firstX.onchange = () => {
            const oldY = self.mModel.firstPoint.y;
            self.mModel.firstPoint = { x : firstX.value, y : oldY};
            self.mView.draw();
            self.updateShapeInfo();
        };

        const firstY = document.createElement("input");
        firstY.type = "text";
        firstY.title = "Первая точка: Y";
        firstY.setAttribute("placeholder", "Первая точка: Y");
        firstY.className = "form-control";

        firstY.onchange = () => {
            const oldX = self.mModel.firstPoint.x;
            self.mModel.firstPoint = { x : oldX, y : firstY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(firstX);
        this.createFormGroupDiv().appendChild(firstY);
    }

    private addSecondPointFields() {
        const secondX = document.createElement("input");
        secondX.type = "text";
        secondX.title = "Вторая точка: X";
        secondX.setAttribute("placeholder", "Вторая точка: X");
        secondX.className = "form-control";

        const self = this;

        secondX.onchange = () => {
            const oldY = self.mModel.secondPoint.y;
            self.mModel.secondPoint = { x : secondX.value, y : oldY};
            self.mView.draw();
            self.updateShapeInfo();
        };

        const secondY = document.createElement("input");
        secondY.type = "text";
        secondY.title = "Вторая точка: Y";
        secondY.setAttribute("placeholder", "Вторая точка: Y");
        secondY.className = "form-control";

        secondY.onchange = () => {
            const oldX = self.mModel.secondPoint.x;
            self.mModel.secondPoint = { x : oldX, y : secondY.value};
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(secondX);
        this.createFormGroupDiv().appendChild(secondY);
    }

    private addThirdPointFields() {
        const thirdX = document.createElement("input");
        thirdX.type = "text";
        thirdX.title = "Третья точка: X";
        thirdX.setAttribute("placeholder", "Третья точка: X");
        thirdX.className = "form-control";

        const self = this;

        thirdX.onchange = () => {
            const oldY = self.mModel.thirdPoint.y;
            self.mModel.thirdPoint = { x : thirdX.value, y : oldY};
            self.mView.draw();
            self.updateShapeInfo();
        };

        const thirdY = document.createElement("input");
        thirdY.type = "text";
        thirdY.title = "Третья точка: Y";
        thirdY.setAttribute("placeholder", "Третья точка: Y");
        thirdY.className = "form-control";

        thirdY.onchange = () => {
            const oldX = self.mModel.thirdPoint.x;
            self.mModel.thirdPoint = { x : oldX, y : thirdY.value};
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(thirdX);
        this.createFormGroupDiv().appendChild(thirdY);
    }

}
