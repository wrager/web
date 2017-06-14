class Rectangle extends Shape {
    private leftTopPosition: Point;
    private rightBottomPos: Point;

    constructor(type: string) {
        super();
        this.leftTopPosition = createPoint(0, 0);
        this.rightBottomPos = createPoint(0, 0);
        this.type = type;
    }

    public setLeftTopPosition(value: any) {
        this.leftTopPosition = value;
    }

    public getLeftTopPosition() {
        return this.leftTopPosition;
    }

    public setRightBottomPosition(value: any) {
        this.rightBottomPos = value;
    }

    public getRightBottomPosition() {
        return this.rightBottomPos;
    }

    public getWidth() {
        return Math.abs(this.getLeftTopPosition().getX() - this.getRightBottomPosition().getX());
    }

    public getHeight() {
        return Math.abs(this.getLeftTopPosition().getY() - this.getRightBottomPosition().getY());
    }

    public draw(context: any) {
        const topLeftX = Math.min(this.getLeftTopPosition().getX(), this.getRightBottomPosition().getX());
        const topLeftY = Math.min(this.getLeftTopPosition().getY(), this.getRightBottomPosition().getY());
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
