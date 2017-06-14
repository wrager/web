function Start() {
    const shapeManager = new ShapeManager();

    const addShapeButton = document.getElementById("add_shape");
    addShapeButton.onclick = () => {
        const select = document.getElementById("shape_type") as HTMLSelectElement;
        const type = select.options[select.selectedIndex].nodeValue;
        shapeManager.addShape(type);
    };

    const selectShapeButton = document.getElementById("type_shape") as HTMLSelectElement;
    selectShapeButton.onchange = () => {
        shapeManager.choiseShape(selectShapeButton.selectedIndex);
    };

    const drawShapeButton = document.getElementById("draw_shape");
    drawShapeButton.onclick = () => {
        shapeManager.draw();
    };

}
