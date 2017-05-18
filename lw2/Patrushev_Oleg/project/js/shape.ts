abstract class Shape {

    private fillColor: string;
    private borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    public setFillColor(value) {
        this.fillColor = value;
    }

    public getFillColor() {
        return this.fillColor;
    }

    public setBorderColor(value) {
        this.borderColor = value;
    }

    public getBorderColor() {
        return this.borderColor;
    }

    public abstract draw(context);

    public abstract calculateArea();

    public abstract calculatePerimeter();
}
