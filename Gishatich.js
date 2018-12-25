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

        if (vand && this.multiply >= 6) {
			this.kills++;
			stats.Amenabklik_Gishatich = (stats.Amenabklik_Gishatich > this.kills) ? stats.Amenabklik_Gishatich : this.kills;
            stats.Qani_Xotaker_Keran_Gishatichnery++;
			
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
		
		switch(currentWeather){
			case 2:
				this.speed = 22;
			break;

			case 3:
				this.speed = 20;	
			break;
			
			default:
				this.speed = 24;
		}
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
			stats.Eldest_Gishatich = (stats.Eldest_Gishatich > this.age) ? stats.Eldest_Gishatich : this.age;
        }
    }
};