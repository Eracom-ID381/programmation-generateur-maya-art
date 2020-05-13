// ----------------- GÉNÉRATEUR --------------------------- //
//une unité =1 seconde
let timer = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    strokeWeight(2);
    rectMode(CENTER);
}

function draw() {


    //face(width/2, height/2, 120, 30);
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        background(255);
        for (let x = 0; x < width; x = x + 100) {
            face(x, height / 2, x / 100, 230)
        }
    }
}

//EMOJIS

function face(x, y, bouche, couleur) {

    fill(couleur);
    ellipse(x, y, 200);
    fill(255);
    ellipse(x - 20, y - 60, 20, 20)
    fill(0);
    ellipse(x - 20, y - 60, 20, 20)
    fill(255);
    ellipse(x + 20, y - 60, 20, 20)
    fill(0);
    ellipse(x + 20, y - 60, 20, 20)
    line(x - bouche, y + 10, x + bouche, y + 10);

}


function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}