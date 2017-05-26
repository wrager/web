/**
 * Created by Dzzirt on 19.03.2017.
 */
var BaseShapePresenter = (function () {
    function BaseShapePresenter(model, view) {
        this.mView = view;
        this.mModel = model;
        BaseShapePresenter.clearFields();
        this.addFillColorField();
        this.addBorderColorField();
        this.addAreaInfo();
        this.addPerimeterInfo();
    }
    BaseShapePresenter.clearFields = function () {
        var element = this.mBaseElement;
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };
    BaseShapePresenter.prototype.createFormGroupDiv = function () {
        var element = document.createElement("div");
        element.className = "form-group";
        BaseShapePresenter.mBaseElement.appendChild(element);
        return element;
    };
    BaseShapePresenter.prototype.updateShapeInfo = function () {
        var perimeterParagraph = document.getElementById("perimeter");
        perimeterParagraph.innerHTML = "Периметр: " + this.mModel.getPerimeter();
        var areaParagraph = document.getElementById("area");
        areaParagraph.innerHTML = "Площадь: " + this.mModel.getArea();
    };
    BaseShapePresenter.prototype.addFillColorField = function () {
        var element = document.createElement("input");
        element.type = "text";
        element.title = "Введите цвет заливки";
        element.setAttribute("placeholder", "Цвет заливки");
        element.className = "form-control";
        var self = this;
        element.onchange = function () {
            self.mModel.fillColor = element.value;
            self.mView.draw();
        };
        this.createFormGroupDiv().appendChild(element);
    };
    BaseShapePresenter.prototype.addBorderColorField = function () {
        var element = document.createElement("input");
        element.type = "text";
        element.title = "Введите цвет обводки";
        element.setAttribute("placeholder", "Цвет обводки");
        element.className = "form-control";
        var self = this;
        element.onchange = function () {
            self.mModel.borderColor = element.value;
            self.mView.draw();
        };
        this.createFormGroupDiv().appendChild(element);
    };
    BaseShapePresenter.prototype.addAreaInfo = function () {
        var paragraph = document.createElement("label");
        var text = document.createTextNode("Площадь: " + this.mModel.getArea());
        paragraph.id = "area";
        paragraph.style.display = "block";
        paragraph.appendChild(text);
        BaseShapePresenter.mBaseElement.appendChild(paragraph);
    };
    BaseShapePresenter.prototype.addPerimeterInfo = function () {
        var paragraph = document.createElement("label");
        var text = document.createTextNode("Периметр: " + this.mModel.getPerimeter());
        paragraph.id = "perimeter";
        paragraph.style.display = "block";
        paragraph.appendChild(text);
        BaseShapePresenter.mBaseElement.appendChild(paragraph);
    };
    return BaseShapePresenter;
}());
BaseShapePresenter.mBaseElement = document.getElementById("shape_fields");
