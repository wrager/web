class ShapeManager {
    private canvasElement: any;
    private settingElement: any;
    private ctx: any;
    private currentShape: any;
    private settingField: any;
    private shapes: any;

    constructor() {
        this.canvasElement = document.getElementById("canvas");
        this.settingElement = document.getElementById("setting");
        this.ctx = this.canvasElement.getContext("2d");

        this.currentShape = null;
        this.settingField = undefined;

        this.shapes = [];

        const colorShape = document.getElementById("colorshape");
        colorShape.onchange = function() {
            const value = colorShape.value;
            if (this.currentShape && (value !== "")) {
                this.currentShape.setFillColor(value);
            }
        }.bind(this);

        const colorBorder = document.getElementById("colorborder");
        colorBorder.onchange = function() {
            const value = colorBorder.value;
            if (this.currentShape && (value !== "")) {
                this.currentShape.setBorderColor(value);
            }
        }.bind(this);
    }

    public clearCanvas() {
        const height = this.canvasElement.offsetHeight;
        const width = this.canvasElement.offsetWidth;
        this.ctx.clearRect(0, 0, width, height);
    }

    public clearOutData() {
        this.outputData("", "");
    }

    public addShape(type: any) {
        let shape;
        switch (type) {
        case TRIANGLE:
            shape = new Triangle(TRIANGLE);
            break;
        case RECTANGLE:
            shape = new Rectangle(RECTANGLE);
            break;
        case CIRCLE:
            shape = new Circle(CIRCLE);
            break;
        default:
            throw new Error("Unknown shape type");
        }
        this.shapes.push(shape);
        this.addShapeToSelectElement(type);
    }

    public choiseShape(index: number) {
        this.clearCanvas();
        this.clearOutData();
        this.fillColorsFields("", "");

        if (this.settingField) {
            this.settingElement.removeChild(this.settingField);
            this.settingField.remove();
        }
        this.createSettingField();

        this.currentShape = this.shapes[index - 1];
        const type = (index === 0) ? "" : this.currentShape.type();

        const settingTitle = document.getElementById("settingtitle");
        settingTitle.textContent = "Setting " + type;

        switch (type) {
            case TRIANGLE:
                this.initSettingForTriangle();
                break;
            case RECTANGLE:
                this.initSettingForRectangle();
                break;
            case CIRCLE:
                this.initSettingForCircle();
                break;
            default:
                this.currentShape = undefined;
                break;
        }

        if (this.currentShape) {
            this.fillColorsFields(this.currentShape.getFillColor(), this.currentShape.getBorderColor());
        }
    }

    public draw() {
        this.clearCanvas();
        if (this.currentShape) {
            this.applyColors();
            this.currentShape.draw(this.ctx);
            this.outputData(this.currentShape.calculatePerimeter(), this.currentShape.calculateArea());
        }
    }

    public fillColorsFields(colorShapeValue: any, colorBorderValue: any) {
        document.getElementById("colorshape").value = colorShapeValue;
        document.getElementById("colorborder").value = colorBorderValue;
    }

    public addShapeToSelectElement(type: any) {
        const option = document.createElement("option");
        option.setAttribute("value", type);
        option.textContent = type;
        const select = document.getElementById("typeshape");
        select.appendChild(option);
    }

    public applyColors() {
        this.ctx.strokeStyle = this.currentShape.getBorderColor();
        this.ctx.fillStyle = this.currentShape.getFillColor();
    }

    public outputData(firstData: any, secondData: any) {
        const perimeterContainer = document.getElementById("perimeter");
        perimeterContainer.textContent = firstData;

        const areaContainer = document.getElementById("area");
        areaContainer.textContent = secondData;
    }

    public initSettingForRectangle() {
        this.createInputField(
            "x1", function(value: number) {
                this.currentShape.setX1(value);
            }, this.currentShape.getX1());
        this.createInputField(
            "y1", function(value: number) {
                this.currentShape.setY1(value);
            }, this.currentShape.getY1());
        this.createInputField(
            "x2", function(value: number) {
                this.currentShape.setX2(value);
            }, this.currentShape.getX2());
        this.createInputField(
            "y2", function(value: number) {
                this.currentShape.setY2(value);
            }, this.currentShape.getY2());
    }

    public initSettingForTriangle() {
        this.createInputField(
            "x1", function(value: number) {
                this.currentShape.setX1(value);
            }, this.currentShape.getX1());
        this.createInputField(
            "y1", function(value: number) {
                this.currentShape.setY1(value);
            }, this.currentShape.getY1());
        this.createInputField(
            "x2", function(value: number) {
                this.currentShape.setX2(value);
            }, this.currentShape.getX2());
        this.createInputField(
            "y2", function(value: number) {
                this.currentShape.setY2(value);
            }, this.currentShape.getY2());
        this.createInputField(
            "x3", function(value: number) {
                this.currentShape.setX3(value);
            }, this.currentShape.getX3());
        this.createInputField(
            "y3", function(value: number) {
                this.currentShape.setY3(value);
            }, this.currentShape.getY3());
    }

    public initSettingForCircle() {
        this.createInputField(
            "centerX", function(value: number) {
                this.currentShape.setCenterX(value);
            }, this.currentShape.getCenterX());
        this.createInputField(
            "centerY", function(value: number) {
                this.currentShape.setCenterY(value);
            }, this.currentShape.getCenterY());
        this.createInputField(
            "radius", function(value: number) {
                this.currentShape.setRadius(value);
            }, this.currentShape.getRadius());
    }

    public createInputField(text: string, handler: any, value: number) {
        const input = document.createElement("input");
        input.setAttribute("class", "input");
        input.setAttribute("placeholder", text);

        input.onchange = () => {
            this.draw();
        };

        if (value > 0) {
            input.value = value;
        }
        input.onchange = () => {
            handler(Number(input.value));
        };
        this.settingField.appendChild(input);
    }

    public createSettingField() {
        this.settingField = document.createElement("div");
        this.settingField.setAttribute("class", "settingfield");
        this.settingElement.appendChild(this.settingField);
    }
}
