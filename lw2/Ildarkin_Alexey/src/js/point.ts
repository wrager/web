class Point {
    public static createPoint(x: any, y: any)  {
        const point = new Point();
        point.x = x;
        point.y = y;

        return point;
    }

    private x: number;
    private y: number;

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public setX(value: any) {
        this.x = value;
    }

    public setY(value: any) {
        this.y = value;
    }
}
