/**
 * Created by Dzzirt on 20.03.2017.
 */

function RectanglePresenter(model, view) {
    BaseShapePresenter.apply(this, arguments);
    this._addRectangleFields();
}

RectanglePresenter.prototype = Object.create(BaseShapePresenter.prototype);

RectanglePresenter.prototype._addRectangleFields = function () {
    this._addUpperLeftPointFields();
    this._addBottomRightFields();
};

RectanglePresenter.prototype._addUpperLeftPointFields = function () {
    var upperLeftX = document.createElement("input");
    upperLeftX.type = "text";
    upperLeftX.title = "Верхний левый X";
    upperLeftX.setAttribute("placeholder", "Верхний левый X");
    upperLeftX.className = "form-control";

    var self = this;

    upperLeftX.onchange = function () {
        var oldY = self._model.getUpperLeftPoint().y;
        self._model.setUpperLeftPoint(upperLeftX.value, oldY);
        self._view.draw();
        self._updateShapeInfo();
    };

    var upperLeftY = document.createElement("input");
    upperLeftY.type = "text";
    upperLeftY.title = "Верхний левый Y";
    upperLeftY.setAttribute("placeholder", "Верхний левый Y");
    upperLeftY.className = "form-control";

    upperLeftY.onchange = function () {
        var oldX = self._model.getUpperLeftPoint().x;
        self._model.setUpperLeftPoint(oldX, upperLeftY.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this.createFormGroupDiv().appendChild(upperLeftX);
    this.createFormGroupDiv().appendChild(upperLeftY);
};

RectanglePresenter.prototype._addBottomRightFields = function () {
    var bottomRightX = document.createElement("input");
    bottomRightX.type = "text";
    bottomRightX.title = "Нижний правый X";
    bottomRightX.setAttribute("placeholder", "Нижний правый X");
    bottomRightX.className = "form-control";

    var self = this;

    bottomRightX.onchange = function () {
        var oldY = self._model.getBottomRightPoint().y;
        self._model.setBottomRightPoint(bottomRightX.value, oldY);
        self._view.draw();
        self._updateShapeInfo();
    };

    var bottomRightY = document.createElement("input");
    bottomRightY.type = "text";
    bottomRightY.title = "Нижний правый Y";
    bottomRightY.setAttribute("placeholder", "Нижний правый Y");
    bottomRightY.className = "form-control";


    bottomRightY.onchange = function () {
        var oldX = self._model.getBottomRightPoint().x;
        self._model.setBottomRightPoint(oldX, bottomRightY.value);
        self._view.draw();
        self._updateShapeInfo();
    };

    this.createFormGroupDiv().appendChild(bottomRightX);
    this.createFormGroupDiv().appendChild(bottomRightY);
};