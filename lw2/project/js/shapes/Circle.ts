class Circle extends Shape {
    private centerX: number;
    private centerY: number;
    private radius: number;

    constructor(type: string) {
        super();
        this.centerX = 0;
        this.centerY = 0;
        this.radius = 0;
        this.type = type;
    }

    public setRadius(value: any) {
        this.radius = value;
    }

    public getRadius() {
        return this.radius;
    }

    public setCenterX(value: number) {
        this.centerX = value;
    }

    public getCenterX() {
        return this.centerX;
    }

    public setCenterY(value: number) {
        this.centerY = value;
    }

    public getCenterY() {
        return this.centerY;
    }

    public draw(ctx: any) {
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    public calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
