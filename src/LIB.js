// flatten a 2d array in to a 1d array
function flattenArray(array) {
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray = newArray.concat(array[i]);
    }
    return newArray;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

function getNeighborsOfType(neighbors, tileType) {
    return neighbors.map(innerFunction);

    function innerFunction(e, col) {
        return e.map(mapData).filter(e => e !== 0);

        function mapData(e, row) {
            return e && e.tileType() == tileType ? [e, [col, row]] : 0;
        }
    }
}

function getNeighborBufferCounterpart(target, col, row) {
    return lifeworld.worldBuffer[col + (target[0] - 1)][row + (target[1] - 1)];
}

function containsPlant() {
    for(let i = 0; i < lifeworld.numCols; i++) {
        for(let j = 0; j < lifeworld.numRows; j++) {
            if(lifeworld.world[i][j].tileType() == tileType.plant) {
                return true;
            }
        }
    }
    return false;
}