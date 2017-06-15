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
        this.x2 = 0;
        this.x3 = 0;
        this.y1 = 0;
        this.y2 = 0;
        this.y3 = 0;
    }

    public setX1(value: number) {
        this.x1 = value;
    }

    public setX2(value: number) {
        this.x2 = value;
    }

    public setX3(value: number) {
        this.x3 = value;
    }

    public setY1(value: number) {
        this.y1 = value;
    }

    public setY2(value: number) {
        this.y2 = value;
    }

    public setY3(value: number) {
        this.y3 = value;
    }

    public getX1() {
        return this.x1;
    }

    public getX2() {
        return this.x2;
    }

    public getX3() {
        return this.x3;
    }

    public getY1() {
        return this.y1;
    }

    public getY2() {
        return this.y2;
    }

    public getY3() {
        return this.y3;
    }

    public draw() {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
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

    public subAbsNum(num1: number, num2: number) {
        return (Math.abs(Math.abs(num2) - Math.abs(num1)));
    }

    public lengthSide(x1: number, y1: number, x2: number, y2: number) {
        return (Math.sqrt(Math.pow(this.subAbsNum(x1, x2), 2) + Math.sqrt(Math.pow(this.subAbsNum(y1, y2), 2))));
    }

    public getSides() {
        const sideA = this.lengthSide(this.x1, this.y1, this.x2, this.y2);
        const sideB = this.lengthSide(this.x2, this.y2, this.x3, this.y3);
        const sideC = this.lengthSide(this.x3, this.y3, this.x1, this.y1);
        return [sideA, sideB, sideC];
    }

    public calculateArea() {
        const p = this.calculatePerimeter() / 2;
        const sides = this.getSides();

        return (Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])));
    }

    public calculatePerimeter() {
        const sides = this.getSides();
        return (sides[0] + sides[1] + sides[2]);
    }

    public getShapeName() {
        return "Triangle";
    }
}
