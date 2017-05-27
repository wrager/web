class CRectangle extends CShape {
    private _x1: number;
    private _y1: number;
    private _x2: number;
    private _y2: number;

    constructor() {
        super();
    	this._x1 = 0;
    	this._x2 = 0;
    	this._y1 = 0;
    	this._y2 = 0;
    }

public setX1(value) {
    this._x1 = value;
};


public setX2(value) {
    this._x2 = value;
};

	
public setY1(value) {
    this._y1 = value;
};

public setY2(value) {
    this._y2 = value;
};

public getX1() {
    return this._x1;
};

public getX2() {
    return this._x2;
};

public getY1() {
    return this._y1;
};

public getY2() {
    return this._y2;
};

public getWidth() {
    return (Math.abs(this._x2) - Math.abs(this._x1));
};

public getHeight() {
    return (Math.abs(this._y2) - Math.abs(this._y1));
};

public draw() : void {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    context.beginPath();
    context.rect(this._x1, this._y1, this.getWidth(), this.getHeight());
    context.fillStyle = this.getFillColor();
    context.fill();
    context.strokeStyle = this.getBorderColor();
    context.stroke();
};


public calculateArea() : number {
    return (this.getWidth() * this.getHeight());
};

public calculatePerimeter() : number {
    return (this.getWidth() * 2 + this.getHeight() * 2);
};
};