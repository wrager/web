/**
 * Created by Dzzirt on 20.03.2017.
 */

class Rectangle extends Shape {

    private mUpperLeft = {x: 0, y: 0};
    private mBottomRight = {x: 0, y: 0};

    get upperLeft() {
        return this.mUpperLeft;
    }

    set upperLeft(value: { x: number; y: number }) {
        this.mUpperLeft = value;
    }

    get bottomRight() {
        return this.mBottomRight;
    }

    set bottomRight(value: { x: number; y: number }) {
        this.mBottomRight = value;
    }

    public getWidth() {
        return this.mBottomRight.x - this.mUpperLeft.x;
    }

    public getHeight() {
        return this.mBottomRight.y - this.mUpperLeft.y;

    }

    public getArea(): number {
        return this.getWidth() * this.getHeight();

    }

    public getPerimeter(): number {
        return 2 * (this.getWidth() + this.getHeight());

    }
}
