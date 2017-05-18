class Circle extends Shape {
    private centerX: number;
    private centerY: number;
    private radius: number;

    constructor(centerX: number, centerY: number, radius: number, fillColor: string, borderColor: string) {
        super();
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    public calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    public calculateArea(): number {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    }
}
