class Rectangle extends Shape {
    private _X1: number;
    private _X2: number;
    private _Y1: number;
    private _Y2: number;

    constructor(X1: number, X2: number, Y1: number, Y2: number, fillColor: string, borderColor: string) {
        this._X1 = X1;
        this._X2 = X2;
        this._Y1 = Y1;
        this._Y2 = Y2;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    public calculatePerimeter(): number {
        return ((this.getHeight() + this.getWidth()) * 2);
    }

    public calculateArea(): number {
        return (this.getWidth() * this.getHeight());
    }

    public draw(context): void {
        const xCoord = Math.min(this.X1, this.X2);
        const yCoord = Math.min(this.Y1, this.Y2);
        context.beginPath();
        context.rect(xCoord, yCoord, this.getWidth(), this.getHeight());
        context.fillStyle = this.fillColor;
        context.strokeStyle = this.borderColor;
        context.fill();
        context.stroke();
    }

    get X1(): number {
        return this._X1;
    }

    set X1(value: number) {
        this._X1 = value;
    }

    get X2(): number {
        return this._X2;
    }

    set X2(value: number) {
        this._X2 = value;
    }

    get Y1(): number {
        return this._Y1;
    }

    set Y1(value: number) {
        this._Y1 = value;
    }

    get Y2(): number {
        return this._Y2;
    }

    set Y2(value: number) {
        this._Y2 = value;
    }

    private getHeight(): number {
        return Math.abs(this.Y1 - this.Y2);
    }

    private getWidth(): number {
        return Math.abs(this.X1 - this.X2);
    }
}
