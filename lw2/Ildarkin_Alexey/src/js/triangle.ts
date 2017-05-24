class Triangle extends Shape {
    private point1: Point;
    private point2: Point;
    private point3: Point;

    public setFirstPoint(value: any) {
        this.point1 = value;
    }

    public getFirstPoint() {
        return this.point1;
    }

    public setSecondPoint(value: any) {
        this.point2 = value;
    }

    public getSecondPoint() {
        return this.point2;
    }

    public setThirdPoint(value: any) {
        this.point3 = value;
    }

    public getThirdPoint() {
        return this.point3;
    }

    public draw(context: any) {
        context.beginPath();
        context.moveTo(this.getFirstPoint().getX(), this.getFirstPoint().getY());
        context.lineTo(this.getSecondPoint().getX(), this.getSecondPoint().getY());
        context.lineTo(this.getThirdPoint().getX(), this.getThirdPoint().getY());
        context.closePath();
        context.fillStyle = this.getFillColor();
        context.fill();
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }

    public calculateArea() {
        const perimeter = this.calculatePerimeter() / 2;
        const lines = this.getSides();

        return (Math.sqrt(perimeter * (perimeter - lines[0]) *
            (perimeter - lines[1]) * (perimeter - lines[2]))).toFixed(1);
    }

    public calculatePerimeter() {
        const lines = this.getSides();
        return +(lines[0] + lines[1] + lines[2]).toFixed(1);
    }

    private getLineLength(x1: any, y1: any, x2: any, y2: any) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

    private getSides() {
        const line1 = this.getLineLength(this.getFirstPoint().getX(), this.getFirstPoint().getY(),
            this.getSecondPoint().getX(), this.getSecondPoint().getY());
        const line2 = this.getLineLength(this.getFirstPoint().getX(), this.getFirstPoint().getY(),
            this.getThirdPoint().getX(), this.getThirdPoint().getY());
        const line3 = this.getLineLength(this.getSecondPoint().getX(), this.getSecondPoint().getY(),
            this.getThirdPoint().getX(), this.getThirdPoint().getY());

        return [line1, line2, line3];
    }
}
