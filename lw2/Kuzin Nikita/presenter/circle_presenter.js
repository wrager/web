/**
 * Created by Dzzirt on 19.03.2017.
 */

function CirclePresenter(model, view) {
    BaseShapePresenter.apply(this, arguments);
    this._addCircleFields();
}

CirclePresenter.prototype = BaseShapePresenter.prototype;

CirclePresenter.prototype._addCircleFields = function () {
    this._addRadiusField();
    this._addCenterXField();
    this._addCenterYField();
};

CirclePresenter.prototype._addRadiusField = function () {
    var element = document.createElement("input");
    element.type = "text";
    element.title = "Введите радиус";
    element.setAttribute("placeholder", "Радиус");
    element.style.display = "block";
    var self = this;

    element.onchange = function () {
        self._model.setRadius(element.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this._baseElement.appendChild(element);
};

CirclePresenter.prototype._addCenterXField = function () {
    var element = document.createElement("input");
    element.type = "text";
    element.title = "Введите X окружности";
    element.setAttribute("placeholder", "X");
    element.display = "inline";
    var self = this;

    element.onchange = function () {
        self._model.setCenter(element.value, self._model.getCenter().y);
        self._view.draw();
    };

    this._baseElement.appendChild(element);
};

CirclePresenter.prototype._addCenterYField = function () {
    var element = document.createElement("input");
    element.type = "text";
    element.title = "Введите X окружности";
    element.setAttribute("placeholder", "Y");
    element.display = "inline";
    var self = this;

    element.onchange = function () {
        self._model.setCenter(self._model.getCenter().x, element.value);
        self._view.draw();
    };

    this._baseElement.appendChild(element);
};