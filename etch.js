// JavaScript source code

const numOfSquares = document.getElementById("userInput").value;
let userColourChoice = "#000000";
let isDrawing = false;
let gridLines = true;
let rainbowPencil = false;



function grid(numOfSquares) {

    let rowName = "row";
    let rowCount = 0;
    const grid = document.createElement("div");
    grid.id = "grid";
    document.getElementById("gridParent").appendChild(grid);


    for (m = 0; m < numOfSquares; m++) {
        const row = document.createElement("div");
        row.className = "row";
        row.id = "row" + m;
        document.getElementById("grid").appendChild(row)[m];


        // Create row
        for (i = 0; i < numOfSquares; i++) {
            const box = document.createElement("div");
            box.className = "box";
            box.id = "box" + i;

            let size = boxSize(numOfSquares);
            box.style.height = size + "px";
            box.style.width = size + "px";

            box.addEventListener("click", function () { draw(box) });
            box.addEventListener("mouseover", function () { changeColour(row.id, box.id) });
            document.getElementsByClassName("row")[rowCount].appendChild(box)[i];
        }
        rowCount++;
    }
}
   
function changeColour(rowId, boxId) {
    if (isDrawing == true && rainbowPencil == false) {
        let box = document.getElementById(rowId).getElementsByClassName("box")[boxId];;
        box.style.backgroundColor = userColourChoice;
    }
    if (isDrawing == true && rainbowPencil == true) {
        let box = document.getElementById(rowId).getElementsByClassName("box")[boxId];;
        box.style.backgroundColor = rainbowColour();
    }
}
function colourChoice(colour) {
    userColourChoice = colour;
    rainbowPencil = false;
}
function draw(box) {
    if (isDrawing == false) {
        isDrawing = true;
        box.style.backgroundColor = userColourChoice;
    }
    else {
        isDrawing = false;
    }
}
function boxSize(numOfSquares) {
    let length = 450 / numOfSquares;
    return length;
}
function clearGrid() {
    const grid = document.getElementById("grid");
    grid.remove();
    gridCreated = false;
    document.getElementById("numOfSquares").disabled = false;
}
function deactivateBtn() {
    document.getElementById("numOfSquares").disabled = true;
}
function rainbowColour() {
    let colour = '#';
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}
function rainbowOn() {
    if (rainbowPencil == false) {
        rainbowPencil = true;
    }
    else {
        rainbowPencil = false;
    }
}



grid(numOfSquares);

