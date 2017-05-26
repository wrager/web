export abstract class Shape {
    private fillColor: string;
    private borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    public getFillColor(): string {
        return this.fillColor;
    }

    public setFillColor(value: string) {
        this.fillColor = value;
    }

    public getBorderColor(): string {
        return this.borderColor;
    }

    public setBorderColor(value: string) {
        this.borderColor = value;
    }

    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
    public abstract draw(context: CanvasRenderingContext2D): void;
}
