class Vorsord extends livingCreature {
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

    vorsal() {
        var vand = random(this.yntrelVandak(2));
        if (vand) {
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = this.index;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }

        else {
            var vand = random(this.yntrelVandak(3));
            if (vand) {
                matrix[this.y][this.x] = 0;
                this.x = vand[0]; this.y = vand[1];
                matrix[this.y][this.x] = this.index;
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
        }

    }
}