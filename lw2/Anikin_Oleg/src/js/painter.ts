const FONT_SIZE = 16;
const INFO_TEXT_COLOR = "#000000";

function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return Number((getElement(id) as HTMLInputElement).value);
}

function getElementValueStr(id) {
    return (getElement(id) as HTMLInputElement).value;
}

function showElement(id: string, show: boolean) {
    const element = getElement(id);
    if (show) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

function getComboValue() {
    const combobox = getElement("shape-combobox") as HTMLSelectElement;
    return combobox.options[combobox.selectedIndex].value;
}

class Painter {

    private canvas: Canvas;
    private cssCavas: HTMLCanvasElement;
    private drawContext: CanvasRenderingContext2D;
    private selectedShapeType: string;

    constructor() {
        this.canvas = new Canvas();

        this.cssCavas = undefined;
        this.drawContext =  undefined;
        this.selectedShapeType = undefined;
    }

    public onShapeSelect() {
        showElement("circle-form", false);
        showElement("rectangle-form", false);
        showElement("triangle-form", false);

        this.selectedShapeType = getComboValue();
        if (this.selectedShapeType === "Circle") {
            showElement("circle-form", true);
        } else if (this.selectedShapeType === "Rectangle") {
            showElement("rectangle-form", true);
        } else if (this.selectedShapeType === "Triangle") {
            showElement("triangle-form", true);
        }

        showElement("draw", true);
    }

    public onDrawButtonClick() {
        if (this.cssCavas === undefined) {
            this.cssCavas = getElement("canvas") as HTMLCanvasElement;
            this.drawContext = this.cssCavas.getContext("2d");
        }

        this.drawContext.clearRect(0, 0, this.cssCavas.width, this.cssCavas.height);

        const fillColor = getElementValueStr("fill-color");
        const borderColor = getElementValueStr("border-color");

        if (this.selectedShapeType === "Circle") {
            this.canvas.updateCircle(new Point(getElementValue("circle-x"), getElementValue("circle-y"))
            , getElementValue("circle-r"), fillColor, borderColor);

            this.drawShape(this.canvas.getCircle());

        } else if (this.selectedShapeType === "Rectangle") {
            this.canvas.updateRectangle(new Point(getElementValue("rectangle-x1"), getElementValue("rectangle-y1"))
            , new Point(getElementValue("rectangle-x2"), getElementValue("rectangle-y2"))
            , fillColor, borderColor);

            this.drawShape(this.canvas.getRectangle());

        } else if (this.selectedShapeType === "Triangle") {
            this.canvas.updateTriangle(new Point(getElementValue("triangle-x1"), getElementValue("triangle-y1"))
            , new Point(getElementValue("triangle-x2"), getElementValue("triangle-y2"))
            , new Point(getElementValue("triangle-x3"), getElementValue("triangle-y3"))
            , fillColor, borderColor);

            this.drawShape(this.canvas.getTriangle());
        }
    }

    public drawShapeInfo(shape: Shape) {
        this.drawContext.font = FONT_SIZE + "px Arial";
        this.drawContext.fillStyle = INFO_TEXT_COLOR;
        this.drawContext.fillText("Perimeter: " + shape.calculatePerimeter(), 400, (FONT_SIZE * 2 + FONT_SIZE) + 500);
        this.drawContext.fillText("Area: " + shape.calculateArea(), 400, (FONT_SIZE * 2 + FONT_SIZE * 2) + 500);
    }

    public drawShape(shape: Shape) {
        shape.draw(this.drawContext);
        this.drawShapeInfo(shape);
    }
}
