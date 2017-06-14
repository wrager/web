class Rectangle extends Shape {
    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;

    constructor() {
        super();
        this.x1 = 0;
        this.x2 = 0;
        this.y1 = 0;
        this.y2 = 0;
    }

    public setX1(value: number) {
        this.x1 = value;
    }

    public setX2(value: number) {
        this.x2 = value;
    }

    public setY1(value: number) {
        this.y1 = value;
    }

    public setY2(value: number) {
        this.y2 = value;
    }

    public getX1() {
        return this.x1;
    }

    public getX2() {
        return this.x2;
    }

    public getY1() {
        return this.y1;
    }

    public getY2() {
        return this.y2;
    }

    public getWidth() {
        return (Math.abs(this.x2) - Math.abs(this.x1));
    }

    public getHeight() {
        return (Math.abs(this.y2) - Math.abs(this.y1));
    }

    public draw(): void {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.beginPath();
        context.rect(this.x1, this.y1, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }
    public calculateArea(): number {
        return (this.getWidth() * this.getHeight());
    }

    public calculatePerimeter(): number {
        return (this.getWidth() * 2 + this.getHeight() * 2);
    }
}
