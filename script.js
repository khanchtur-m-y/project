function main() {
    var socket = io();

    function setup() {
        createCanvas(side * w, side * h);
        background("#acacac");
    }

    socket.on("display", function (matrix) {
        background("#acacac");
        for (var y in matrix) {
            for (var x in matrix[y]) {
                if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 1) {
                    fill("green");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 3) {
                    fill("blue");
                }
                rect(x * side, y * side, side, side);
            }
        }
    });
}
window.onload = main;