var song;
var sliderVolume;

var snake;
var scl = 20;

var food;



function setup() {
    createCanvas(600, 600);
    song = loadSound("altitude-trains.mp3", loaded);
    sliderVolume = createSlider(0, 1, 0.5, 0.01);

    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function loaded() {
    song.play();
}

function pickLocation() {
    var cols = floor(width/scl);//Number of columns
    var rows = floor(height/scl);//Number of rows
    food = createVector(floor(random(cols)), floor(random(rows)));//Create a food at random locaiton
    food.mult(scl); //multiply food by that scale to expand it back out
}

function mousePressed() {
    snake.total++;
}

function draw() {
    song.setVolume(sliderVolume.value());

    background(51);
    if (snake.eat(food)) {
        pickLocation();
    }
    snake.death();
    snake.update();
    snake.show();

    fill(255, 0, 50);
    rect(food.x, food.y, scl, scl);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}
