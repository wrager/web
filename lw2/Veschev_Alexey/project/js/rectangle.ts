class Rectangle extends Shape {
    private mX1: number;
    private mY1: number;
    private mX2: number;
    private mY2: number;

    constructor() {
        super();
        this.mX1 = 0;
        this.mY1 = 0;
        this.mX2 = 0;
        this.mY2 = 0;
    }

    public setX1(value: number) {
        this.mX1 = value;
    }

    public setY1(value: number) {
        this.mY1 = value;
    }

    public setFirstPoint(x: number, y: number) {
        this.mX1 = x;
        this.mY1 = y;
    }

    public setX2(value: number) {
        this.mX2 = value;
    }

    public setY2(value: number) {
        this.mY2 = value;
    }

    public setSecondPoint(x: number, y: number) {
        this.mX2 = x;
        this.mY2 = y;
    }

    public getX1() {
        return this.mX1;
    }

     public getX2() {
        return this.mX2;
    }

    public getY1() {
        return this.mY1;
    }

    public getY2() {
        return this.mY2;
    }

    public getWidth() {
        return Math.abs(this.getX1() - this.getX2());
    }

    public getHeight() {
        return Math.abs(this.getY1() - this.getY2());
    }

    public draw(context: CanvasRenderingContext2D) {
        const tLeftX = Math.min(this.getX1(), this.getX2());
        const tLeftY = Math.min(this.getY1(), this.getY2());
        context.beginPath();
        context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (this.getWidth() * this.getHeight()).toFixed(3);
    }

    public calculatePerimeter() {
        return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(3);
    }

}
