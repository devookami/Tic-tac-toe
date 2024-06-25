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
    let playerTurn = 1;

    function printBoard() {
        console.log(board.map((row) => row.join(" | ")).join("\n---------\n"));
    }

    function playPlayer(playerIndex, row, col) {
        const currentPlayer = playerTurn === 1 ? players[0] : players[1];

        if (playerTurn !== playerIndex + 1) {
            console.log(`It's not ${currentPlayer.name}'s turn`);
            return;
        }

        if (!(row < board.length && col >= 0 && col < board[row].length)) {
            console.log("Wrong coordinates, play again");
        } else if (board[row][col] !== null) {
            console.log("The space is occupied, play again");
        } else {
            board[row][col] = currentPlayer.piece;
            printBoard();
            playerTurn = playerTurn === 1 ? 2 : 1;
        }
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
