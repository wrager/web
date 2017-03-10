
function Start() {
	var shapeManager = new ShapeManager();

	var selectShapeButton = document.getElementById("select_shape");
	selectShapeButton.onclick = function () {
		var select = document.getElementById("type_shape"); // Получаем наш список
		var typeShape = select.options[select.selectedIndex].value;
		shapeManager.choiseShape(typeShape);
		shapeManager.clearCanvas();
	};

	var applyColorsButton = document.getElementById("apply_colors");
	applyColorsButton.onclick = function () {
		shapeManager.draw();
	};

	var drawShapeButton = document.getElementById("draw_shape");
	drawShapeButton.onclick = function () {
		shapeManager.draw();
	};

	
};