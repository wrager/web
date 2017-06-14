var Shape = (function () {
    function Shape() {
        this._fillColor = "#000000";
        this._borderColor = "#000000";
        this._borderLine = 1;
    }
    Object.defineProperty(Shape.prototype, "fillColor", {
        get: function () {
            return this._fillColor;
        },
        set: function (value) {
            this._fillColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "borderColor", {
        get: function () {
            return this._borderColor;
        },
        set: function (value) {
            this._borderColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "borderLine", {
        get: function () {
            return this._borderLine;
        },
        set: function (value) {
            this._borderLine = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.drawParameters = function () {
        var canvas = document.getElementById("canvasText");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, 1000, 25);
        var s = this.calculateArea();
        var p = this.calculatePerimeter();
        ctx.font = "15px Segoe UI";
        ctx.fillText('S : ' + s + ', P : ' + p, 10, 20);
        ctx.moveTo(0, 25);
        ctx.lineTo(1000, 25);
        ctx.stroke();
    };
    Shape.prototype.draw = function () {
        this.drawShape();
        this.drawParameters();
    };
    return Shape;
}());
//# sourceMappingURL=shape.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        var _this = _super.call(this) || this;
        _this._radius = 0;
        _this._centerX = 0;
        _this.centerY = 0;
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "centerX", {
        get: function () {
            return this._centerX;
        },
        set: function (value) {
            this._centerX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "centerY", {
        get: function () {
            return this._centerY;
        },
        set: function (value) {
            this._centerY = value;
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.calculateArea = function () {
        return (Math.PI * this.radius * this.radius).toFixed(2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return (2 * Math.PI * this.radius).toFixed(2);
    };
    Circle.prototype.drawShape = function () {
        var c = document.getElementById("canvasShape");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.stroke();
        ctx.fill();
    };
    return Circle;
}(Shape));
//# sourceMappingURL=circle.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super.call(this) || this;
        _this._leftTopX = 0;
        _this._leftTopY = 0;
        _this._width = 0;
        _this._height = 0;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "leftTopX", {
        get: function () {
            return this._leftTopX;
        },
        set: function (value) {
            this._leftTopX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "leftTopY", {
        get: function () {
            return this._leftTopY;
        },
        set: function (value) {
            this._leftTopY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Rectangle.prototype.calculateArea = function () {
        return (this.width * this.height).toFixed(2);
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return (2 * (this.width * 1.0 + this.height * 1.0)).toFixed(2);
    };
    Rectangle.prototype.drawShape = function () {
        var c = document.getElementById("canvasShape");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.leftTopX, this.leftTopY, this.width, this.height);
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.strokeRect(this.leftTopX, this.leftTopY, this.width, this.height);
    };
    return Rectangle;
}(Shape));
//# sourceMappingURL=rectangle.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Triangle = (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        var _this = _super.call(this) || this;
        _this._aX = 0;
        _this._aY = 0;
        _this._bX = 0;
        _this._bY = 0;
        _this._cX = 0;
        _this._cY = 0;
        return _this;
    }
    Object.defineProperty(Triangle.prototype, "aX", {
        get: function () {
            return this._aX;
        },
        set: function (value) {
            this._aX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "bX", {
        get: function () {
            return this._bX;
        },
        set: function (value) {
            this._bX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "cX", {
        get: function () {
            return this._cX;
        },
        set: function (value) {
            this._cX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "aY", {
        get: function () {
            return this._aY;
        },
        set: function (value) {
            this._aY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "bY", {
        get: function () {
            return this._bY;
        },
        set: function (value) {
            this._bY = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "cY", {
        get: function () {
            return this._cY;
        },
        set: function (value) {
            this._cY = value;
        },
        enumerable: true,
        configurable: true
    });
    Triangle.prototype.drawShape = function () {
        var c = document.getElementById("canvasShape");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, 1000, 1000);
        ctx.beginPath();
        ctx.moveTo(this.aX, this.aY);
        ctx.lineTo(this.bX, this.bY);
        ctx.lineTo(this.cX, this.cY);
        ctx.fillStyle = this.fillColor;
        ctx.strokeStyle = this.borderColor;
        ctx.lineWidth = this.borderLine;
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };
    Triangle.prototype.calculateArea = function () {
        var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
        var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
        var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
        var p2 = (a + b + c) / 2;
        var s = Math.sqrt(p2 * (p2 - a) * (p2 - b) * (p2 - c));
        return s.toFixed(2);
    };
    Triangle.prototype.calculatePerimeter = function () {
        var a = Math.sqrt(Math.pow(this.bX - this.aX, 2) + Math.pow(this.bY - this.aY, 2));
        var b = Math.sqrt(Math.pow(this.cX - this.bX, 2) + Math.pow(this.cY - this.bY, 2));
        var c = Math.sqrt(Math.pow(this.aX - this.cX, 2) + Math.pow(this.aY - this.cY, 2));
        return (a + b + c).toFixed(2);
    };
    return Triangle;
}(Shape));
//# sourceMappingURL=triangle.js.map
window.onload = function () {
    changeField();
};
function changeField() {
    var shape = selectShape();
    document.getElementById("select-shape").onchange = function () {
        shape = selectShape();
    };
    var elements = document.getElementsByClassName("changed-prop");
    var _loop_1 = function (i, len) {
        var node = elements.item(i).id;
        document.getElementById(node).onchange = function () {
            changeShapeProp(node, shape, node);
        };
    };
    for (var i = 0, len = elements.length; i < len; i++) {
        _loop_1(i, len);
    }
}
function changeShapeProp(id, shape, fieldName) {
    if (shape[fieldName] !== null) {
        var element = document.getElementById(id);
        shape[fieldName] = element.value;
        shape.draw();
    }
}
function selectShape() {
    var select = document.getElementById("select-shape");
    var selected = select.options[select.selectedIndex].value;
    if (selected === "Triangle") {
        myOnSelect('triangle-props');
        return new Triangle();
    }
    else if (selected === "Circle") {
        myOnSelect('circle-props');
        return new Circle();
    }
    else if (selected === "Rectangle") {
        myOnSelect('rectangle-props');
        return new Rectangle();
    }
    return selected;
}
function myOnSelect(inpId) {
    makeVisible(inpId);
    clearChangedProps();
    clearCanvas();
}
function makeVisible(inpId) {
    var ids = ['rectangle-props', 'circle-props', 'triangle-props'];
    ids.forEach(function (element) {
        var el = document.getElementById(element);
        if (inpId == element) {
            el.style.visibility = 'visible';
            el.style.display = 'block';
        }
        else {
            el.style.visibility = 'hidden';
            el.style.display = 'none';
        }
    }, this);
}
function clearCanvas() {
    var c = document.getElementById("canvasShape");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
    c = document.getElementById("canvasText");
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 1000, 25);
}
function clearChangedProps() {
    var changedFields = document.getElementsByClassName('changed-prop');
    for (var i = 0, len = changedFields.length; i < len; i++) {
        var element = changedFields.item(i);
        element.value = '';
    }
}
//# sourceMappingURL=script.js.map