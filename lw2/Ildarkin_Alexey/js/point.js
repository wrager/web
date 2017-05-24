function Point() {
    this.x = 0;
    this.y = 0;
}

createPoint = function(x, y) {
    var point = new Point();
    point.x = x;
    point.y = y;

    return point;
}
