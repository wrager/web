class Triangle extends Shape {

    private x1: number;
    private y1: number;
    private x2: number;
    private y2: number;
    private x3: number;
    private y3: number;

    constructor() {
        super();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.x3 = 0;
        this.y3 = 0;
    }

    public setX1(value: number) {
        this.x1 = value;
    }

    public getX1() {
        return this.x1;
    }

    public setX2(value: number) {
        this.x2 = value;
    }

    public getX2() {
        return this.x2;
    }

    public setX3(value: number) {
        this.x3 = value;
    }

    public getX3() {
        return this.x3;
    }

    public setY1(value: number) {
        this.y1 = value;
    }

    public getY1() {
        return this.y1;
    }

    public setY2(value: number) {
        this.y2 = value;
    }

    public getY2() {
        return this.y2;
    }

    public setY3(value: number) {
        this.y3 = value;
    }

    public getY3() {
        return this.y3;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.getX1(), this.getY1());
        context.lineTo(this.getX2(), this.getY2());
        context.lineTo(this.getX3(), this.getY3());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea(): number {
        const x = this.calculatePerimeter() / 2;
        const lines = this.getSides();

        return +(Math.sqrt(x * (x - lines[0]) * (x - lines[1]) * (x - lines[2]))).toFixed(0);
    }

    public calculatePerimeter(): number {
        const lines = this.getSides();

        return +(lines[0] + lines[1] + lines[2]).toFixed(0);
    }

    private getLineLength(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

    private getSides() {
        const firstLine = this.getLineLength(this.getX1(), this.getY1(), this.getX2(), this.getY2());
        const secondLine = this.getLineLength(this.getX1(), this.getY1(), this.getX3(), this.getY3());
        const thirdLine = this.getLineLength(this.getX2(), this.getY2(), this.getX3(), this.getY3());

        return [firstLine, secondLine, thirdLine];
    }
}
