class Triangle extends Shape {

    private X1: number;
    private X2: number;
    private X3: number;
    private Y1: number;
    private Y2: number;
    private Y3: number;
    // tslint:disable-next-line:max-line-length
    constructor(X1: number, X2: number, X3: number, Y1: number, Y2: number, Y3: number, fillColor: string, borderColor: string) {
        super();
        this.X1 = X1;
        this.X2 = X2;
        this.X3 = X3;
        this.Y1 = Y1;
        this.Y2 = Y2;
        this.Y3 = Y3;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
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
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    }

    private getLineLength(X1: number, Y1: number, X2: number, Y2: number): number {
        return Math.sqrt(Math.pow(X2 - X1, 2) + (Math.pow(Y2 - Y1, 2)));
    }
}
