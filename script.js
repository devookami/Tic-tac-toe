const myModule = (function () {
    const board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    const players = [
        { name: "player1", piece: "O" },
        { name: "player2", piece: "X" },
    ];
    let playersTurn = 1;

    function printBoard() {
        console.log(board.map((row) => row.join(" | ")).join("\n---------\n"));
    }

    function playPlayer(playerIndex, row, col) {
        const currentPlayer = playersTurn === 1 ? players[0] : players[1];

        if (playersTurn !== playerIndex + 1) {
            console.log(`It's ${currentPlayer.name}'s turn`);
            return;
        }

        if (!(row < board.length && col >= 0 && col < board[row].length)) {
            console.log("Wrong coordinates, play again");
            return;
        } else if (board[row][col] !== null) {
            console.log("The space is occupied, play again");
            return;
        }

        board[row][col] = currentPlayer.piece;
        printBoard();
        playersTurn = playersTurn === 1 ? 2 : 1;

        // Check for a winner after each move
        const winner = checkWin();
        if (winner) {
            console.log(`Player ${winner} wins!`);
        }
    }

    function checkWin() {
        // Check rows
        for (let row = 0; row < board.length; row++) {
            if (
                board[row][0] &&
                board[row][0] === board[row][1] &&
                board[row][1] === board[row][2]
            ) {
                return board[row][0]; // Return the winning piece ("O" or "X")
            }
        }

        // Check columns
        for (let col = 0; col < board[0].length; col++) {
            if (
                board[0][col] &&
                board[0][col] === board[1][col] &&
                board[1][col] === board[2][col]
            ) {
                return board[0][col]; // Return the winning piece ("O" or "X")
            }
        }

        // Check diagonals
        if (
            board[0][0] &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            return board[0][0]; // Return the winning piece ("O" or "X")
        }
        if (
            board[0][2] &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            return board[0][2]; // Return the winning piece ("O" or "X")
        }

        return null; // Return null if there is no winner
    }

    function createGame() {
        printBoard();
        return {
            playPlayer1: (row, col) => playPlayer(0, row, col),
            playPlayer2: (row, col) => playPlayer(1, row, col),
        };
    }

    return {
        createGame: createGame,
    };
})();
