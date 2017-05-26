
var painter = new Painter();

function onShapeCallback()
{
    painter.onShapeSelect();
}

function onDrawCallback()
{
    painter.onDrawButtonClick();
}

document.getElementById("shape-combobox").onchange = onShapeCallback;
document.getElementById("draw").onclick = onDrawCallback;