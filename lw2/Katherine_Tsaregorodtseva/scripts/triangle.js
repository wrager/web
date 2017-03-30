function Vertix(X, Y) {
    this.x = X;
    this.y = Y;
    function setVertix(X, Y) {
        this.x = X;
        this.y = Y;
    }
    function setVertixX(X) {
        this.x = X;
    }
    function setVertixY(Y) {
        this.y = Y;
    }
}
function Triangle() {
    var vert1 = new Vertix(0, 0);
    var vert2 = new Vertix(0, 0);
    var vert3 = new Vertix(0, 0);
}
Triangle.prototype.__proto__ = Shape.prototype;

Triangle.prototype.getVertex = function(index) {
    switch (index) {
        case 1:
            return this.vert1;
        case 2:
            return this.vert2;
        case 3:
            return this.vert3;
        default:
            return undefined;
    }
}

Triangle.prototype.setVertexX = function(index, X) {
    switch (index) {
        case 1:
            this.vert1.setVertexX(X);
        case 2:
            return this.vert2.setVertexX(X);
        case 3:
            return this.vert3.setVertexX(X);
        default:
            return undefined;
    }
}
Triangle.prototype.setVertexY = function(index, Y) {
    switch (index) {
        case 1:
            this.vert1.setVertexY(Y);
        case 2:
            return this.vert2.setVertexY(Y);
        case 3:
            return this.vert3.setVertexY(Y);
        default:
            return undefined;
    }
}