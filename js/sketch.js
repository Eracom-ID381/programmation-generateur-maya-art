// ----------------- GÉNÉRATEUR --------------------------- //





function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    strokeWeight(2);
    rectMode(CENTER);
}

function draw() {
    background(255);

    //face(width/2, height/2, 120, 30);
    for (let x = 0; x < width, x = x + 100) {
        face(x, height / 2, x / 100, 230)
    }
}

function face(x, y, bouche, couleur) {
    fill(couleur);
    ellipse(x, y, 200);
    fill(255);
    ellipse(x - 40, y - 40, 40, 40)
    fill(0);
    ellipse(x - 40, y - 40, 10, 10)
    fill(255);
    ellipse(x + 40, y - 40, 40, 40)
    fill(0);
    ellipse(x + 40, y - 40, 10, 10)
    line(x - bouche, y + 50, x + bouche, y + 50);

}


function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}