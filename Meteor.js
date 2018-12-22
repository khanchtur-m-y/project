
/*
class Meteor {
	constructor() {
		this.x;
		this.y;
		this.area = [];
		this.dis = 0;
		this.fellDown = true;
		this.radius = 3;
		this.fellOnVolcano = true;
	}

	fall(x, y) {
		this.x = x;
		this.y = y;
		this.fellDown = false;

		for (var y in matrix) {
			for (var x in matrix[y]) {

				if (Math.random() > 0.5 && x > this.x - this.radius && x < this.x + this.radius && y > this.y - this.radius && y < this.y + this.radius) {
					if (x == 7 && y == 7) {
						this.fellOnVolcano = false;
					}

					matrix[x][y] = 4;
					var tex = [];
					tex.push(x);
					tex.push(y);
					this.area.push(tex);

					for (var i in xotakerArr) {
						if (xotakerArr[i].x > this.x - this.radius && xotakerArr[i].x < this.x + this.radius && xotakerArr[i].y > this.y - this.radius && xotakerArr[i].y < this.y + this.radius) {
							xotakerArr.splice(i, 1);
							break;
						}
					}
					for (var i in grassArr) {
						if (grassArr[i].x > this.x - this.radius && grassArr[i].x < this.x + this.radius && grassArr[i].y > this.y - this.radius && grassArr[i].y < this.y + this.radius) {
							grassArr.splice(i, 1);
							break;
						}
					}
				}
			}
		}
	}

	disappear() {
		this.dis++;
		if (this.dis > 3 && this.area.length != 0) {
			this.dis = 0;
			var n = Math.floor(random(this.area.length));
			matrix[this.area[n][0]][this.area[n][1]] = 0;
			this.area.splice(n, 1);
		}

		if (this.area.length == 0) {
			this.fellDown = true;
		}
	}
}
*/

module.exports = class Meteor {
	constructor() {
		this.x;
		this.y;
		this.radius = 4;
		this.area = [];
		this.fellDown = false;
	}

	fall() {
		this.x = Math.floor(Math.random() * (matrix.length - this.radius)) + this.radius;
		this.y = Math.floor(Math.random() * (matrix.length - this.radius)) + this.radius;

		for (var x in matrix) {
			for (var y in matrix[y]) {
				if (Math.random() > 0.5 && x > this.x - this.radius && x < this.x + this.radius && y > this.y - this.radius && y < this.y + this.radius) {
					matrix[y][x] = 5;
					var coords = [];
					coords.push(y);
					coords.push(x);
					this.area.push(coords);
				}
			}
		}
		for (var i in grassArr) {
			if (grassArr[i].x > this.x - this.radius && grassArr[i].x < this.x + this.radius && grassArr[i].y > this.y - this.radius && grassArr[i].y < this.y + this.radius) {
				grassArr.splice(i, 1);
			}
		}

		for (var i in xotakerArr) {
			if (xotakerArr[i].x > this.x - this.radius && xotakerArr[i].x < this.x + this.radius && xotakerArr[i].y > this.y - this.radius && xotakerArr[i].y < this.y + this.radius) {
				xotakerArr.splice(i, 1);
			}
		}

		for (var i in gishatichArr) {
			if (gishatichArr[i].x > this.x - this.radius && gishatichArr[i].x < this.x + this.radius && gishatichArr[i].y > this.y - this.radius && gishatichArr[i].y < this.y + this.radius) {
				gishatichArr.splice(i, 1);

			}
		}

		for (var i in vorsordArr) {
			if (vorsordArr[i].x > this.x - this.radius && vorsordArr[i].x < this.x + this.radius && vorsordArr[i].y > this.y - this.radius && vorsordArr[i].y < this.y + this.radius) {
				vorsordArr.splice(i, 1);
			}
		}
		this.fellDown = true;
	}

	disappear() {
		this.dis++;
		if (this.dis > 3 && this.area.length != 0) {
			this.dis = 0;
			var n = Math.floor(Math.random() * this.area.length);
			matrix[this.area[n][0]][this.area[n][1]] = 0;
			this.area.splice(n, 1);
		}

		if (this.area.length == 0) {
			this.fellDown = false;
		}
	}
};