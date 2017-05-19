abstract class Shape {
    protected fillColor: string;
    protected borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
    public abstract draw(context: CanvasRenderingContext2D): void;
}
