class Triangle extends Shape {
    private firstVertex: Point;
    private secondVertex: Point;
    private thirdVertex: Point;

    constructor() {
        super();
        this.firstVertex = new Point(0, 0);
        this.secondVertex = new Point(0, 0);
        this.thirdVertex = new Point(0, 0);
    }

    public setFirstVertex(nFirstVertex) {
        this.firstVertex = nFirstVertex;
    }

    public setSecondVertex(nSecondVertex) {
        this.secondVertex = nSecondVertex;
    }

    public setThirdVertex(nThirdVertex) {
        this.thirdVertex = nThirdVertex;
    }

    public getLineSegmentLength(point1, point2) {
        return Math.sqrt(Math.pow(point2.getX() - point1.getX(), 2) + (Math.pow(point2.getY() - point1.getY(), 2)));
    }

    public getSides() {
        const line1 = this.getLineSegmentLength(this.firstVertex, this.secondVertex);
        const line2 = this.getLineSegmentLength(this.firstVertex, this.thirdVertex);
        const line3 = this.getLineSegmentLength(this.secondVertex, this.thirdVertex);

        return [line1, line2, line3];
    }

    public draw(context) {
        context.beginPath();
        context.moveTo(this.firstVertex.getX(), this.firstVertex.getY());
        context.lineTo(this.secondVertex.getX(), this.secondVertex.getY());
        context.lineTo(this.thirdVertex.getX(), this.thirdVertex.getY());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculatePerimeter() {
        const lines = this.getSides();
        return lines[0] + lines[1] + lines[2];
    }

    public calculateArea() {
        const p = this.calculatePerimeter() / 2;
        const lines = this.getSides();

        return(Math.sqrt(p * (p - lines[0]) * (p - lines[1]) * (p - lines[2]))).toFixed(2);
    }
}
