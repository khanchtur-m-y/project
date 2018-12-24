var socket = io();
var w = 30;
var h = 30;
var side = 24;
var colors = [
    ["green", "yellow", "blue"],//spring
    ["#009933", "#ffcc00", "#0000cc"],//summer
    ["#FAD041", "#b76e00", "#7F67DF"],//autumn
    ["#B7FFD5", "#FBB66D", "#7F67DF"]//winter
];
var colorInd = 0;

function setup() {
    createCanvas((side * w) + 1, (side * h) + 1);
    background("#acacac");
}
socket.on("weather", function(data){
    colorInd = data;
});

socket.on("display", function (matrix) {
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill(colors[colorInd][0]);
            }
            else if (matrix[y][x] == 2) {
                fill(colors[colorInd][1]);
            }
            else if (matrix[y][x] == 3) {
                fill(colors[colorInd][2]);
            }
			else if (matrix[y][x] == 4) {
                fill("olive");
            }
			else if(matrix[y][x] == 5){
				fill("#4f3d3d");
			}
            rect(x * side, y * side, side, side);
        }
    }
});

