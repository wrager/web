class Rectangle extends Shape {
    private _leftTopX: number;
    private _leftTopY: number;
    private _width: number;
    private _height: number;

    constructor() {
        super();
        this._leftTopX = 0;
        this._leftTopY = 0;
        this._width = 0;
        this._height = 0;
    }

    public set leftTopX(value: number) {
        this._leftTopX = value;
    }

    public get leftTopX() {
        return this._leftTopX;
    }

    public set leftTopY(value: number) {
        this._leftTopY = value;
    }

    public get leftTopY() {
        return this._leftTopY;
    }

    public set width(value: number) {
        this._width = value;
    }

    public get width() {
        return this._width;
    }

    public set height(value: number) {
        this._height = value;
    }

    public get height() {
        return this._height;
    }

    public calculateArea() {
        return (this.width * this.height).toFixed(2);
    }

    public calculatePerimeter() {
        return (2 * (this.width + this.height)).toFixed(2);
    }

    public drawShape() {
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.leftTopX, this.leftTopY, this.width, this.height);
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.strokeRect(this.leftTopX, this.leftTopY, this.width, this.height);
    }
}