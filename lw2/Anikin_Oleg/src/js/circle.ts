class Circle extends Shape {

    private radius: number;
    private center: Point;

    constructor() {
        super();
        this.radius = 0;
        this.center = new Point(0, 0);
    }

    public setRadius(newRadius) {
        this.radius = newRadius;
    }

    public getRadius() {
        return this.radius;
    }

    public setCenter(newCenter) {
        this.center = newCenter;
    }

    public getCenter() {
        return this.center;
    }

    public draw(context) {
        context.beginPath();
        context.arc(this.center.getX(), this.center.getY(), this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
    }

    public calculatePerimeter() {
        return (2 * Math.PI * this.radius).toFixed(2);
    }
}
