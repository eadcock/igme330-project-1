const ground = {
    color: 'brown',
    step(col, row) {
        // become water sometimes
        return Math.random() > waterSpawnRate ? this : water;
    }
}