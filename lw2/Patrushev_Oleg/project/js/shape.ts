//------------------------------------ Shape class

class Shape {

    private fillColor: string;
    private borderColor: string;

    constructor() {
        this.fillColor = "#000000";
        this.borderColor = "#000000";
    }

    setFillColor(value) {
        this.fillColor = value;
    }

    getFillColor() {
        return this.fillColor;
    }

    setBorderColor(value) {
        this.borderColor = value;
    }

    getBorderColor() {
        return this.borderColor;
    }

    draw(context) {

    }

    calculateArea() {

    }

    calculatePerimeter() {

    }
}