
addGridItems();

function addGridItems(){
    const parent = document.getElementById("gridContainer");

    while(parent.children.length) parent.removeChild(parent.children[0]);
}