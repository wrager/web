
function main() {
	const shapeManager = new ShapeManager();
	
	const selectShapeSpinner = document.getElementById("type_shape");
	selectShapeSpinner.onchange = function () {
		shapeManager.choiseShape(selectShapeSpinner.selectedIndex);
	};

	const drawShapeButton = document.getElementById("draw_shape_button");
	drawShapeButton.onclick = function () {
		shapeManager.draw();
	};
};