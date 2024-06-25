const myModule = (function () {
    const board = [
        [0.0, 0.1, 0.2],
        [1.0, 1.1, 1.2],
        [2.0, 2.1, 2.2],
    ];

    function createGame() {
        function printBoard() {
            console.log(
                board.map((row) => row.join(" | ")).join("\n---------\n")
            );
        }
        //
        function play(row, col, value) {
            if (typeof value !== "string") {
                console.log("Niste uneli teks");
                return;
            }

            value = value.toUpperCase();

            if (value !== "O" && value !== "X") {
                console.log("Niste uneli O ili X ");
                console.log(`Uneli ste ${value}`);
                return;
            }

            if (!(row < board.length && col >= 0 && col < board[row].length)) {
                console.log("Uneli ste pogresne kordinate");
            } else {
                board[row][col] = value;
                printBoard();
            }
        }
        printBoard();
        return {
            play,
        };
    }
    return {
        createGame: createGame,
    };
})();
