//------------------------------------ Circle class

class Circle extends Shape {

    private x: number;
    private y: number;
    private r: number;

    constructor() {
        super()
        this.x = 0;
        this.y = 0;
        this.r = 0;
    }

    setRadius(value) {
        this.r = value;
    }

    getRadius() {
        return this.r;
    }

    setX(value) {
        this.x = value;
    }

    getX() {
        return this.x;
    }

    setY(value) {
        this.y = value;
    }

    getY() {
        return this.y;
    }

    draw (context) {
        context.beginPath();
        context.arc(this.getX(), this.getY(), this.getRadius(), 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    calculateArea() {
        return (Math.PI * Math.pow(this.r, 2)).toFixed(3);
    }

    calculatePerimeter() {
        return (2 * Math.PI * this.r).toFixed(3);
    }
}