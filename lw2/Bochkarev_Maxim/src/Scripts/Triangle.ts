
class Triangle extends AbstractShape {

    private X1: number;
    private X2: number;
    private X3: number;
    private Y1: number;
    private Y2: number;
    private Y3: number;

    constructor() {
        super();
        this.X1 = 0;
        this.X2 = 0;
        this.X3 = 0;
        this.Y1 = 0;
        this.Y2 = 0;
        this.Y3 = 0;
    }
    public setX1(value: number) {
        this.X1 = value;
    }

    public getX1() {
        return this.X1;
    }

    public setX2(value: number) {
        this.X2 = value;
    }

    public getX2() {
        return this.X2;
    }

    public setX3(value: number) {
        this.X3 = value;
    }

    public getX3() {
        return this.X3;
    }

    public setY1(value: number) {
        this.Y1 = value;
    }

    public getY1() {
        return this.Y1;
    }

    public setY2(value: number) {
        this.Y2 = value;
    }

    public getY2() {
        return this.Y2;
    }

    public setY3(value: number) {
        this.Y3 = value;
    }

    public getY3() {
        return this.Y3;
    }
    public calculatePerimeter(): number {
        const sideA = this.getLineLength(this.X1, this.Y1, this.X2, this.Y2);
        const sideB = this.getLineLength(this.X1, this.Y1, this.X3, this.Y3);
        const sideC = this.getLineLength(this.X3, this.Y3, this.X2, this.Y2);

        return sideA + sideB + sideC;
    }

    public calculateArea(): number {
        const halfPerimeter = this.calculatePerimeter() / 2;
        const sideA = this.getLineLength(this.X1, this.Y1, this.X2, this.Y2);
        const sideB = this.getLineLength(this.X1, this.Y1, this.X3, this.Y3);
        const sideC = this.getLineLength(this.X3, this.Y3, this.X2, this.Y2);

        return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.moveTo(this.X1, this.Y1);
        context.lineTo(this.X2, this.Y2);
        context.lineTo(this.X3, this.Y3);
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.strokeStyle = this.getBorderColor();
        context.fill();
        context.stroke();
    }

    private getLineLength(X1: number, Y1: number, X2: number, Y2: number): number {
        return Math.sqrt(Math.pow(X2 - X1, 2) + (Math.pow(Y2 - Y1, 2)));
    }
}
