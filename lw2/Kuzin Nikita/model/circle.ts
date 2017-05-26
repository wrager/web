/**
 * Created by Dzzirt on 16.03.2017.
 */

class Circle extends Shape {
    private mRadius: number = 0;
    private mPos = {x : 0, y : 0};

    public setCenter(pos: {x: number, y: number}) {
        this.mPos = pos;
    }

    public getCenter() {
        return this.mPos;
    }

    get radius(): number {
        return this.mRadius;
    }

    set radius(value: number) {
        this.mRadius = value;
    }

    public getPerimeter(): number {
        return Math.PI * this.mRadius * 2;
    }

    public getArea(): number {
        return Math.PI * Math.pow(this.mRadius, 2);

    }
}
