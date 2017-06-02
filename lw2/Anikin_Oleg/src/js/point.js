function Point() {
    this._x = 0;
    this._y = 0;
}

function createPoint(x1, y1) {
    var point = new Point();
    point._x = x1;
    point._y = y1;

    return point;
}