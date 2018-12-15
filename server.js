var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//var livingCreature = require("./livingCreature");
var Grass = require("./Grass");
var Xotaker = require("./Xotaker");
var Gishatich = require("./Gishatich");

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log("server is running");


var w = 30;
var h = 30;
var side = 24;
grassArr = [];
xotakerArr = [];
gishatichArr = [];
matrix = [];

for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
        var r = Math.floor(Math.random() * 100);
        if (r < 50) r = 0;
        else if (r < 75) r = 1;
        else if (r < 90) r = 2;
        else if (r < 100) r = 3;
        matrix[y][x] = r;
    }
}


for (var y in matrix) {
    for (var x in matrix[y]) {
        if (matrix[y][x] == 1) {
            grassArr.push(new Grass(x * 1, y * 1, 1));
        }
        else if (matrix[y][x] == 2) {
            xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
        }
        else if (matrix[y][x] == 3) {
            gishatichArr.push(new Gishatich(x * 1, y * 1, 3))
        }
    }
}
io.on('connection', function (socket) {
    setInterval(function () {
        for (var i in grassArr) {
            grassArr[i].mul();
        }

        for (var i in xotakerArr) {
            xotakerArr[i].bazmanal();
            xotakerArr[i].utel();
            xotakerArr[i].mahanal();
        }

        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal();
        }

        io.sockets.emit("display", matrix);
    }, 200)
});