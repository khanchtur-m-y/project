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
var dayCount = 0;
currentWeather = 0;//spring, summer, autumn, winter
stats = {
	"Eldest_Grass": 0,
	"Eldest_Xotaker": 0,
	"Eldest_Gishatich": 0,
	"Amenabklik_Xotaker": 0,
	"Amenabklik_Gishatich": 0,
    "Qani_Kendani_Spanec_Amenaujex_Vorsordy": 0,
    "Qani_Xot_Keran_Xotakernery": 0,
    "Qani_Xotaker_Keran_Gishatichnery": 0,
	"Qani_Xotaker_Mahacav_Meteoritic":0,
	"Qani_Gishatich_Mahacav_Meteoritic":0,
	"Qani_Meteorit_Ynkav": 0
}

for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
        var r = Math.random();
        /*
		if (r < 60) r = 0;
        else if (r < 70) r = 1;
        else if (r < 85) r = 2;
        else if (r < 91) r = 3;
		else if (r < 100) r = 4;
        */
		if (r < 0.01) r = 4;
        else if (r < 0.08) r = 3;
        else if (r < 0.3) r = 2;
        else if (r < 0.6) r = 1;
		else r = 0;
		matrix[y][x] = r;
    }
}

var met = new Meteor();

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
		
		met.act();
		
        dayCount++;
        if(dayCount++ % 5 == 0){
            fs.writeFileSync("stats.json", JSON.stringify(stats, null, 3));
        }
		
        if(dayCount % 20 == 0){
            dayCount = 0;
            currentWeather++;
            if(currentWeather == 4){
                currentWeather = 0;
            }
            io.sockets.emit("weather", currentWeather);
        }

        io.sockets.emit("display", matrix);
    }, 200);
});