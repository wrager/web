class Triangle extends Shape {
    private _aX: number;
    private _aY: number;
    private _bX: number;
    private _bY: number;
    private _cX: number;
    private _cY: number;

    constructor() {
        super();
        this._aX = 0;
        this._aY = 0;
        this._bX = 0;
        this._bY = 0;
        this._cX = 0;
        this._cY = 0;
    }

    public set aX(value: number) {
        this._aX = value;
    }

    public get aX() {
        return this._aX;
    }

    public set bX(value: number) {
        this._bX = value;
    }

    public get bX() {
        return this._bX;
    }

    public set cX(value: number) {
        this._cX = value;
    }

    public get cX() {
        return this._cX;
    }

    public set aY(value: number) {
        this._aY = value;
    }

    public get aY() {
        return this._aY;
    }

    public set bY(value: number) {
        this._bY = value;
    }

    public get bY() {
        return this._bY;
    }

    public set cY(value: number) {
        this._cY = value;
    }

    public get cY() {
        return this._cY;
    }

    public drawShape() {
        var c = <HTMLCanvasElement>document.getElementById("canvasShape");
        var ctx = c.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.moveTo(this.aX, this.aY);
        ctx.lineTo(this.bX, this.bY);
        ctx.lineTo(this.cX, this.cY);
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }

    public calculateArea() {
        var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
        var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
        var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
        var p2 = (a + b + c) / 2;
        var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
        return s.toFixed(2);
    }
    
    public calculatePerimeter() {
        var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
        var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
        var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
        return (a + b + c).toFixed(2);
    }
}