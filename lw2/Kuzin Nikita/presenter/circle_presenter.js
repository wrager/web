/**
 * Created by Dzzirt on 19.03.2017.
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
var CirclePresenter = (function (_super) {
    __extends(CirclePresenter, _super);
    function CirclePresenter(model, view) {
        var _this = _super.call(this, model, view) || this;
        _this.addCircleFields();
        return _this;
    }
    CirclePresenter.create = function (model, view) {
        return new CirclePresenter(model, view);
    };
    CirclePresenter.prototype.addCircleFields = function () {
        this.addRadiusField();
        this.addCenterXField();
        this.addCenterYField();
    };
    CirclePresenter.prototype.addRadiusField = function () {
        var element = document.createElement("input");
        element.type = "text";
        element.title = "Введите радиус";
        element.setAttribute("placeholder", "Радиус");
        element.className = "form-control";
        var self = this;
        element.onchange = function () {
            self.mModel.radius = element.value;
            self.mView.draw();
            self.updateShapeInfo();
        };
        this.createFormGroupDiv().appendChild(element);
    };
    CirclePresenter.prototype.addCenterXField = function () {
        var element = document.createElement("input");
        element.type = "text";
        element.title = "Введите X окружности";
        element.setAttribute("placeholder", "X");
        element.className = "form-control";
        var self = this;
        element.onchange = function () {
            self.mModel.setCenter({ x: element.value, y: self.mModel.getCenter().y });
            self.mView.draw();
        };
        this.createFormGroupDiv().appendChild(element);
    };
    CirclePresenter.prototype.addCenterYField = function () {
        var element = document.createElement("input");
        element.type = "text";
        element.title = "Введите X окружности";
        element.setAttribute("placeholder", "Y");
        element.className = "form-control";
        var self = this;
        element.onchange = function () {
            self.mModel.setCenter({ x: self.mModel.getCenter().x, y: element.value });
            self.mView.draw();
        };
        this.createFormGroupDiv().appendChild(element);
    };
    return CirclePresenter;
}(BaseShapePresenter));
