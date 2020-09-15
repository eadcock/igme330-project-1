const carnivore = {
    color: 'red',
    step(col, row) {
        // keep track of how long since last eaten (dying rate)
        // 1. wander to random neighboring ground tile
        // 2. eat random neighboring herbivore tile
        // 3. breed with neighboring carnivore and turn neighboring ground tile into carnivore if eaten recently
        // 4. turn into ground tile if turns since last eaten > dying rate
        return this;
    }
}