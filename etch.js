// JavaScript source code

const numOfSquares = document.getElementById("userInput").value;
let userColourChoice;

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
            box.addEventListener("click", function() { changeColour(row.id, box.id, userColourChoice) });
            document.getElementsByClassName("row")[rowCount].appendChild(box)[i];
        }
        rowCount++;
    }
}
function changeColour(rowId, boxId, userColourChoice) {
    let box = document.getElementById(rowId).getElementsByClassName("box")[boxId];;
    box.style.backgroundColor = userColourChoice;
    
}
function colourChoice(colour) {
    userColourChoice = colour;
}
grid(numOfSquares);

