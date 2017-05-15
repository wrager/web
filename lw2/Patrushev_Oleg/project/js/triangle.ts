//------------------------------------ Triangle class

class Triangle extends Shape {

    private p1X: number;
    private p1Y: number;
    private p2X: number;
    private p2Y: number;
    private p3X: number;
    private p3Y: number;

    private getLineLength = function(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
        }

    private getSides () {
            var line1 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP2X(), this.getP2Y());
            var line2 = this.getLineLength(this.getP1X(), this.getP1Y(), this.getP3X(), this.getP3Y());
            var line3 = this.getLineLength(this.getP2X(), this.getP2Y(), this.getP3X(), this.getP3Y());

            return [line1, line2, line3];
        }

    constructor() {
        super();
        this.p1X = 0;
        this.p1Y = 0;
        this.p2X = 0;
        this.p2Y = 0;
        this.p3X = 0;
        this.p3Y = 0;
    }

    setP1X(value) {
        this.p1X = value;
    }

    getP1X() {
        return this.p1X
    }

    setP2X(value) {
        this.p2X = value;
    }

    getP2X() {
        return this.p2X
    }

    setP3X(value) {
        this.p3X = value;
    }

    getP3X() {
        return this.p3X
    }

    setP1Y(value) {
        this.p1Y = value;
    }

    getP1Y() {
        return this.p1Y
    }

    setP2Y(value) {
        this.p2Y = value;
    }

    getP2Y() {
        return this.p2Y
    }

    setP3Y(value) {
        this.p3Y = value;
    }

    getP3Y() {
        return this.p3Y
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.getP1X(), this.getP1Y());
        context.lineTo(this.getP2X(), this.getP2Y());
        context.lineTo(this.getP3X(), this.getP3Y());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    calculateArea() : number {
        var p = this.calculatePerimeter() / 2;
        var lines = this.getSides(); 

        return +(Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(3);
    }

    calculatePerimeter() : number {
        var lines = this.getSides();

        return +(lines[0] + lines[1] + lines[2]).toFixed(3);
    }
}