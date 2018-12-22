var socket = io();
var w = 30;
var h = 30;
var side = 24;
var colors = [
    ["#009933", "#ffcc00", "#0000cc", "#333300"],
    []
]
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
			else if (matrix[y][x] == 4) {
                fill("olive");
            }
            /*
            else if(matrix[y][x] == 5){
                fill("indianRed");
            }
            */
            rect(x * side, y * side, side, side);
        }
    }
});

