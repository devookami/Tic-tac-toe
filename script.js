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
            let player = players[playerIndex];
            let playerPiece = player && player.piece ? player.piece : null;

            if (!playerPiece) {
                console.log("Player doesn't exist");
                return;
            }
            if (!(row < board.length && col >= 0 && col < board[row].length)) {
                console.log("Uneli ste pogresne kordinate");
            } else if (board[row][col] !== null) {
                console.log("Polje je već zauzeto");
            } else {
                board[row][col] = playerPiece;
                printBoard();
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
