
class Circle extends AbstractShape {

    private x: number;
    private y: number;
    private r: number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.r = 0;
    }

    public setRadius(value: number) {
        this.r = value;
    }

    public getRadius() {
        return this.r;
    }

    public setX(value: number) {
        this.x = value;
    }

    public getX() {
        return this.x;
    }

    public setY(value: number) {
        this.y = value;
    }

    public getY() {
        return this.y;
    }

    public calculatePerimeter(): number {
        return Math.PI * this.r * 2;
    }

    public calculateArea(): number {
        return Math.pow(this.r, 2) * Math.PI;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.strokeStyle = this.getBorderColor();
        context.fill();
        context.stroke();
    }
}
