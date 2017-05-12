function getElementNumberValue(elem) {
    return (isNumber(getElementValue(elem)) ? getElementValue(elem) : 0);
}

function getElementColorValue(elem) {
    return (isColor(getElementValue(elem)) ? getElementValue(elem) : "#000000");
}
function getElement(id) {
    return document.getElementById(id);
}

function getElementValue(id) {
    return getElement(id).value;
}

function isNumber(value) {
    return !(Number(value) !== Number(value));
}

function isColor(value) {
    return value.match(/^#[0-9A-F]{6}$/);
}

function showElement(elemId) {
    getElement(elemId).style.display = "block";
}

function hideElement(elemId) {
    getElement(elemId).style.display = "none";
}