
function getElementValueById(id) {
    return document.getElementById(id).value;
}

function getElementById(id) {
    return document.getElementById(id);
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