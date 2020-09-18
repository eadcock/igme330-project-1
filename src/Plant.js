// const plant = {
//     color: 'green',
//     tileType: tileType.plant,
//     step(col, row) {
//         return this;
//     }
// }

class Plant {
    color = 'green';
    tileType = tileType.plant;
    lastGrown = 5;
    new = true;

    step(col, row) {
        if(!this.new) {
            this.lastGrown++;
            this.growNeighbor(col, row);
            const neighbors = lifeworld.getNeighbors(col, row);
    
            let water = flattenArray(getNeighborsOfType(neighbors, tileType.water));
            if(water.length) {
                getRandomElement(water)[0].occupiedBy = new Plant();
                this.lastGrown = 0;
            }
        } else {
            this.new = false;
        }
        
    }

    growNeighbor(col, row) {
        if(this.lastGrown > plantGrowCooldown) {
            const neighbors = lifeworld.getNeighbors(col, row);
    
            let water = flattenArray(getNeighborsOfType(neighbors, tileType.water));
            if(water.length) {
                const ground = flattenArray(getNeighborsOfType(neighbors, tileType.ground));
                if(ground.length) {
                    getRandomElement(ground)[0].occupiedBy = new Plant();
                } else {
                    const plants = flattenArray(getNeighborsOfType(neighbors, tileType.plants));
                    if(plants.length) {
                        const target = getRandomElement(plants);
                        target[0].growNeighbor(target[1][0], target[1][1]);
                        this.lastGrown = 0;
                        this.recieveGrowth(col, row);
                    }
                }
            }
        }
    }

    // recieveGrowth(col, row) {
    //     if(this.lastGrown == 0) return;

    //     this.lastGrown = 0;

    //     const plants = flattenArray(getNeighborsOfType(lifeworld.getNeighbors(col, row), tileType.plants));
    //     for(let i = 0; i < plants.length; i++) {
    //         plants[i].recieveGrowth();
    //     }
    // }
}