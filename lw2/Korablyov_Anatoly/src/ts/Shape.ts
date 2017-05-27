abstract class CShape {
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

    abstract draw(): void;
    abstract calculateArea(): number;

    abstract calculatePerimeter(): number;
}