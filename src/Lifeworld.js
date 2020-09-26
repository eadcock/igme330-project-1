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
    constructor(numCols = 60, numRows = 40, percentWater = 0.1, percentPlant = 0.1, percentHerbivore = 0.1, percentCarnivore = 0.03) {
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
        for(let col = 0; col < this.numCols; col++) {
            for(let row = 0; row < this.numRows; row++) {
                grid[col][row] = new Ground();
            }
        }
        return grid;
    }

    randomSetup() {
        for (let col = 0; col < this.numCols; col++) {
            for (let row = 0; row < this.numRows; row++) {
                const cell = this.world[col][row];
                let tileSpawn = Math.random();
                if (tileSpawn < this.percentWater) {
                    cell.occupiedBy = new Water();
                } else if (tileSpawn < this.percentWater + this.percentPlant) {
                    cell.occupiedBy = new Plant();
                } else if (tileSpawn < this.percentWater + this.percentPlant + this.percentHerbivore) {
                    cell.occupiedBy = new Herbivore();
                } else if (tileSpawn < this.percentWater + this.percentPlant + this.percentHerbivore + this.percentCarnivore) {
                    cell.occupiedBy = new Carnivore();
                } else {
                    cell.occupiedBy = null;
                }
            }
        }
    }

    getNeighbors(x, y) {
        let arr = this.world; // create an alias so we get to less below
        return [
            [
                x > 0 && y > 0 ? arr[x - 1][y - 1] : null, 
                y > 0 ? arr[x][y - 1] : null, 
                x < this.numCols - 1 ? arr[x + 1][y - 1] : null
            ],
            [
                x > 0 ? arr[x - 1][y] : null, 
                arr[x][y], 
                x < this.numCols - 1 ? arr[x + 1][y] : null
            ],
            [
                x > 0 && y < this.numRows - 1 ? arr[x - 1][y + 1] : null, 
                y < this.numRows - 1 ? arr[x][y + 1] : null, 
                x < this.numCols - 1 && y < this.numRows - 1 ? arr[x + 1][y + 1] : null
            ]
        ];
        // return [
        //     [
        //         { value: arr[x - 1][y - 1], x: x-1, y: y-1 }, 
        //         { value: arr[x][y - 1], x: x, y: y-1 }, 
        //         { value: arr[x + 1][y - 1], x: x+1, y: y-1 }
        //     ],
        //     [
        //         { value: arr[x - 1][y], x: x-1, y: y }, 
        //         0, 
        //         { value: arr[x + 1][y], x: x+1, y: y }
        //     ],
        //     [
        //         { value: arr[x - 1][y + 1], x: x-1, y: y+1 },
        //         { value: arr[x][y + 1], x: x, y: y+1 }, 
        //         { value: arr[x + 1][y + 1], x: x+1, y: y+1 }
        //     ]
        // ];
        }

    step() {
        for (let col = 0; col < this.numCols; col++) {
            for (let row = 0; row < this.numRows; row++) {
                this.world[col][row].step(col, row);
            }
        }

        // swap arrays
        // let temp = this.world;
        // this.world = this.worldBuffer;
        // this.worldBuffer = temp;
    }
}
