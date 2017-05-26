/**
 * Created by Dzzirt on 20.03.2017.
 */

class Triangle extends Shape {

    private mFirstPoint = {x: 0, y: 0};
    private mSecondPoint = {x: 0, y: 0};
    private mThirdPoint = {x: 0, y: 0};

    get firstPoint(): { x: number; y: number } {
        return this.mFirstPoint;
    }

    set firstPoint(value: { x: number; y: number }) {
        this.mFirstPoint = value;
    }

    get secondPoint(): { x: number; y: number } {
        return this.mSecondPoint;
    }

    set secondPoint(value: { x: number; y: number }) {
        this.mSecondPoint = value;
    }

    get thirdPoint(): { x: number; y: number } {
        return this.mThirdPoint;
    }

    set thirdPoint(value: { x: number; y: number }) {
        this.mThirdPoint = value;
    }

    public getArea(): number {
        const a = this.getSide(this.mFirstPoint, this.mSecondPoint);
        const b = this.getSide(this.mSecondPoint, this.mThirdPoint);
        const c = this.getSide(this.mThirdPoint, this.mFirstPoint);
        const halfPerimeter = this.getPerimeter() / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
    }

    public getPerimeter(): number {
        const a = this.getSide(this.mFirstPoint, this.mSecondPoint);
        const b = this.getSide(this.mSecondPoint, this.mThirdPoint);
        const c = this.getSide(this.mThirdPoint, this.mFirstPoint);
        return a + b + c;
    }

    private getSide(secondPoint, firstPoint): number {
        return Math.sqrt(
            Math.pow(secondPoint.x - firstPoint.x, 2)
            + Math.pow(secondPoint.y - firstPoint.y, 2));
    }
}
