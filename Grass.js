var livingCreature = require("./livingCreature");

module.exports = class Grass extends livingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
    }
    yntrelVandak(ch) {
        return super.yntrelVandak(ch);
    }

    mul() {
        this.age++;
		stats.EldestGrass = (stats.EldestGrass > this.age) ? stats.EldestGrass : this.age;
        this.multiply++;
        var arr = this.yntrelVandak(0);
        this.direction = arr[Math.floor(Math.random() * arr.length)];
        
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
};