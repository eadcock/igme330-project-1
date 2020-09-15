'use strict';

// model class Lifeworld
const tileType = {
    ground: 0,
    water: 1,
    plant: 2,
    herbivore: 3,
    carnivore: 4,
};

class Lifeworld {
    constructor(numCols = 60, numRows = 40, percentWater = 0.1, percentPlant = 0.1, percentHerbivore = 0.1, percentCarnivore = 0.1) {
        this.numCols = numCols;
        this.numRows = numRows;
        this.percentWater = percentWater;
        this.percentPlant = percentPlant;
        this.percentHerbivore = percentHerbivore;
        this.percentCarnivore = percentCarnivore;
        this.world = this.buildArray();
        this.worldBuffer = this.buildArray();
        this.randomSetup();
        console.table(this.world);
    }

    buildArray() {
        let grid = [];
        for (let col = 0; col < this.numCols; col++) {
            let newColumn = new Array(this.numRows).fill(0);
            grid.push(newColumn);
        }
        return grid;
    }

    randomSetup() {
        for (let col = 0; col < this.numCols; col++) {
            for (let row = 0; row < this.numRows; row++) {
                let cell = Math.random();
                if (cell < this.percentWater) {
                    this.world[col][row] = water;
                } else if (cell < this.percentWater + this.percentPlant) {
                    this.world[col][row] = plant;
                } else if (cell < this.percentWater + this.percentPlant + this.percentHerbivore) {
                    this.world[col][row] = herbivore;
                } else if (cell < this.percentWater + this.percentPlant + this.percentHerbivore + this.percentCarnivore) {
                    this.world[col][row] = carnivore;
                } else {
                    this.world[col][row] = ground;
                }
            }
        }
    }

    getNeighbors(x, y) {
        let arr = this.world; // create an alias so we get to less below
        if (x > 0 && y > 0 && x < this.numCols - 1 && y < this.numRows - 1) {
            return [
                [arr[x - 1][y - 1], arr[x][y - 1], arr[x + 1][y - 1]],
                [arr[x - 1][y], 0, arr[x + 1][y]],
                [arr[x - 1][y + 1], arr[x][y + 1], arr[x + 1][y + 1]]
            ];
        } else {
            return 0;
        }
    }

    step() {
        for (let col = 0; col < this.numCols; col++) {
            for (let row = 0; row < this.numRows; row++) {
                switch (this.world[col][row]) {
                    case ground:
                        this.worldBuffer[col][row] = ground.step(col, row);
                        break;
                    case water:
                        this.worldBuffer[col][row] = water.step(col, row);
                        break;
                    case plant:
                        this.worldBuffer[col][row] = plant.step(col, row);
                        break;
                    case herbivore:
                        this.worldBuffer[col][row] = herbivore.step(col, row);
                        break;
                    case carnivore:
                        this.worldBuffer[col][row] = carnivore.step(col, row);
                        break;
                }
            }
        }

        // swap arrays
        let temp = this.world;
        this.world = this.worldBuffer;
        this.worldBuffer;
    }
}
