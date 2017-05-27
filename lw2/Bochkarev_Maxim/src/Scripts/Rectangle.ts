
class Rectangle extends AbstractShape {

    private X1: number;
    private X2: number;
    private Y1: number;
    private Y2: number;

    constructor() {
        super();
        this.X1 = 0;
        this.X2 = 0;
        this.Y1 = 0;
        this.Y2 = 0;
    }
    public setX1(value: number) {
        this.X1 = value;
    }

    public getX1() {
        return this.X1;
    }

    public setY1(value: number) {
        this.Y1 = value;
    }

    public getY1() {
        return this.Y1;
    }

    public setX2(value: number) {
        this.X2 = value;
    }

    public getX2() {
        return this.X2;
    }

    public setY2(value: number) {
        this.Y2 = value;
    }

    public getY2() {
        return this.Y2;
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
        context.fillStyle = this.getFillColor();
        context.strokeStyle = this.getBorderColor();
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
