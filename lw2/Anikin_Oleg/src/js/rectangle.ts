class Rectangle extends Shape {
    private leftTop: Point;
    private rightBottom: Point;

    constructor() {
        super();
        this.leftTop = new Point(0, 0);
        this.rightBottom = new Point(0, 0);
    }

    public setLeftTop(nLeftTop: Point) {
    this.leftTop = nLeftTop;
    }

    public setRightButtom(nRightBottom) {
        this.rightBottom = nRightBottom;
    }

    public getRightButtom() {
        return this.rightBottom;
    }

    public getLeftTop() {
        return this.leftTop;
    }

    public getWidth() {
        return Math.abs(this.leftTop.getX() - this.rightBottom.getX());
    }

    public getHeight() {
        return Math.abs(this.leftTop.getY() - this.rightBottom.getY());
    }

    public draw(context) {
        const tLeftX = Math.min(this.leftTop.getX(), this.rightBottom.getX());
        const tLeftY = Math.min(this.leftTop.getY(), this.rightBottom.getY());

        context.beginPath();
        context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return(this.getWidth() * this.getHeight()).toFixed(2);
    }

    public calculatePerimeter() {
        return(this.getWidth() * 2 + this.getHeight() * 2).toFixed(2);
    }
}
