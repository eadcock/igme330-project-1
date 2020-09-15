const herbivore = {
    color: 'yellow',
    step(col, row) {
        // keep track of how long since last eaten (dying rate)
        // 1. wander to random neighboring ground tile
        // 2. eat random neighboring plant tile
        // 3. breed with neighboring herbivore and turn neighboring ground tile into herbivore if eaten recently
        // 4. turn into ground tile if turns since last eaten > dying rate
        return this;
    }
}