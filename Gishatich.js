var livingCreature = require("./livingCreature");

module.exports = class Gishatich extends livingCreature {
    constructor(x, y, index) {
        super(x, y, index);

        this.energy = Math.round(Math.random() * 16);
        this.multiply = Math.round(Math.random() * 16);
        this.speed = 24;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    stanalNorKordinatner() {
        return super.stanalNorKordinatner();
    }

    sharjvel() {
        return super.sharjvel();
    }

    utel() {
        this.energy--;

        var arr = this.yntrelVandak(2);
        var vand = arr[Math.floor(Math.random() * arr.length)];

        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var arr = this.yntrelVandak(0);
        var vand = arr[Math.floor(Math.random() * arr.length)];

        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newgishatich = new Gishatich(vand[0], vand[1], 3);
            gishatichArr.push(newgishatich);
        }
    }

    mahanal(i) {
        if (this.energy <= 0) {
			matrix[this.y][this.x] = 0;      
			gishatichArr.splice(i, 1);
        }
        else {
            this.age++;
			stats.EldestGishatich = (stats.EldestGishatich > this.age) ? stats.EldestGishatich : this.age;
        }
    }
};