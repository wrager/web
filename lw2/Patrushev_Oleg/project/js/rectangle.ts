//------------------------------------ Rectangle class

class Rectangle extends Shape {

    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;

    constructor() {
        super()
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
    }

    setX1(value) {
        this.x1 = value;
    }

    getX1() {
        return this.x1;
    }

    setY1(value) {
        this.y1 = value;
    }

    getY1() {
        return this.y1;
    }

    setX2(value) {
        this.x2 = value;
    }

    getX2() {
        return this.x2;
    }

    setY2(value) {
        this.y2 = value;
    }

    getY2() {
        return this.y2;
    }

    getWidth() {
        return Math.abs(this.getX1() - this.getX2());
    }

    getHeight() {
        return Math.abs(this.getY1() - this.getY2());
    }

    draw(context) {
        var tLeftX = Math.min(this.getX1(), this.getX2());
        var tLeftY = Math.min(this.getY1(), this.getY2());
        context.beginPath();
        context.rect(tLeftX, tLeftY, this.getWidth(), this.getHeight());
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    calculateArea() {
        return (this.getWidth() * this.getHeight()).toFixed(3);
    }

    calculatePerimeter() {
        return (this.getWidth() * 2 + this.getHeight() * 2).toFixed(3);
    }
}