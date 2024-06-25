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

        printBoard();
    }
    return {
        createGame: createGame,
    };
})();
