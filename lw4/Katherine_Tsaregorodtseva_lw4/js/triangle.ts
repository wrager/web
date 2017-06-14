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

    public getX(index: number) {
        switch (index) {
            case 1:
                return this.x1;
            case 2:
                return this.x2;
            case 3:
                return this.x3;
            default:
                return undefined;
        }
    }
    public getY(index: number) {
        switch (index) {
            case 1:
                return this.y1;
            case 2:
                return this.y2;
            case 3:
                return this.y3;
            default:
                return undefined;
        }
    }

    public setX(index: number, X: number) {
        switch (index) {
            case 1:
                this.x1 = X;
                break;
            case 2:
                this.x2 = X;
                break;
            case 3:
                this.x3 = X;
                break;
        }
    }
    public setY(index: number, Y: number) {
        switch (index) {
            case 1:
                this.y1 = Y;
                break;
            case 2:
                this.y2 = Y;
                break;
            case 3:
                this.y3 = Y;
                break;
        }

    }
    public drawFigure() {
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.moveTo(this.x1,this.y1);
        ctx.lineTo(this.x2,this.y2);
        ctx.lineTo(this.x3,this.y3);
        ctx.fillStyle = this.getFillColor();
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = this.getBorderWidth();
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    public calculateArea() {
        var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
        var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
        var p2 = (a + b + c) / 2;
        var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
        return s.toFixed(2);
    }
    public calculatePerimeter() {
        var a = Math.sqrt(Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2));
        var b = Math.sqrt(Math.pow(this.x3 - this.x2, 2) + Math.pow(this.y3 - this.y2, 2));
        var c = Math.sqrt(Math.pow(this.x1 - this.x3, 2) + Math.pow(this.y1 - this.y3, 2));
        return (a + b + c).toFixed(2);
    }
}
