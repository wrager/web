
class Position {
    public static createPoint(x: number, y: number): Position {
        const point = new Position();
        point.setX(x);
        point.setY(y);

        return point;
    }

    private x: number;
    private y: number;

    constructor(xValue: number, yValue: number)  {
        this.x = xValue;
        this.y = yValue;
    }

    public setX(value: number) {
        this.x = value;
    }

    public setY(value: number) {
        this.y = value;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

}
