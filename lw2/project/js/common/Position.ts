class Point {
    private x: number;
    private y: number;

    public getX() {
        return this.x;
    }

    public getY() {
        return this.y;
    }

    public setX(value: number) {
        this.x = value;
    }

    public setY(value: number) {
        this.y = value;
    }
}

function createPoint(x: number, y: number): Point {
    const point = new Point();
    point.setX(x);
    point.setY(y);

    return point;
}
