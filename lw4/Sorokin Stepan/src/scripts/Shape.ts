abstract class Shape {
    private fillColor: string;
    private borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    public setFillColor(value: any) {
        this.fillColor = value;
    }

    public getFillColor() {
        return this.fillColor;
    }

    public setBorderColor(value: any) {
        this.borderColor = value;
    }

    public getBorderColor() {
        return this.borderColor;
    }

    public abstract draw(): void;
    public abstract calculateArea(): number;

    public abstract calculatePerimeter(): number;
    public abstract getShapeName(): string;
}
