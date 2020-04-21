
initPage();

function buildGrid(rowlength = 16){
    const parent = document.getElementById("gridContainer");

    while(parent.children.length) parent.removeChild(parent.children[0]);

    let div = document.createElement("DIV");
    div.style.backgroundColor = "white";
    div.style.width = (100/rowlength) + "%";
    div.style.height = (100/rowlength) + "%";

    
    for(let i = 0; i < rowlength**2;  i++){
        let clone = div.cloneNode();
        clone.addEventListener('mouseover', function(){this.style.backgroundColor = "black";});
        parent.appendChild(clone);
    } 
}

function initPage(){
    buildGrid();
    document.getElementById("resetButton").addEventListener("click", buttonPrompt);
    document.getElementById("clearButton").addEventListener("click", clearGrid);
}

function buttonPrompt(){
    let input = prompt("enter a number between 1 and 100");

    if(!input)
        return;
        
    if(input < 1 || input > 100)
        return buttonPrompt();
    
    buildGrid(input);
}

function clearGrid(){
    const gridSize = Math.sqrt(document.getElementById("gridContainer").children.length);
    buildGrid(gridSize);
}
