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

    function createGame() {
        function printBoard() {
            console.log(
                board.map((row) => row.join(" | ")).join("\n---------\n")
            );
        }

        function playMove(playerIndex, row, col) {
            checkPlayer(playerIndex);
            let playerPiece = players[playerIndex].piece;
            if (!(row < board.length && col >= 0 && col < board[row].length)) {
                console.log("Uneli ste pogresne kordinate");
            } else if (board[row][col] !== null) {
                console.log("Polje je već zauzeto");
            } else {
                board[row][col] = playerPiece;
                printBoard();
            }
        }

        function checkPlayer(playerIndex) {
            if (playerIndex !== 0 && playerIndex !== 1) {
                console.log(
                    "Player 1 moves with index 0 and Player 2 moves with index 1"
                );
                return;
            }
        }
        printBoard();
        return {
            playMove,
        };
    }

    return {
        createGame: createGame,
    };
})();
