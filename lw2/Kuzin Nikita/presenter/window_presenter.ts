///<reference path="triangle_presenter.ts"/>
/**
 * Created by Dzzirt on 17.03.2017.
 */

class WindowPresenter {

    public onShapeSelect(selectTag: HTMLSelectElement) {
        const selectedIndex = selectTag.selectedIndex;
        switch (selectedIndex) {
            case 0:
                BaseDrawer.clearCanvas();
                BaseShapePresenter.clearFields();
                break;
            case 1:
                const rect = new Rectangle();
                RectanglePresenter.create(rect, new RectangleDrawer(rect));
                break;
            case 2:
                const triangle = new Triangle();
                TrianglePresenter.create(triangle, new TriangleDrawer(triangle));
                break;
            case 3:
                const circle = new Circle();
                CirclePresenter.create(circle, new CircleDrawer(circle));
                break;
        }
    }
}
