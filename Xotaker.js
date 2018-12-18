var livingCreature = require("./livingCreature");

module.exports = class Xotaker extends livingCreature {
    constructor(x, y, index) {
        super(x, y, index);

        this.energy = Math.round(Math.random() * 8);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
        //matrix[this.y][this.x] = this.index;
    }

    stanalNorKordinatner() {
        return super.stanalNorKordinatner();
    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }


    sharjvel() {
        return super.sharjvel();
    }

    utel() {
        this.energy--;
        this.multiply++;
        var arr = this.yntrelVandak(1);
        var vand = arr[Math.floor(Math.random() * arr.length)];
        if (vand && this.multiply >= this.speed / 4) {
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
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
            var newxotaker = new Xotaker(vand[0], vand[1], 2);
            xotakerArr.push(newxotaker);
        }
    }

    mahanal(tariq) {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else {
            this.age++;
        }
    }
};