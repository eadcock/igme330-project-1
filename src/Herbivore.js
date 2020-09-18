class Herbivore {
    color = 'yellow';
    tileType = tileType.herbivore;
    lastAte = 0;
    lastBred = 5;
    new = true;

    step(col, row) {
        if(!this.new) {
            this.lastAte++;
            this.lastBred++;
            if(this.lastAte < 3) {
                this.color = 'magenta';
            }
            else {
                this.color = 'yellow';
            }
            // keep track of how long since last eaten (dying rate)
            // 1. wander to random neighboring ground tile
            // 2. eat random neighboring plant tile
            const neighbors = lifeworld.getNeighbors(col, row);
            if(this.lastAte > herbDyingRate) {
                neighbors[1][1].killOccupant();
            }
            if(neighbors) {
                let ground = getNeighborsOfType(neighbors, tileType.ground);
                ground = flattenArray(ground);
    
                let plants = getNeighborsOfType(neighbors, tileType.plant);
                plants = flattenArray(plants);
    
                let herbivores = flattenArray(getNeighborsOfType(neighbors, tileType.herbivore));
                // eat
                if(plants.length) {
                    plants.forEach(e => e[0].killOccupant());
                    this.lastAte = 0;
                } else if (herbivores.length > 1 && ground.length && this.lastAte <= herbBreedingFoodRequirement && this.lastBred > herbBreedingCooldown) {
                    getRandomElement(ground)[0].occupiedBy = new Herbivore();
                    console.log('breed');
                    this.lastBred = 0;
                } else {
                    // move
                    if(ground.length) {
                        // add a reference to yourself on your new tile
                        const target = getRandomElement(ground);
                        target[0].occupiedBy = this;
                        // remove the reference to yourself from your tile.
                        neighbors[1][1].killOccupant();
                    }
                    
                }
            }
    
            // 3. breed with neighboring herbivore and turn neighboring ground tile into herbivore if eaten recently
            // 4. turn into ground tile if turns since last eaten > dying rate
        } else {
            this.new = false;
        }
        
    }

    
}