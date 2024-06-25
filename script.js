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
    let playersTurn;
    function createGame() {
        function printBoard() {
            console.log(
                board.map((row) => row.join(" | ")).join("\n---------\n")
            );
        }

        function playPlayer1(row, col) {
            let playerPiece = players[0].piece;
            if (playersTurn === 2) {
                console.log("It's not your turn");
                return;
            }

            if (!(row < board.length && col >= 0 && col < board[row].length)) {
                console.log("Wrong cordinates, play again");
            } else if (board[row][col] !== null) {
                console.log("The space is occupied, play again");
            } else {
                board[row][col] = playerPiece;
                printBoard();
                playersTurn = 2;
            }
        }
        function playPlayer2(row, col) {
            let playerPiece = players[1].piece;
            if (playersTurn === 1) {
                console.log("It's not your turn");
                return;
            }
            if (!(row < board.length && col >= 0 && col < board[row].length)) {
                console.log("Wrong cordinates, play again");
            } else if (board[row][col] !== null) {
                console.log("The space is occupied, play again");
            } else {
                board[row][col] = playerPiece;
                printBoard();
                playersTurn = 1;
            }
        }

        printBoard();
        return {
            playPlayer1,
            playPlayer2,
        };
    }
    return {
        createGame: createGame,
    };
})();
