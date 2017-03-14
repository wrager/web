
function Start() {
	const shapeManager = new ShapeManager();

	const addShapeButton = document.getElementById("add_shape");
	addShapeButton.onclick = function () {
		var select = document.getElementById("shape_type"); 
		var type = select.options[select.selectedIndex].value;
		shapeManager.addShape(type);
	};

	const selectShapeButton = document.getElementById("type_shape");
	selectShapeButton.onchange = function () {
		shapeManager.choiseShape(selectShapeButton.selectedIndex);
	};

	const drawShapeButton = document.getElementById("draw_shape");
	drawShapeButton.onclick = function () {
		shapeManager.draw();
	};
};