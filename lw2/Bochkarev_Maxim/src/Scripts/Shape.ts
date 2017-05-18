abstract class Shape {
    protected fillColor: string;
    protected borderColor: string;
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
}
