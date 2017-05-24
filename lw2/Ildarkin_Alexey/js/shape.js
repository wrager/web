function Shape() {
    this._fillColor = "#000000";
    this._borderColor = "#000000";
}

Shape.prototype = {
    setFillColor: function (value) {
        this._fillColor = value;
    },

    getFillColor: function () {
        return this._fillColor;
    },

    setBorderColor: function (value) {
        this._borderColor = value;
    },

    getBorderColor: function () {
        return this._borderColor;
    }
}