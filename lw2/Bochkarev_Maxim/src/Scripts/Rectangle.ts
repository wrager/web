class Rectangle extends Shape {

    private X1: number;
    private X2: number;
    private Y1: number;
    private Y2: number;

    constructor(X1: number, X2: number, Y1: number, Y2: number, fillColor: string, borderColor: string) {
        super();
        this.X1 = X1;
        this.X2 = X2;
        this.Y1 = Y1;
        this.Y2 = Y2;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    public calculatePerimeter(): number {
        return ((this.getHeight() + this.getWidth()) * 2);
    }

    public calculateArea(): number {
        return (this.getWidth() * this.getHeight());
    }

    public draw(context: CanvasRenderingContext2D): void {
        const xCoord = Math.min(this.X1, this.X2);
        const yCoord = Math.min(this.Y1, this.Y2);
        context.beginPath();
        context.rect(xCoord, yCoord, this.getWidth(), this.getHeight());
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    }

    private getHeight(): number {
        return Math.abs(this.Y1 - this.Y2);
    }

    private getWidth(): number {
        return Math.abs(this.X1 - this.X2);
    }
}
