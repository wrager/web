function Shape(){
    this.mFillColor = "#000000";
    this.mBorderColor = "#000000"
}

Shape.prototype.setFillColor = function (value){
    this.mFillColor = value;
}

Shape.prototype.setBorderColor = function (value){
    this.mBorderColor = value;
}

Shape.prototype.getFillColor = function (){
    return this.mFillColor;
}

Shape.prototype.getBorderColor = function (){
    return this.mBorderColor;
}

Shape.prototype.draw = function (context) {context;}

Shape.prototype.calculateArea = function () {}

Shape.prototype.calculatePerimeter = function () {}