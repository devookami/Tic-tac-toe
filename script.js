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
        play(row, col, element);
    });
});

function play(row, col, element) {
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
    checkDraw();
    let win = checkWin();
    if (win) {
        console.log(`Player ${win} won`);
        resetBoard();
    }
}

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

    return false;
}

function checkDraw() {
    let boardisFull = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (!(board[i][j] == null)) {
                boardisFull++;
            }
        }
    }
    if (boardisFull === 9) {
        console.log("it's a draw");
        resetBoard();
    }
}

function resetBoard() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            board[i][j] = null;
        }
    }
    for (let i = 0; i < spaceList.length; i++) {
        spaceList.item(i).textContent = null;
    }
    playerTurn = 1;
}
