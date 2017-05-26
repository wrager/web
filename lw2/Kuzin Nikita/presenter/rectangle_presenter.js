/**
 * Created by Dzzirt on 20.03.2017.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RectanglePresenter = (function (_super) {
    __extends(RectanglePresenter, _super);
    function RectanglePresenter(model, view) {
        var _this = _super.call(this, model, view) || this;
        _this.addRectangleFields();
        return _this;
    }
    RectanglePresenter.create = function (model, view) {
        return new RectanglePresenter(model, view);
    };
    RectanglePresenter.prototype.addRectangleFields = function () {
        this.addUpperLeftPointFields();
        this.addBottomRightFields();
    };
    RectanglePresenter.prototype.addUpperLeftPointFields = function () {
        var upperLeftX = document.createElement("input");
        upperLeftX.type = "text";
        upperLeftX.title = "Верхний левый X";
        upperLeftX.setAttribute("placeholder", "Верхний левый X");
        upperLeftX.className = "form-control";
        var self = this;
        upperLeftX.onchange = function () {
            var oldY = self.mModel.upperLeft.y;
            self.mModel.upperLeft = { x: upperLeftX.value, y: oldY };
            self.mView.draw();
            self.updateShapeInfo();
        };
        var upperLeftY = document.createElement("input");
        upperLeftY.type = "text";
        upperLeftY.title = "Верхний левый Y";
        upperLeftY.setAttribute("placeholder", "Верхний левый Y");
        upperLeftY.className = "form-control";
        upperLeftY.onchange = function () {
            var oldX = self.mModel.upperLeft.x;
            self.mModel.upperLeft = { x: oldX, y: upperLeftY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(upperLeftX);
        this.createFormGroupDiv().appendChild(upperLeftY);
    };
    RectanglePresenter.prototype.addBottomRightFields = function () {
        var bottomRightX = document.createElement("input");
        bottomRightX.type = "text";
        bottomRightX.title = "Нижний правый X";
        bottomRightX.setAttribute("placeholder", "Нижний правый X");
        bottomRightX.className = "form-control";
        var self = this;
        bottomRightX.onchange = function () {
            var oldY = self.mModel.bottomRight.y;
            self.mModel.bottomRight = { x: bottomRightX.value, y: oldY };
            self.mView.draw();
            self.updateShapeInfo();
        };
        var bottomRightY = document.createElement("input");
        bottomRightY.type = "text";
        bottomRightY.title = "Нижний правый Y";
        bottomRightY.setAttribute("placeholder", "Нижний правый Y");
        bottomRightY.className = "form-control";
        bottomRightY.onchange = function () {
            var oldX = self.mModel.bottomRight.x;
            self.mModel.bottomRight = { x: oldX, y: bottomRightY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(bottomRightX);
        this.createFormGroupDiv().appendChild(bottomRightY);
    };
    return RectanglePresenter;
}(BaseShapePresenter));
