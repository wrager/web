/**
 * Created by Dzzirt on 23.03.2017.
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
var TrianglePresenter = (function (_super) {
    __extends(TrianglePresenter, _super);
    function TrianglePresenter(model, view) {
        var _this = _super.call(this, model, view) || this;
        _this.addTriangleFields();
        return _this;
    }
    TrianglePresenter.create = function (model, view) {
        return new TrianglePresenter(model, view);
    };
    TrianglePresenter.prototype.addTriangleFields = function () {
        this.addFirstPointFields();
        this.addSecondPointFields();
        this.addThirdPointFields();
    };
    TrianglePresenter.prototype.addFirstPointFields = function () {
        var firstX = document.createElement("input");
        firstX.type = "text";
        firstX.title = "Первая точка: X";
        firstX.setAttribute("placeholder", "Первая точка: X");
        firstX.className = "form-control";
        var self = this;
        firstX.onchange = function () {
            var oldY = self.mModel.firstPoint.y;
            self.mModel.firstPoint = { x: firstX.value, y: oldY };
            self.mView.draw();
            self.updateShapeInfo();
        };
        var firstY = document.createElement("input");
        firstY.type = "text";
        firstY.title = "Первая точка: Y";
        firstY.setAttribute("placeholder", "Первая точка: Y");
        firstY.className = "form-control";
        firstY.onchange = function () {
            var oldX = self.mModel.firstPoint.x;
            self.mModel.firstPoint = { x: oldX, y: firstY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(firstX);
        this.createFormGroupDiv().appendChild(firstY);
    };
    TrianglePresenter.prototype.addSecondPointFields = function () {
        var secondX = document.createElement("input");
        secondX.type = "text";
        secondX.title = "Вторая точка: X";
        secondX.setAttribute("placeholder", "Вторая точка: X");
        secondX.className = "form-control";
        var self = this;
        secondX.onchange = function () {
            var oldY = self.mModel.secondPoint.y;
            self.mModel.secondPoint = { x: secondX.value, y: oldY };
            self.mView.draw();
            self.updateShapeInfo();
        };
        var secondY = document.createElement("input");
        secondY.type = "text";
        secondY.title = "Вторая точка: Y";
        secondY.setAttribute("placeholder", "Вторая точка: Y");
        secondY.className = "form-control";
        secondY.onchange = function () {
            var oldX = self.mModel.secondPoint.x;
            self.mModel.secondPoint = { x: oldX, y: secondY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(secondX);
        this.createFormGroupDiv().appendChild(secondY);
    };
    TrianglePresenter.prototype.addThirdPointFields = function () {
        var thirdX = document.createElement("input");
        thirdX.type = "text";
        thirdX.title = "Третья точка: X";
        thirdX.setAttribute("placeholder", "Третья точка: X");
        thirdX.className = "form-control";
        var self = this;
        thirdX.onchange = function () {
            var oldY = self.mModel.thirdPoint.y;
            self.mModel.thirdPoint = { x: thirdX.value, y: oldY };
            self.mView.draw();
            self.updateShapeInfo();
        };
        var thirdY = document.createElement("input");
        thirdY.type = "text";
        thirdY.title = "Третья точка: Y";
        thirdY.setAttribute("placeholder", "Третья точка: Y");
        thirdY.className = "form-control";
        thirdY.onchange = function () {
            var oldX = self.mModel.thirdPoint.x;
            self.mModel.thirdPoint = { x: oldX, y: thirdY.value };
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(thirdX);
        this.createFormGroupDiv().appendChild(thirdY);
    };
    return TrianglePresenter;
}(BaseShapePresenter));
