function setShapeColor(shape: Shape, fillColor: string, borderColor: string) {
    shape.setFillColor(fillColor);
    shape.setBorderColor(borderColor);
}

class Canvas {

    private circle: Circle;
    private rectangle: Rectangle;
    private triangle: Triangle;

    constructor() {
        this.circle = null;
        this.rectangle = null;
        this.triangle = null;
    }

    public updateCircle(center: Point, radius: number, fillColor: string, borderColor: string) {
        if (this.circle === null) {
            this.circle = new Circle();
        }

        this.circle.setCenter(center);
        this.circle.setRadius(radius);

        setShapeColor(this.circle, fillColor, borderColor);
    }

    public updateRectangle(leftTop: Point, rightButtom: Point, fillColor: string, borderColor: string) {
        if (this.rectangle === null) {
            this.rectangle = new Rectangle();
        }

        this.rectangle.setLeftTop(leftTop);
        this.rectangle.setRightButtom(rightButtom);

        setShapeColor(this.rectangle, fillColor, borderColor);
    }

    public updateTriangle(first: Point, second: Point, third: Point, fillColor: string, borderColor: string) {
        if (this.triangle === null) {
            this.triangle = new Triangle();
        }

        this.triangle.setFirstVertex(first);
        this.triangle.setSecondVertex(second);
        this.triangle.setThirdVertex(third);

        setShapeColor(this.triangle, fillColor, borderColor);
    }

    public getTriangle() {
        return this.triangle;
    }

    public getCircle() {
        return this.circle;
    }

    public getRectangle() {
        return this.rectangle;
    }
}
