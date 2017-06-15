class Circle extends Shape {
    private mRadius: number;
    private mX: number;
    private mY: number;

    constructor() {
        super();
        this.mX = 0;
        this.mY = 0;
        this.mRadius = 0;
    }

    public setRadius(value: number) {
        this.mRadius = value;
    }

    public getRadius() {
        return this.mRadius;
    }

    public setCenter(x: number, y: number) {
        this.mX = x;
        this.mY = y;
    }

    public setX(value: number) {
        this.mX = value;
    }

    public setY(value: number) {
        this.mY = value;
    }

    public getX() {
        return this.mX;
    }

    public getY() {
        return this.mY;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (Math.PI * Math.pow(this.mRadius, 2)).toFixed(3);
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.mRadius).toFixed(3);
    }
}
