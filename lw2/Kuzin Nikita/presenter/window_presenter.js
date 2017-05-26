///<reference path="triangle_presenter.ts"/>
/**
 * Created by Dzzirt on 17.03.2017.
 */
var WindowPresenter = (function () {
    function WindowPresenter() {
    }
    WindowPresenter.prototype.onShapeSelect = function (selectTag) {
        var selectedIndex = selectTag.selectedIndex;
        switch (selectedIndex) {
            case 0:
                BaseDrawer.clearCanvas();
                BaseShapePresenter.clearFields();
                break;
            case 1:
                var rect = new Rectangle();
                RectanglePresenter.create(rect, new RectangleDrawer(rect));
                break;
            case 2:
                var triangle = new Triangle();
                TrianglePresenter.create(triangle, new TriangleDrawer(triangle));
                break;
            case 3:
                var circle = new Circle();
                CirclePresenter.create(circle, new CircleDrawer(circle));
                break;
        }
    };
    return WindowPresenter;
}());
