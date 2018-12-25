module.exports = class Meteor {
	constructor() {
		this.x;
		this.y;
		this.radius = 4;
		this.area = [];
		this.fellDown = false;
		this.speed = 2;
	}

	fall() {
		stats.Qani_Meteorit_Ynkav++;
		this.x = Math.floor(Math.random() * (matrix.length - this.radius)) + this.radius;
		this.y = Math.floor(Math.random() * (matrix.length - this.radius)) + this.radius;
		
		for (var y in matrix) {
			for (var x in matrix[y]) {
				if (Math.random() > 0.3 && (x - this.x)*(x - this.x) + (y - this.y)*(y - this.y) <= this.radius * this.radius) {
					matrix[y][x] = 5;
					var coords = [];
					coords[0] = y;
					coords[1] = x;
					this.area.push(coords);
				}
			}
		}
		for (var i in grassArr) {
			if ((grassArr[i].x - this.x)*(grassArr[i].x - this.x) + (grassArr[i].y - this.y)*(grassArr[i].y - this.y) <= this.radius * this.radius) {
				grassArr.splice(i, 1);
			}
		}

		for (var i in xotakerArr) {
			if ((xotakerArr[i].x - this.x)*(xotakerArr[i].x - this.x) + (xotakerArr[i].y - this.y)*(xotakerArr[i].y - this.y) <= this.radius * this.radius) {
				xotakerArr.splice(i, 1);
				stats.Qani_Xotaker_Mahacav_Meteoritic++;
			}
		}

		for (var i in gishatichArr) {
			if ((gishatichArr[i].x - this.x)*(gishatichArr[i].x - this.x) + (gishatichArr[i].y - this.y)*(gishatichArr[i].y - this.y) <= this.radius * this.radius) {
				gishatichArr.splice(i, 1);
				stats.Qani_Gishatich_Mahacav_Meteoritic++;
			}
		}

		for (var i in vorsordArr) {
			if ((vorsordArr[i].x - this.x)*(vorsordArr[i].x - this.x) + (vorsordArr[i].y - this.y)*(vorsordArr[i].y - this.y) <= this.radius * this.radius) {
				vorsordArr.splice(i, 1);
			}
		}
		this.fellDown = true;
	}

	disappear() {
		this.speed--;
		if (this.speed < 1 && this.area.length != 0) {
			this.speed = 2;
			var n = Math.floor(Math.random() * this.area.length);
			matrix[this.area[n][0]][this.area[n][1]] = 0;
			this.area.splice(n, 1);
		}

		if (this.area.length == 0) {
			this.fellDown = false;
		}
	}
	
	act(){
		if(this.fellDown == true){
			this.disappear();
		}
		else{
			this.fall();
		}
	}
};