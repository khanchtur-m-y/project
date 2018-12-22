var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require("fs");
var Grass = require("./Grass");
var Xotaker = require("./Xotaker");
var Gishatich = require("./Gishatich");
var Vorsord = require("./Vorsord");
var Meteor = require("./Meteor");

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
console.log("server is running");


var w = 30;
var h = 30;
grassArr = [];
xotakerArr = [];
gishatichArr = [];
vorsordArr = [];
matrix = [];
var dayCount = 1;
weather = ["sum", "aut", "win", "spr"];
currentWeather = 0;
stats = {
	"EldestGrass": 0,
	"EldestXotaker": 0,
	"EldestGishatich": 0,
	"AmenaBklikXotaker": 0,
	"AmenaBklikGishatich": 0,
    "AmenaUjexVorsord": 0,
    "QaniXotKeranXotakernery": 0,
    "QaniXotakerKeranGishatichnery": 0,
}

for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
        var r = Math.floor(Math.random() * 100);
        if (r < 60) r = 0;
        else if (r < 80) r = 1;
        else if (r < 91) r = 2;
        else if (r < 98) r = 3;
		else if (r < 100) r = 4;
        matrix[y][x] = r;
    }
}

//var met = new Meteor();

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
		else if (matrix[y][x] == 4) {
            vorsordArr.push(new Vorsord(x * 1, y * 1, 4))
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
            xotakerArr[i].mahanal(i);
        }

        for (var i in gishatichArr) {
            gishatichArr[i].bazmanal();
            gishatichArr[i].utel();
            gishatichArr[i].mahanal(i);
        }
		
		for (var i in vorsordArr) {
            vorsordArr[i].vorsal(i);
        }

        
        dayCount++;
        if(dayCount % 5 == 0){
            fs.writeFileSync("stats.json", JSON.stringify(stats, null, 3));
        }
        if(dayCount % 25 == 0){
            dayCount = 0;
            currentWeather = (currentWeather == 3) ? 0 : currentWeather++;
        }

        io.sockets.emit("display", matrix);
    }, 200);
});