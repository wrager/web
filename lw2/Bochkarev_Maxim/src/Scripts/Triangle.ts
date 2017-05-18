class Triangle extends Shape {
    private _X1: number;
    private _X2: number;
    private _X3: number;
    private _Y1: number;
    private _Y2: number;
    private _Y3: number;
    // tslint:disable-next-line:max-line-length
    constructor(X1: number, X2: number, X3: number, Y1: number, Y2: number, Y3: number, fillColor: string, borderColor: string) {
        this._X1 = X1;
        this._X2 = X2;
        this._X3 = X3;
        this._Y1 = Y1;
        this._Y2 = Y2;
        this._Y3 = Y3;
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

    public calculatePerimeter(): number {
        const sideA = this.getLineLength(this.X1, this.Y1, this.X2, this.Y2);
        const sideB = this.getLineLength(this.X1, this.Y1, this.X3, this.Y3);
        const sideC = this.getLineLength(this.X3, this.Y3, this.X2, this.Y2);

        return sideA + sideB + sideC;
    }

    public calculateArea(): number {
        const halfPerimeter = this.calculatePerimeter() / 2;
        const sideA = this.getLineLength(this.X1, this.Y1, this.X2, this.Y2);
        const sideB = this.getLineLength(this.X1, this.Y1, this.X3, this.Y3);
        const sideC = this.getLineLength(this.X3, this.Y3, this.X2, this.Y2);

        return Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
    }

    public draw(context): void {
        context.beginPath();
        context.moveTo(this.X1, this.Y1);
        context.lineTo(this.X2, this.Y2);
        context.lineTo(this.X3, this.Y3);
        context.closePath();
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
    get X3(): number {
        return this._X3;
    }

    set X3(value: number) {
        this._X3 = value;
    }

    get Y3(): number {
        return this._Y3;
    }

    set Y3(value: number) {
        this._Y3 = value;
    }

    private getLineLength(X1, Y1, X2, Y2): number {
        return Math.sqrt(Math.pow(X2 - X1, 2) + (Math.pow(Y2 - Y1, 2)));
    }
}
