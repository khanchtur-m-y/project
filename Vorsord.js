var livingCreature = require("./livingCreature");

module.exports = class Vorsord extends livingCreature {
    constructor(x, y, index) {
        super(x, y, index);
    }
    yntrelVandak(ch) {
        return super.yntrelVandak(ch);
    }

    stanalNorKordinatner() {
        return super.stanalNorKordinatner();
    }

    sharjvel() {
        return super.sharjvel();
    }

    vorsal(i) {
        if(currentWeather != 3){
			var arr = this.yntrelVandak(2);
        var vand = arr[Math.floor(Math.random() * arr.length)]; 
        if (vand) {
            this.kills++;
			stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy = (stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy > this.kills) ? stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy : this.kills;
			
			matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = this.index;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
        }

        else {
			var luck = Math.random();
            var arr = this.yntrelVandak(3);
			var vand = arr[Math.floor(Math.random() * arr.length)];
            if (vand && luck > 0.1) {
				this.kills++;
				stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy = (stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy > this.kills) ? stats.Qani_Kendani_Spanec_Amenaujex_Vorsordy : this.kills;
                
				matrix[this.y][this.x] = 0;
                this.x = vand[0]; this.y = vand[1];
                matrix[this.y][this.x] = this.index;
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
            }
			else if(vand && luck < 0.1){
				matrix[this.y][this.x] = 0;
				vorsordArr.splice(i, 1);
			}
			
			else
				this.sharjvel();
        }
		}
    }
};