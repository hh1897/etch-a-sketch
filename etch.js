// JavaScript source code

const numOfSquares = document.getElementById("userInput").value;

function grid(numOfSquares) {
    
    let rowName = "row";
    let rowCount = 0;
    const grid = document.createElement("div");
    grid.id = "grid";
    document.getElementById("gridParent").appendChild(grid);

    for (m = 0; m < numOfSquares; m++) {

        const row = document.createElement("div");
        row.className = "row";
        document.getElementById("grid").appendChild(row)[m];
        

        // Create row
        for (i = 0; i < numOfSquares; i++) {
            const box = document.createElement("div");
            box.className = "box";
            document.getElementsByClassName("row")[rowCount].appendChild(box)[i];
        }
        rowCount++;
    }
}
function changeColour() {
    document.getElementsByClassName("box").style.backgroundColour = "green";
    return false;
}

grid(numOfSquares);
