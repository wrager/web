class Rectangle extends Shape {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(){
        super();
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    public setX(value: number) {
        this.x = value;
    }
    public setY(value: number) {
       this.y = value;
   }
   public setWidth(value: number) {
       this.width = value;
   }
   public setHeight(value: number) {
       return this.height = value;
   }
   public getY() {
        return this.y;
    }
    public getX() {
       return this.x;
   }
   public getWidth() {
       return this.width;
   }
   public getHeight() {
       return this.height;
   }
   public calculateArea() {
        return (this.width * this.height).toFixed(2);
    }
    public calculatePerimeter() {
        return (2 * (this.width + this.height)).toFixed(2);
    }
    public drawFigure() {
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.fillStyle = this.getFillColor();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeStyle = this.getBorderColor();
        ctx.lineWidth = this.getBorderWidth();
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
