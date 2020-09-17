let canvas, ctx;
const canvasWidth = 600,
    canvasHeight = 400;
const cellWidth = 10;
let lifeworld;

// user controlled values
let fps = 1, waterSpawnRate = 0.008, herbivoreDyingRate = 5, carnivoreDyingRate = 5;

window.onload = init;

function init() {
    canvas = document.querySelector('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    ctx = canvas.getContext('2d');
    // TODO: init lifeworld
    lifeworld = new Lifeworld();
    loop();
}

function loop() {
    setTimeout(loop, 1000 / fps);
    // TODO: update lifeworld
    drawBackground();
    drawWorld();
    lifeworld.step();
}

function drawBackground() {
    ctx.save();
    ctx.fillStyle = 'black';
    ctx.globalAlpha = 4 / fps;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.restore();
}

function drawWorld() {
    ctx.save();
    for (let col = 0; col < lifeworld.numCols; col++) {
        for (let row = 0; row < lifeworld.numRows; row++) {
            drawCell(col, row, cellWidth, lifeworld.world[col][row].color());
        }
    }
    ctx.restore();
}

function drawCell(col, row, dimensions, color) {
    ctx.beginPath();
    ctx.rect(col * dimensions, row * dimensions, dimensions, dimensions);
    ctx.fillStyle = color;
    ctx.fill();
}
