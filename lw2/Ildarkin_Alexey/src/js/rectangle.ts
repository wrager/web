class Rectangle extends Shape {
    private leftTopPoint: Point;
    private rightBottomPos: Point;

    constructor() {
        super();
        this.leftTopPoint = Point.createPoint(0, 0);
        this.rightBottomPos = Point.createPoint(0, 0);
    }

    public setLeftTopPoint(value: any) {
        this.leftTopPoint = value;
    }

    public getLeftTopPoint() {
        return this.leftTopPoint;
    }

    public setRightBottomPoint(value: any) {
        this.rightBottomPos = value;
    }

    public getRightBottomPoint() {
        return this.rightBottomPos;
    }

    public getWidth() {
        return Math.abs(this.getLeftTopPoint().getX() - this.getRightBottomPoint().getX());
    }

    public getHeight() {
        return Math.abs(this.getLeftTopPoint().getY() - this.getRightBottomPoint().getY());
    }

    public draw(context: any) {
        const topLeftX = Math.min(this.getLeftTopPoint().getX(), this.getRightBottomPoint().getX());
        const topLeftY = Math.min(this.getLeftTopPoint().getY(), this.getRightBottomPoint().getY());
        context.beginPath();
        context.rect(topLeftX, topLeftY, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (this.getWidth() * this.getHeight()).toFixed(1);
    }

    public calculatePerimeter() {
        return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(1);
    }
}
