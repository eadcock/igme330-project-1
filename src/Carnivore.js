class Carnivore {
    color = 'red';
    tileType = tileType.carnivore;
    lastAte = carnBreedingFoodRequirement;
    lastBred = carnBreedingCooldown - 3;
    new = true;

    step(col, row) {
        if(!this.new) {
            this.lastAte++;
            // keep track of how long since last eaten (dying rate)
            // 1. wander to random neighboring ground tile
            // 2. eat random neighboring plant tile
            const neighbors = lifeworld.getNeighbors(col, row);
            if(this.lastAte > carnDyingRate) {
                neighbors[1][1].killOccupant();
            }
            if(neighbors) {
                let herbivores = getNeighborsOfType(neighbors, tileType.herbivore);
                herbivores = flattenArray(herbivores);
                
                let carnivores = flattenArray(getNeighborsOfType(neighbors, tileType.carnivore));
                let ground = flattenArray(getNeighborsOfType(neighbors, tileType.ground));
                // eat
                if(herbivores.length) {
                    const target = getRandomElement(herbivores);
                    target[0].killOccupant();
                    this.lastAte = 0;
                } else if (carnivores.length > 1 && ground.length && this.lastAte <= carnBreedingFoodRequirement && this.lastBred > carnBreedingCooldown) {
                    getRandomElement(ground)[0].occupiedBy = new Carnivore();
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