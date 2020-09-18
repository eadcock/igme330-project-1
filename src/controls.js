function controlsInit() {
    // display initial values
    document.querySelector('#fpsRangeOutput').innerHTML = document.querySelector('#fpsRange').value;
    document.querySelector('#waterSpawnRangeOutput').innerHTML = document.querySelector('#waterSpawnRange').value;
    document.querySelector('#plantGrowRangeOutput').innerHTML = document.querySelector('#plantGrowRange').value;
    document.querySelector('#herbBreedingFoodRangeOutput').innerHTML = document.querySelector('#herbBreedingFoodRange').value;
    document.querySelector('#carnBreedingFoodRangeOutput').innerHTML = document.querySelector('#carnBreedingFoodRange').value;
    document.querySelector('#herbBreedingRangeOutput').innerHTML = document.querySelector('#herbBreedingRange').value;
    document.querySelector('#carnBreedingRangeOutput').innerHTML = document.querySelector('#carnBreedingRange').value;
    document.querySelector('#herbDyingRangeOutput').innerHTML = document.querySelector('#herbDyingRange').value;
    document.querySelector('#carnDyingRangeOutput').innerHTML = document.querySelector('#carnDyingRange').value;
    
    // setup changing values
    document.querySelector('#fpsRange').oninput = function() {
        document.querySelector('#fpsRangeOutput').innerHTML = this.value;
        fps = this.value;
    }
    document.querySelector('#waterSpawnRange').oninput = function() {
        document.querySelector('#waterSpawnRangeOutput').innerHTML = this.value;
        waterSpawnRate = this.value;
    }
    document.querySelector('#plantGrowRange').oninput = function() {
        document.querySelector('#plantGrowRangeOutput').innerHTML = this.value;
        plantGrowCooldown = this.value;
    }
    document.querySelector('#herbBreedingFoodRange').oninput = function() {
        document.querySelector('#herbBreedingFoodRangeOutput').innerHTML = this.value;
        herbBreedingFoodRequirement = this.value;
    }
    document.querySelector('#carnBreedingFoodRange').oninput = function() {
        document.querySelector('#carnBreedingFoodRangeOutput').innerHTML = this.value;
        carnBreedingFoodRequirement = this.value;
    }
    document.querySelector('#herbBreedingRange').oninput = function() {
        document.querySelector('#herbBreedingRangeOutput').innerHTML = this.value;
        herbBreedingCooldown = this.value;
    }
    document.querySelector('#carnBreedingRange').oninput = function() {
        document.querySelector('#carnBreedingRangeOutput').innerHTML = this.value;
        carnBreedingCooldown = this.value;
    }
    document.querySelector('#herbDyingRange').oninput = function() {
        document.querySelector('#herbDyingRangeOutput').innerHTML = this.value;
        herbDyingRate = this.value;
    }
    document.querySelector('#carnDyingRange').oninput = function() {
        document.querySelector('#carnDyingRangeOutput').innerHTML = this.value;
        carnDyingRate = this.value;
    }
}