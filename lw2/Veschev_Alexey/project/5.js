switch (selectedValue) {
       case "Circle":
        circle = new Circle();
         circle.setFillColor(getElementValue("input-fill-color"));
         circle.setBorderColor(getElementValue("input-border-color"));
         circle.setRadius(getElementValue("circle-r"));
         circle.setCenter(getElementValue("circle-x"), getElementValue("circle-y"));
         break;

       case "Rectangle":
         rectangle = new Rectangle();
         rectangle.setFillColor(getElementValue("input-fill-color"));
         rectangle.setBorderColor(getElementValue("input-border-color"));
         rectangle.setFirstPoint(getElementValue("rectangle-x1"), getElementValue("rectangle-y1"));
         rectangle.setSecondPoint(getElementValue("rectangle-x2"), getElementValue("rectangle-y2"));
         break;

       case "Triangle":
         triangle = new Triangle();
         triangle.setFillColor(getElementValue("input-fill-color"));
         triangle.setBorderColor(getElementValue("input-border-color"));
         triangle.setFristPoint(getElementValue("triangle-x1"), getElementValue("triangle-y1"));
         triangle.setSecondPoint(getElementValue("triangle-x2"), getElementValue("triangle-y2"));
         triangle.setThirdPoint(getElementValue("triangle-x3"), getElementValue("triangle-y3"));
         break;
         default: break;
}