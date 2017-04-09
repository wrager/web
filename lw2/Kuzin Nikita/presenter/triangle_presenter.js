/**
 * Created by Dzzirt on 23.03.2017.
 */

function TrianglePresenter(model, view) {
    BaseShapePresenter.apply(this, arguments);
    this._addTriangleFields();
}

TrianglePresenter.prototype = Object.create(BaseShapePresenter.prototype);

TrianglePresenter.prototype._addTriangleFields = function () {
    this._addFirstPointFields();
    this._addSecondPointFields();
    this._addThirdPointFields();
};

TrianglePresenter.prototype._addFirstPointFields = function () {
    var firstX = document.createElement("input");
    firstX.type = "text";
    firstX.title = "Первая точка: X";
    firstX.setAttribute("placeholder", "Первая точка: X");
    firstX.className = "form-control";

    var self = this;

    firstX.onchange = function () {
        var oldY = self._model.getFirstPoint().y;
        self._model.setFirstPoint(firstX.value, oldY);
        self._view.draw();
        self._updateShapeInfo();
    };

    var firstY = document.createElement("input");
    firstY.type = "text";
    firstY.title = "Первая точка: Y";
    firstY.setAttribute("placeholder", "Первая точка: Y");
    firstY.className = "form-control";

    firstY.onchange = function () {
        var oldX = self._model.getFirstPoint().x;
        self._model.setFirstPoint(oldX, firstY.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this.createFormGroupDiv().appendChild(firstX);
    this.createFormGroupDiv().appendChild(firstY);
};

TrianglePresenter.prototype._addSecondPointFields = function () {
    var secondX = document.createElement("input");
    secondX.type = "text";
    secondX.title = "Вторая точка: X";
    secondX.setAttribute("placeholder", "Вторая точка: X");
    secondX.className = "form-control";

    var self = this;

    secondX.onchange = function () {
        var oldY = self._model.getSecondPoint().y;
        self._model.setSecondPoint(secondX.value, oldY);
        self._view.draw();
        self._updateShapeInfo();
    };

    var secondY = document.createElement("input");
    secondY.type = "text";
    secondY.title = "Вторая точка: Y";
    secondY.setAttribute("placeholder", "Вторая точка: Y");
    secondY.className = "form-control";

    secondY.onchange = function () {
        var oldX = self._model.getSecondPoint().x;
        self._model.setSecondPoint(oldX, secondY.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this.createFormGroupDiv().appendChild(secondX);
    this.createFormGroupDiv().appendChild(secondY);
};

TrianglePresenter.prototype._addThirdPointFields = function () {
    var thirdX = document.createElement("input");
    thirdX.type = "text";
    thirdX.title = "Третья точка: X";
    thirdX.setAttribute("placeholder", "Третья точка: X");
    thirdX.className = "form-control";

    var self = this;

    thirdX.onchange = function () {
        var oldY = self._model.getThirdPoint().y;
        self._model.setThirdPoint(thirdX.value, oldY);
        self._view.draw();
        self._updateShapeInfo();
    };

    var thirdY = document.createElement("input");
    thirdY.type = "text";
    thirdY.title = "Третья точка: Y";
    thirdY.setAttribute("placeholder", "Третья точка: Y");
    thirdY.className = "form-control";

    thirdY.onchange = function () {
        var oldX = self._model.getThirdPoint().x;
        self._model.setThirdPoint(oldX, thirdY.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this.createFormGroupDiv().appendChild(thirdX);
    this.createFormGroupDiv().appendChild(thirdY);
};

