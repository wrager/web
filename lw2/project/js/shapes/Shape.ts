abstract class Shape {
    protected fillColor: string;
    protected borderColor: string;
    protected type: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
        this.type = "";
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

    public abstract draw(context: any): any;

    public abstract calculateArea(): any;

    public abstract calculatePerimeter(): any;
}
