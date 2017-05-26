/**
 * Created by Dzzirt on 19.03.2017.
 */

abstract class BaseShapePresenter {
    public static clearFields() {
        const element = this.mBaseElement;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    private static mBaseElement = document.getElementById("shape_fields");
    protected mView;
    protected mModel;

    constructor(model: Shape, view: BaseDrawer) {
        this.mView = view;
        this.mModel = model;

        BaseShapePresenter.clearFields();
        this.addFillColorField();
        this.addBorderColorField();
        this.addAreaInfo();
        this.addPerimeterInfo();
    }

    protected createFormGroupDiv() {
        const element = document.createElement("div");
        element.className = "form-group";
        BaseShapePresenter.mBaseElement.appendChild(element);
        return element;
    }

    protected updateShapeInfo() {
        const perimeterParagraph = document.getElementById("perimeter");
        perimeterParagraph.innerHTML = "Периметр: " + this.mModel.getPerimeter();

        const areaParagraph = document.getElementById("area");
        areaParagraph.innerHTML = "Площадь: " + this.mModel.getArea();
    }

    private addFillColorField() {
        const element = document.createElement("input");
        element.type = "text";
        element.title = "Введите цвет заливки";
        element.setAttribute("placeholder", "Цвет заливки");
        element.className = "form-control";
        const self = this;

        element.onchange = () => {
            self.mModel.fillColor = element.value;
            self.mView.draw();
        };

        this.createFormGroupDiv().appendChild(element);
    }

    private addBorderColorField() {
        const element = document.createElement("input");
        element.type = "text";
        element.title = "Введите цвет обводки";
        element.setAttribute("placeholder", "Цвет обводки");
        element.className = "form-control";
        const self = this;

        element.onchange = () => {
            self.mModel.borderColor = element.value;
            self.mView.draw();
        };

        this.createFormGroupDiv().appendChild(element);
    }

    private addAreaInfo() {
        const paragraph = document.createElement("label");
        const text = document.createTextNode("Площадь: " + this.mModel.getArea());
        paragraph.id = "area";
        paragraph.style.display = "block";
        paragraph.appendChild(text);
        BaseShapePresenter.mBaseElement.appendChild(paragraph);
    }

    private addPerimeterInfo() {
        const paragraph = document.createElement("label");
        const text = document.createTextNode("Периметр: " + this.mModel.getPerimeter());
        paragraph.id = "perimeter";
        paragraph.style.display = "block";
        paragraph.appendChild(text);
        BaseShapePresenter.mBaseElement.appendChild(paragraph);
    }

}