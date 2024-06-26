const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let playerTurn = 1;
// Get all the space elements
const spaceList = document.querySelectorAll(".space");

// Function to map DOM indexes to board coordinates
spaceList.forEach((element, index) => {
    element.addEventListener("click", () => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        console.log(
            `Clicked space: ${index}, Corresponding coordinates: [${row}, ${col}]`
        );

        // Example action: Mark the board and update the element text
       play(row, col, element);

        let win = checkWin();
        if (win === "O"){
            console.log(`Player ${win} won`)
        } else if(win === "X"){
            console.log(`Player ${win} won`)
        }
    });
});

function checkWin() {
    for (let row = 0; row < board.length; row++) {
        if (
            board[row][0] &&
            board[row][0] === board[row][1] &&
            board[row][1] === board[row][2]
        ) {
            return board[row][0];
        }
    }

    // Check columns
    for (let col = 0; col < board[0].length; col++) {
        if (
            board[0][col] &&
            board[0][col] === board[1][col] &&
            board[1][col] === board[2][col]
        ) {
            return board[0][col];
        }
    }

    // Check diagonals
    if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    ) {
        return board[0][0];
    }
    if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
    ) {
        return board[0][2];
    }

    return null;
}
function play(row,col, element){
    if (board[row][col] === null) {
        if (playerTurn === 1) {
            board[row][col] = "O";
            playerTurn = 2;
        } else {
            board[row][col] = "X";
            playerTurn = 1;
        }
        element.textContent = board[row][col];
    } else {
        console.log("This space is already occupied.");
    }
}