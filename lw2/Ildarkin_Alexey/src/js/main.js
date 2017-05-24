var INFO_TEXT_COLOR = "#000000";

function onShapeTypeSelected() {
    hideElementById("circle-selector-type");
    hideElementById("rectangle-selector-type");
    hideElementById("triangle-selector-type");
    showElementById("apply-btn");

    var selectedValue = getSelectorValue();
    if (selectedValue == "Circle") {
        showElementById("circle-selector-type");
    } else if (selectedValue == "Rectangle") {
        showElementById("rectangle-selector-type");
    } else if (selectedValue == "Triangle") {
        showElementById("triangle-selector-type");
    }
}

function onApplyClicked() {
    var canvas = getElementById("canvas");
    var context = canvas.getContext("2d");
    var selectedValue = getSelectorValue();
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (selectedValue == "Circle") {
        shape = createCircle();
    } else if (selectedValue == "Rectangle") {
        shape = createRectangle();
    } else if (selectedValue == "Triangle") {
        shape = createTriangle();
    }

    shape.draw(context);
    drawShapeInfo(context, shape);
}

function getElementById(id) {
    return document.getElementById(id);
}

function getElementValueById(id) {
    return getElementById(id).value;
}

function hideElementById(id) {
    var element =  getElementById(id);
    element.style.display = "none";
}

function showElementById(id) {
    var element =  getElementById(id);
    element.style.display = "block"
}

function getSelectorValue() {
    var selector = getElementById("shape-selector");
    return selector.options[selector.selectedIndex].value;
}

document.getElementById("shape-selector").onchange = onShapeTypeSelected;
document.getElementById("apply-btn").onclick = onApplyClicked;