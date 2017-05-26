/**
 * Created by Dzzirt on 19.03.2017.
 */

class CirclePresenter extends BaseShapePresenter {

    public static create(model: Shape, view: BaseDrawer) {
        return new CirclePresenter(model, view);
    }

    constructor(model: Shape, view: BaseDrawer) {
        super(model, view);
        this.addCircleFields();
    }

    private addCircleFields() {
        this.addRadiusField();
        this.addCenterXField();
        this.addCenterYField();
    }

    private addRadiusField() {
        const element = document.createElement("input");
        element.type = "text";
        element.title = "Введите радиус";
        element.setAttribute("placeholder", "Радиус");
        element.className = "form-control";
        const self = this;

        element.onchange = () => {
            self.mModel.radius = element.value;
            self.mView.draw();
            self.updateShapeInfo();
        };

        this.createFormGroupDiv().appendChild(element);
    }

    private addCenterXField() {
        const element = document.createElement("input");
        element.type = "text";
        element.title = "Введите X окружности";
        element.setAttribute("placeholder", "X");
        element.className = "form-control";
        const self = this;

        element.onchange = () => {
            self.mModel.setCenter({ x: element.value, y : self.mModel.getCenter().y});
            self.mView.draw();
        };

        this.createFormGroupDiv().appendChild(element);
    }

    private addCenterYField() {
        const element = document.createElement("input");
        element.type = "text";
        element.title = "Введите X окружности";
        element.setAttribute("placeholder", "Y");
        element.className = "form-control";
        const self = this;

        element.onchange = () => {
            self.mModel.setCenter({ x: self.mModel.getCenter().x, y : element.value});
            self.mView.draw();
        };

        this.createFormGroupDiv().appendChild(element);
    }
}
