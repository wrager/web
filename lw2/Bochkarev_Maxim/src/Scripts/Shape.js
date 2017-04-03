function Shape() {
    this.fillColor = '#000000';
    this.borderColor = '#000000';
}

Shape.prototype = {
    getFillColor: function () {
        return this.fillColor;
    },

    setFillColor: function (color) {
        this.fillColor = color;
    },

    getBorderColor: function () {
        return this.borderColor;
    },

    setBorderColor: function (color) {
        this.borderColor = color;
    }
};