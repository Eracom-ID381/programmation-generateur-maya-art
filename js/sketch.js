// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let bulle = new Bullle();

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    rectMode(CENTER);
}

function draw() {
    // Conditionellle nous permettant de savoir si la souris est appuyée
    // et si le timer est écoulé
    if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
        // Appel de notre fonction generator
        generator(width / 2, height / 2, height - 150);
    }
}
// Fonction avec quatres paramètres
function generator(x, y, size) {
    // fill utilise le paramètre de notre fonction
    for (let offset = size; offset > 0; offset -= 60) {
        fill(255, 300, 0);
        ellipse(x, y, 244);
        fill(255, 0, 0);
        ellipse(x - 20, y - 80, 20, 20)
        fill(0);
        ellipse(x - 20, y - 80, 20, 20)
        fill(255);
        ellipse(x + 20, y - 60, 20, 20)
        fill(0);
        ellipse(x + 20, y - 60, 20, 20)
        line(x - bouche, y + 10, x + bouche, y + 10);
        console.log(offset);

    }
}


//Nouvelle classe /Nouvelle Instance
//class Bulle {
//    constructor() {
//        this.x = 10 / 2;
//        this.y = height / 2;
//    }
//    bouger() {
//        this.x = this.x + 10;
//    }
//}
//}




//EMOJIS

function face(x, y, bouche, couleur) {

    fill(255, 300, 0);
    ellipse(x, y, 244);
    fill(255, 0, 0);
    ellipse(x - 20, y - 80, 20, 20)
    fill(0);
    ellipse(x - 20, y - 80, 20, 20)
    fill(255);
    ellipse(x + 20, y - 60, 20, 20)
    fill(0);
    ellipse(x + 20, y - 60, 20, 20)
    line(x - bouche, y + 10, x + bouche, y + 10);
    ellipse(x + 20, y - 60, 20, 20)
    line(x - bouche, y + 50, x + bouche, y + 50);

}


function mousePressed() {
    // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
    save();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}