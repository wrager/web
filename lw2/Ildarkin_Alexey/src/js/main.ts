let INFO_TEXT_COLOR = "#000000";
(document.getElementById("apply-btn") as HTMLElement).onclick = onApplyClicked;
(document.getElementById("shape-selector") as HTMLElement).onchange = onShapeTypeSelected;

function onShapeTypeSelected(ev: Event) {
    hideElementById("circle-selector-type");
    hideElementById("rectangle-selector-type");
    hideElementById("triangle-selector-type");
    showElementById("apply-btn");

    const selectedValue = getSelectorValue();
    if (selectedValue === "Circle") {
        showElementById("circle-selector-type");
    } else if (selectedValue === "Rectangle") {
        showElementById("rectangle-selector-type");
    } else {
        showElementById("triangle-selector-type");
    }
}

function onApplyClicked(ev: Event) {
    const canvas = getElementById("canvas") as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const selectedValue = getSelectorValue();
    context.clearRect(0, 0, canvas.width, canvas.height);

    let shape: Shape;
    if (selectedValue === "Circle") {
        shape = createCircle();
    } else if (selectedValue === "Rectangle") {
        shape = createRectangle();
    } else {
        shape = createTriangle();
    }
    if (shape != null) {
        shape.draw(context);
        drawShapeInfo(context, shape);
    }
}

function getElementById(id: any) {
    return document.getElementById(id);
}

function getElementValueById(id: any) {
    return (getElementById(id) as HTMLInputElement);
}

function hideElementById(id: any) {
    const element =  getElementById(id);
    if (element != null) {
        element.style.display = "none";
    }
}

function showElementById(id: any) {
    const element =  getElementById(id);
    if (element != null) {
        element.style.display = "block";
    }
}

function getSelectorValue() {
    const selector = getElementById("shape-selector") as HTMLSelectElement;
    return selector.options[selector.selectedIndex].value;
}
