// JavaScript source code

// Global Variables
const numOfSquares = document.getElementById("userInput").value;
let userColourChoice = "#000000";
let isDrawing = false;
let rainbowPencil = false;
let gridLines = true;

// Creates grid with user's required number of squares. 
// numOfSquares is an int. 
function grid(numOfSquares) {
    let rowName = "row";
    let rowCount = 0;
    // Create grid
    const grid = document.createElement("div");
    grid.id = "grid";
    document.getElementById("gridParent").appendChild(grid);

    // This prevents input exceeding range. Is placed here otherwise clearGrid() does not work.
    if (numOfSquares > 40 || numOfSquares < 1) {
        alert("The grid range is 1 to 40. Please enter new number.");
        return;
    }

    // Create boxes to form the grid
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

            // Set size of rows and boxes to fit 620px grid
            let size = boxSize(numOfSquares);
            size = size + "px";
            box.style.height = size;
            box.style.maxHeight = size;
            box.style.width = size;
            box.style.maxWidth = size;
            row.style.height = size;
            row.style.minHeight = size;
            row.style.maxHeight = size;

            // Events to start drawing and change box colour 
            box.addEventListener("click", function () { draw(box) });
            box.addEventListener("mouseover", function () { changeColour(row.id, box.id) });

            // Add box to row
            document.getElementsByClassName("row")[rowCount].appendChild(box)[i];
        }
        rowCount++;
    }
    // Deactivate numOfSquares button to prevent user making multiple grids.
    deactivateBtn();
}

// Change colour of given box depending on whether pencil or rainbow pencil is selected.
// rowId is a string.
// boxId is a string.
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
// Set user colour choice and select pencil, not rainbow pencil.
function colourChoice(colour) {
    userColourChoice = colour;
    rainbowPencil = false;
}
// Click box div to either begin or stop drawing. 
// box is a div from a row within the grid.
function draw(box) {
    if (isDrawing == false) {
        isDrawing = true;
        if (rainbowPencil == false) {
            box.style.backgroundColor = userColourChoice;
        }
        else {
            box.style.backgroundColor = rainbowColour();
        }
    }
    else {
        isDrawing = false;
    }
}
// Calculate the length for the width and height of box class.
function boxSize(numOfSquares) {
    let length = 620 / numOfSquares;
    return length;
}
// Clear grid and activate user grid size input button.
function clearGrid() {
    const grid = document.getElementById("grid");
    grid.remove();
    gridCreated = false;
    document.getElementById("numOfSquares").disabled = false;
}
// Deactivate user grid size input button.
function deactivateBtn() {
    document.getElementById("numOfSquares").disabled = true;
}
// Select a random colour to use for rainbow pencil.
function rainbowColour() {
    let colour = '#';
    let letters = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}
// Switch to rainbow pencil.
function rainbowOn() {
    if (rainbowPencil == false) {
        rainbowPencil = true;
    }
}
// Change grid lines colour when gridLines button pressed.
function gridLinesOn() {
    let grid = document.getElementById("grid");
    let boxes = document.getElementById(grid.id).getElementsByClassName("box");;

    for (i = 0; i < boxes.length; i++) {
        if (gridLines == false) {
            boxes[i].style.borderColor = "grey";
        }
        else {
            boxes[i].style.borderColor = "transparent";
        }
    }

    // Change grid lines status to off or on.
    if (gridLines == false) {
        gridLines = true;
    }
    else {
        gridLines = false;
    }
}


