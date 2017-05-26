function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

include("Scripts/Rectangle.js");
include("Scripts/Circle.js");
include("Scripts/Triangle.js");
include("Scripts/Variables.js")

function Start() {
    this._sample = new Application();
    this._sample.Start();
}

function Application() {
    this._count = 0;
    this._ctx = this.getValueById("canvas").getContext('2d');
    this._selectedShape = null;
    this._shapes = [];
}

Application.prototype = Object.create(Application.prototype);

Application.prototype.Start = function() {
    this.SettingButtonToAddShape();
    this.SettingContext();
}

Application.prototype.SettingContext = function() {

    this._ctx.canvas.width = document.documentElement.clientWidth - 50;
    this._ctx.canvas.height = document.documentElement.clientHeight / 2 - 20;
}

Application.prototype.AddShape = function() {
    var select = this.getListElementsByClassName("selection").item(0);
    var value = select.options[select.selectedIndex].text;

    if (value == RECTANGLE) {
        this._shapes.push(new Rectangle());
        this.AddOptionSelect(RECTANGLE);
    } else if (value == TRIANGLE) {
        this._shapes.push(new Triangle());
        this.AddOptionSelect(TRIANGLE);
    } else {
        this._shapes.push(new Circle());
        this.AddOptionSelect(CIRCLE);
    }

    this._shapes[this._shapes.length - 1].setContext(this._ctx);
}

Application.prototype.AddOptionSelect = function(value) {
    var selection = this.getListElementsByClassName("selectionExShapes").item(0);
    var item = document.createElement(OPTION);
    item.value = this._count++;
    item.innerHTML = value;
    selection.options.add(item);
}

Application.prototype.SettingButtonToAddShape = function() {
    var button = this.getValueById("button");
    button.onclick = this.AddShape.bind(this);

    var selection = this.getListElementsByClassName("selectionExShapes").item(0);
    selection.onblur = this.ChooseShape.bind(this);

    var readyButton = this.getListElementsByClassName("Ready").item(0);
    readyButton.onclick = this.ApplyChanges.bind(this);


}

Application.prototype.ChangeColor = function() {
    var fColor = this.getValueById("fillColor").value;
    var bColor = this.getValueById("borderColor").value;

    this._selectedShape.SetFillColor(fColor);
    this._selectedShape.SetBorderColor(bColor);
    this.Draw();
    this._selectedShape.draw();
    this.DrawText(this._selectedShape.calculateArea(), this._selectedShape.calculatePerimeter());
}

Application.prototype.ApplyChanges = function() {
    var selection = this.getListElementsByClassName("selectionExShapes").item(0);
    var type = selection.options[selection.selectedIndex].text;

    if (type == CIRCLE) {
        this._selectedShape.setX(this.getValueById(ATTRIBUTES_CIRCLE[0]).value);
        this._selectedShape.setY(this.getValueById(ATTRIBUTES_CIRCLE[1]).value);
        this._selectedShape.setRadius(this.getValueById(ATTRIBUTES_CIRCLE[2]).value);
    } else if (type == TRIANGLE) {
        this._selectedShape.setX1(this.getValueById(ATTRIBUTES_TRIANGLE[0]).value);
        this._selectedShape.setY1(this.getValueById(ATTRIBUTES_TRIANGLE[1]).value);
        this._selectedShape.setX2(this.getValueById(ATTRIBUTES_TRIANGLE[2]).value);
        this._selectedShape.setY2(this.getValueById(ATTRIBUTES_TRIANGLE[3]).value);
        this._selectedShape.setX3(this.getValueById(ATTRIBUTES_TRIANGLE[4]).value);
        this._selectedShape.setY3(this.getValueById(ATTRIBUTES_TRIANGLE[5]).value);
    } else {
        this._selectedShape.setX1(this.getValueById(ATTRIBUTES_RECTANGLE[0]).value);
        this._selectedShape.setY1(this.getValueById(ATTRIBUTES_RECTANGLE[1]).value);
        this._selectedShape.setX2(this.getValueById(ATTRIBUTES_RECTANGLE[2]).value);
        this._selectedShape.setY2(this.getValueById(ATTRIBUTES_RECTANGLE[3]).value);
    }
    this.ChangeColor();
    this.Draw();
    this._selectedShape.draw();
    this.DrawText(this._selectedShape.calculateArea(), this._selectedShape.calculatePerimeter());
}

Application.prototype.ChooseShape = function() {
    var selection = this.getListElementsByClassName("selectionExShapes").item(0);
    var settingShape = this.getListElementsByClassName("settingShapes").item(0);
    var value = selection.options[selection.selectedIndex].value;
    var type = selection.options[selection.selectedIndex].text;
    this._selectedShape = this._shapes[selection.value];

    this.RemoveLastElements(settingShape);

    if (type == RECTANGLE) {
        settingShape.appendChild(this.CreateOptionsSetting(4, ATTRIBUTES_RECTANGLE, this._selectedShape));
    } else if (type == TRIANGLE) {
        settingShape.appendChild(this.CreateOptionsSetting(6, ATTRIBUTES_TRIANGLE, this._selectedShape));
    } else {
        settingShape.appendChild(this.CreateOptionsSetting(3, ATTRIBUTES_CIRCLE, this._selectedShape));
    }
    this.Draw();
    this._selectedShape.draw();
    this.DrawText(this._selectedShape.calculateArea(), this._selectedShape.calculatePerimeter());
}

Application.prototype.RemoveLastElements = function(setting) {
    var params = setting.getElementsByClassName("params");
    for (var i = params.length - 1; i != -1; --i) {
        setting.removeChild(params.item(i));
    }
}

Application.prototype.CreateOptionsSetting = function(number, values, shape) {
    var listValues = shape.getValuesParameters();
    var setting = document.createElement("div");
    setting.className = PARAMS;
    for (var i = 0; i != number; ++i) {
        setting.appendChild(this.GetNewOptionSetting(values[i], "setting", listValues[i]));
    }
    return setting;
}

Application.prototype.GetNewOptionSetting = function(id, className, value) {
    var option = document.createElement("input");
    option.className = className;
    option.type = "input";
    option.id = id;
    option.value = value;

    return option;
}

Application.prototype.DrawText = function(area, perimeter) {
    this._ctx.fillStyle = "#000000";
    this._ctx.font = "italic 15pt Arial";
    this._ctx.textBaseline = "top";
    this._ctx.fillText("Area : " + area, this._ctx.canvas.width - this._ctx.canvas.width / 4, 0);
    this._ctx.fillText("Perimeter : " + perimeter, this._ctx.canvas.width - this._ctx.canvas.width / 4, 40);
}

Application.prototype.getValueById = function(id) {
    return document.getElementById(id);
}

Application.prototype.getListElementsByClassName = function(className) {
    return document.getElementsByClassName(className);
}

Application.prototype.Draw = function() {
    this._ctx.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    for (var i = 0; i != this._shapes.length; ++i) {
        this._shapes[i].draw();
    }
}