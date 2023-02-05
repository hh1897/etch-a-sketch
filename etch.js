// JavaScript source code


function grid() {

    let rowName = "row";
    let rowCount = 0;
    const grid = document.createElement("div");
    grid.id = "grid";
    document.body.appendChild(grid);

    for (m = 0; m <= 16; m++) {

        const row = document.createElement("div");
        row.className = "row";
        document.getElementById("grid").appendChild(row)[m];
        rowCount++;

        // Create row
        for (i = 0; i <= 16; i++) {
            const box = document.createElement("div");
            box.className = "box";
            document.getElementsByClassName("row")[rowCount].appendChild(box)[i];
            
        }
    }
}