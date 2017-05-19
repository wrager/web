import {Shape} from "./Shape";

export class Circle extends Shape {

    private _X: number;
    private _Y: number;
    private _R: number;
    // tslint:disable-next-line:max-line-length
    constructor(parameters: {centerX: number, centerY: number, radius: number, fillColor: string, borderColor: string}) {
        super();
        this._X = parameters.centerX;
        this._Y = parameters.centerY;
        this._R = parameters.radius;
        this.fillColor = parameters.fillColor;
        this.borderColor = parameters.borderColor;
    }

    public calculatePerimeter(): number {
        return Math.PI * this._R * 2;
    }

    public calculateArea(): number {
        return Math.pow(this._R, 2) * Math.PI;
    }

    public draw(context: CanvasRenderingContext2D): void {
        context.beginPath();
        context.arc(this._X, this._Y, this._R, 0, 2 * Math.PI, false);
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    }
}
