abstract class AbstractShape {

    private fillColor: string;
    private borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    public setFillColor(value: string) {
        this.fillColor = value;
    }

    public getFillColor() {
        return this.fillColor;
    }

    public setBorderColor(value: string) {
        this.borderColor = value;
    }

    public getBorderColor() {
        return this.borderColor;
    }

    public abstract draw(context: CanvasRenderingContext2D): void;
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
}
