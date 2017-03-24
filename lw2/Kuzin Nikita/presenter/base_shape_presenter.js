/**
 * Created by Dzzirt on 19.03.2017.
 */

function BaseShapePresenter(model, view) {
    this._view = view;
    this._model = model;
    var elementName = "shape_fields";
    this._baseElement = document.getElementById(elementName);

    BaseShapePresenter.clearFields(elementName);
    this._addFillColorField();
    this._addBorderColorField();
    this._addAreaInfo();
    this._addPerimeterInfo();
}

BaseShapePresenter.clearFields = function (elementName) {
    var element = document.getElementById(elementName);
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

BaseShapePresenter.prototype._addFillColorField = function () {
    var element = document.createElement("input");
    element.type = "text";
    element.title = "Введите цвет заливки";
    element.setAttribute("placeholder", "Цвет заливки");
    element.style.display = "block";
    var self = this;

    element.onchange = function () {
        self._model.setFillColor(element.value);
        self._view.draw();
    };

    this._baseElement.appendChild(element);
};

BaseShapePresenter.prototype._addBorderColorField = function () {
    var element = document.createElement("input");
    element.type = "text";
    element.title = "Введите цвет обводки";
    element.setAttribute("placeholder", "Цвет обводки");
    element.style.display = "block";
    var self = this;

    element.onchange = function () {
        self._model.setBorderColor(element.value);
        self._view.draw();
    };

    this._baseElement.appendChild(element);
};

BaseShapePresenter.prototype._addAreaInfo = function () {
    var paragraph = document.createElement("p");
    var text = document.createTextNode("Площадь: " + this._model.getArea());
    paragraph.id = "area";
    paragraph.style.display = "block";
    paragraph.appendChild(text);
    this._baseElement.appendChild(paragraph);
};

BaseShapePresenter.prototype._addPerimeterInfo = function () {
    var paragraph = document.createElement("p");
    var text = document.createTextNode("Периметр: " + this._model.getPerimeter());
    paragraph.id = "perimeter";
    paragraph.style.display = "block";
    paragraph.appendChild(text);
    this._baseElement.appendChild(paragraph);
};

BaseShapePresenter.prototype._updateShapeInfo = function () {
    var perimeterParagraph = document.getElementById("perimeter");
    perimeterParagraph.innerHTML = "Периметр: " + this._model.getPerimeter();

    var areaParagraph = document.getElementById("area");
    areaParagraph.innerHTML = "Площадь: " + this._model.getArea();
};

