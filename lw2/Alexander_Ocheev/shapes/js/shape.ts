abstract class Shape {
    private _fillColor: string;
    private _borderColor: string;
    private _borderLine: number;

    constructor() {
        this._fillColor = "#000000";
        this._borderColor = "#000000";
        this._borderLine = 1;
    }

    public set fillColor(value: string) {
            this._fillColor = value;
    }

    public get fillColor() {
        return this._fillColor;
    }

    public set borderColor(value: string) {
        this._borderColor = value;
    }

    public get borderColor() {
        return this._borderColor;
    }

    public set borderLine(value: number) {
            this._borderLine = value;
    }

    public get borderLine() {
        return this._borderLine;
    }

    private drawParameters(){
        var canvas = <HTMLCanvasElement>document.getElementById("canvasText");
        var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, 1000, 25);

        var s = this.calculateArea();
        var p = this.calculatePerimeter();
        ctx.font = "15px Segoe UI";
        ctx.fillText('S : ' + s + ', P : ' + p, 10, 20);

        ctx.moveTo(0, 25);
        ctx.lineTo(1500, 25);
        ctx.stroke();
    }

    public draw(){
        this.drawShape();
        this.drawParameters();
    }

    public abstract calculateArea(): string;
    public abstract calculatePerimeter(): string;
    public abstract drawShape(): void;
}