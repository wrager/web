class Circle extends Shape {
    private centerPoint: Point;
    private r: number;

    constructor() {
        super();
        this.r = 0;
        this.centerPoint = Point.createPoint(0, 0);
    }

    public setRadius(value: any) {
        this.r = value;
    }

    public getRadius() {
        return this.r;
    }

    public setPoint(value: any) {
        this.centerPoint = value;
    }

    public getPoint() {
        return this.centerPoint;
    }

    public draw(context: any) {
        context.beginPath();
        context.arc(this.getPoint().getX(), this.getPoint().getY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (Math.PI * Math.pow(this.getRadius(), 2)).toFixed(1);
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.getRadius()).toFixed(1);
    }
}
