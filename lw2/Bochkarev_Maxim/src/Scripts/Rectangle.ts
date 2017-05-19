import {Shape} from "./Shape";

export class Rectangle extends Shape {

    private X1: number;
    private X2: number;
    private Y1: number;
    private Y2: number;

    constructor(parameters: {X1: number, X2: number, Y1: number, Y2: number, fillColor: string, borderColor: string}) {
        super();
        this.X1 = parameters.X1;
        this.X2 = parameters.X2;
        this.Y1 = parameters.Y1;
        this.Y2 = parameters.Y2;
        this.fillColor = parameters.fillColor;
        this.borderColor = parameters.borderColor;
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
