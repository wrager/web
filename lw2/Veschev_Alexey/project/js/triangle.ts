class Triangle extends Shape {

    private mX1: number;
    private mY1: number;
    private mX2: number;
    private mY2: number;
    private mX3: number;
    private mY3: number;

     constructor() {
        super();
        this.mX1 = 0;
        this.mY1 = 0;
        this.mX2 = 0;
        this.mY2 = 0;
        this.mX3 = 0;
        this.mY3 = 0;
     }

     public setX1(value: number) {
        this.mX1 = value;
     }

     public setY1(value: number) {
        this.mY1 = value;
     }

     public setFristPoint(x: number, y: number) {
         this.mX1 = x;
         this.mY1 = y;
     }

     public setX2(value: number) {
        this.mX2 = value;
     }

     public setY2(value: number) {
        this.mY2 = value;
     }

     public setSecondPoint(x: number, y: number) {
         this.mX2 = x;
         this.mY2 = y;
     }

     public setX3(value: number) {
        this.mX3 = value;
     }

     public setY3(value: number) {
        this.mY3 = value;
     }

     public setThirndPoint(x: number, y: number) {
         this.mX3 = x;
         this.mY3 = y;
     }

     public getX1() {
         return this.mX1;
     }

     public getX2() {
         return this.mX2;
     }

     public getX3() {
         return this.mX3;
     }

     public getY1() {
         return this.mY1;
     }

     public getY2() {
         return this.mY2;
     }

     public getY3() {
         return this.mY3;
     }

     public draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.moveTo(this.getX1(), this.getY1());
        context.lineTo(this.getX2(), this.getY2());
        context.lineTo(this.getX3(), this.getY3());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea(): number {
        const p = this.calculatePerimeter() / 2;
        const lines = this.getSides();

        return +(Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(3);
    }

    public calculatePerimeter(): number {
        const lines = this.getSides();

        return +(lines[0] + lines[1] + lines[2]).toFixed(3);
    }

      private getLineLength(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

     private getSides() {
        const line1 = this.getLineLength(this.getX1(), this.getY1(), this.getX2(), this.getY2());
        const line2 = this.getLineLength(this.getX1(), this.getY1(), this.getX3(), this.getY3());
        const line3 = this.getLineLength(this.getX2(), this.getY2(), this.getX3(), this.getY3());

        return [line1, line2, line3];
    }
}
