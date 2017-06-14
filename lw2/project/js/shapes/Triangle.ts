class Triangle extends Shape {
    private Position1: Position;
    private Position2: Position;
    private Position3: Position;

    constructor(type: string) {
        super();
        this.type = type;
        this.Position1 = Position.createPoint(0, 0);
        this.Position2 = Position.createPoint(0, 0);
        this.Position3 = Position.createPoint(0, 0);
    }

    public setFirstPosition(value: Position) {
        this.Position1 = value;
    }

    public getFirstPosition() {
        return this.Position1;
    }

    public setSecondPosition(value: Position) {
        this.Position2 = value;
    }

    public getSecondPosition() {
        return this.Position2;
    }

    public setThirdPosition(value: Position) {
        this.Position3 = value;
    }

    public getThirdPosition() {
        return this.Position3;
    }

    public draw(ctx: any) {
        ctx.beginPath();
        ctx.moveTo(this.getFirstPosition().getX(), this.getFirstPosition().getY());
        ctx.lineTo(this.getSecondPosition().getX(), this.getSecondPosition().getY());
        ctx.lineTo(this.getThirdPosition().getX(), this.getThirdPosition().getY());
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    public calculateArea() {
        const perimeter = this.calculatePerimeter();
        const first = this.getSide(this.Position1, this.Position2);
        const second = this.getSide(this.Position2, this.Position3);
        const third = this.getSide(this.Position1, this.Position3);
        return Math.abs(Math.sqrt(perimeter * (perimeter - first) * (perimeter - third) * (perimeter - second)));
    }

    public calculatePerimeter(): number {
        const first = this.getSide(this.Position1, this.Position2);
        const third = this.getSide(this.Position1, this.Position3);
        const second = this.getSide(this.Position2, this.Position3);
        return first + third + second;
    }

    private getLineLength(x1: any, y1: any, x2: any, y2: any): number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
    }

    private getSide = function(Position1: Position, Position2: Position): number {
        return Math.sqrt(Math.pow((this.Position2.getX() - this.Position1.getX()), 2)
        + Math.pow((this.Position2.getY() - this.Position1.getY()), 2));
    };

}
