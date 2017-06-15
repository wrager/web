abstract class Shape {
    private mFillColor: string;
    private mBorderColor: string;

    constructor() {
        this.mFillColor = "#000000";
        this.mFillColor = "#000000";
    }

    public setFillColor(value: string) {
        this.mFillColor = value;
    }
    public getFillColor() {
        return this.mFillColor;
    }

    public setBorderColor(value: string) {
        this.mBorderColor = value;
    }

    public getBorderColor() {
        return this.mBorderColor;
    }

    public abstract draw(context: CanvasRenderingContext2D): any;

    public abstract calculateArea(): any;

    public abstract calculatePerimeter(): any;
}
