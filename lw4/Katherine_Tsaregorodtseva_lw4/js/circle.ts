class Circle extends Shape {
    private center_x: number;
    private center_y: number;
    private radius: number;

    constructor() {
        super();
        this.radius = 0;
        this.center_x = 0;
        this.center_y = 0;
    }
    public setRadius(value: number) {
        this.radius = value;
    }
    public getRadius() {
        return this.radius;
    }
    public getX() {
        return this.center_x;
    }
    public setX(value: number) {
        this.center_x = value;
    }
    public getY() {
        return this.center_y;
    }
    public setY(value: number) {
        this.center_y = value;
    }
    public calculateArea() {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
    public calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
    public drawFigure(){
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(this.center_x, this.center_y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.getFillColor();
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = this.getBorderWidth();
        ctx.stroke();
        ctx.fill();
    }
}
