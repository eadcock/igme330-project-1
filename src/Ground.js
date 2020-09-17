// const ground = {
//     color: 'brown',
//     tileType: tileType.herbivore,
//     step(col, row) {
//         // become water sometimes
//         return Math.random() > waterSpawnRate ? this : water;
//     }
// }

class Ground {
    color = _ => this.occupiedBy ? this.occupiedBy.color : 'brown';
    tileType = _ => this.occupiedBy ? this.occupiedBy.tileType : tileType.ground;
    occupiedBy = null;
    step(col, row) {
        if(this.occupiedBy) {
            this.occupiedBy.step(col, row);
        } else {
            if(Math.random() < waterSpawnRate) {
                this.occupiedBy = new Water();
            }
        }
    }
    killOccupant() {
        this.occupiedBy = null;
    }
}