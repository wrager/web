class Circle extends Shape {
    private _centerX: number;
    private _centerY: number;
    private _radius: number;

    constructor() {
        super();
        this._radius = 0;
        this._centerX = 0;
        this.centerY = 0;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    public get radius() {
        return this._radius;
    }

    public set centerX(value: number) {
        this._centerX = value;
    }

    public get centerX() {
        return this._centerX;
    }
    
    public set centerY(value: number) {
        this._centerY = value;
    }

    public get centerY() {
        return this._centerY;
    }

    public calculateArea() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }

    public drawShape() {
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.stroke();
        ctx.fill();
    }
}