abstract class Shape {
    private fillColor: string;
    private borderColor: string;
    private borderLine: number;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
        this.borderLine = 1;
    }
    public setFillColor(value: string){
        this.fillColor = value;
    }
    public setBorderColor(value: string){
        this.borderColor = value;
    }
    public setBorderWidth(value: number){
        this.borderLine = value;
    }
    public getFillColor(){
        return this.fillColor;
    }
    public getBorderColor() {
        return this.borderColor;
    }
    public getBorderWidth() {
        return this.borderLine;
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
        ctx.lineTo(1000, 25);
        ctx.stroke();
    }
    public draw(){
        this.drawFigure();
        this.drawParameters();
    }

    public abstract calculateArea(): any;
    public abstract calculatePerimeter(): any;
    public abstract drawFigure(): any;
}
