
function getElementValueById(id) {
    return document.getElementById(id).value;
}

function getElementById(id) {
    return document.getElementById(id);
}

function getCurrentSelectedOptionValue() {
    var select = getElementById("selectShape");
    return select.options[select.selectedIndex].value;
}

function setCurrentValueVisible(select) {
    getElementById(select.options[select.selectedIndex].value).style.display = 'inline';
}

function resetDependingContent() {
    e = getElementById("selectShape");
    for (i = 0; i < e.options.length; i++) {
        getElementById(e.options[i].value).style.display = 'none';
    }
    setCurrentValueVisible(e);
}

function isElementFilled(element) {
    return (element && element.value);
}

function getIntValueIfFilled(id) {
    var element = getElementById(id);
    if(isElementFilled(element)) {
        return parseInt(element.value);
    }
    return false;
}