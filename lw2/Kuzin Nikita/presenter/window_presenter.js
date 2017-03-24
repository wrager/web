/**
 * Created by Dzzirt on 17.03.2017.
 */

function WindowPresenter() {
}

WindowPresenter.prototype.onShapeSelect = function (selectTag) {
    var selectedIndex = selectTag.selectedIndex;
    switch (selectedIndex) {
        case 0:
            BaseDrawer.clearCanvas("canvas");
            BaseShapePresenter.clearFields("shape_fields");
            break;
        case 1:
            var rect = new Rectangle();
            new RectanglePresenter(rect, new RectangleDrawer(rect));
            break;
        case 2:
            var triangle = new Triangle();
            new TrianglePresenter(triangle, new TriangleDrawer(triangle));
            break;
        case 3:
            var circle = new Circle();
                new CirclePresenter(circle, new CircleDrawer(circle));
            break;
    }
};
