// Variablen für die Spielsteuerung
let ballX = 2;
let ballY = 2;
let ballDirX = 1;
let ballDirY = 1;
let score = 0;

// Variablen für die Spielersteuerung
let player1Y = 0;
let player2Y = 0;

// Konstanten für die Spielfeldgröße
const FIELD_WIDTH = 5;
const FIELD_HEIGHT = 5;

// Funktion zum Zeichnen des Spielfelds
function drawField() {
    // Zeichne das Spielfeld
    basic.clearScreen();
    basic.drawLine(0, 0, 0, 4);
    basic.drawLine(1, 0, 1, 4);
    basic.drawLine(3, 0, 3, 4);
    basic.drawLine(4, 0, 4, 4);
    basic.plot(2, 2);

    // Zeichne die Spieler
    basic.plot(0, player1Y);
    basic.plot(4, player2Y);

    // Zeichne den Ball
    basic.plot(ballX, ballY);
}

// Funktion zum Bewegen des Balls
function moveBall() {
    // Bewege den Ball
    ballX += ballDirX;
    ballY += ballDirY;

    // Überprüfe, ob der Ball das Spielfeld verlassen hat
    if (ballX < 0 || ballX > FIELD_WIDTH || ballY < 0 || ballY > FIELD_HEIGHT) {
        // Falls ja, ändere die Bewegungsrichtung
        ballDirX = -ballDirX;
        ballDirY = -ballDirY;
    }

    // Überprüfe, ob der Ball einen Spieler getroffen hat
    if ((ballX === 0 && ballY === player1Y) || (ballX === 4 && ballY === player2Y)) {
        // Falls ja, erhöhe den Score und ändere die Bewegungsrichtung
        score++;
        ballDirX = -ballDirX;
        ballDirY = -ballDirY;
    }
}

// Funktion zum Bewegen des Spielers
function movePlayer(player, direction) {
    // Bewege den Spieler
    if (player === 1) {
        player1Y += direction;
    } else if (player === 2) {
        player2Y += direction;
    }

    // Überprüfe, ob der Spieler das Spielfeld verlassen hat
    if (player1Y < 0) {
        player1Y = 0;
    } else if (player1Y > FIELD_HEIGHT) {
        player1Y = FIELD_HEIGHT;
    }

    if (player2Y < 0) {
        player2Y = 0;
    } else if (player2Y > FIELD_HEIGHT) {
        player2Y = FIELD_HEIGHT;
    }
}

// Hauptprogramm
basic.forever(function () {
    // Zeichne das Spielfeld
    drawField();

    // Bewege den Ball
    moveBall();

    // Überprüfe, ob das Spiel zu Ende ist
    if (score === 5) {
        basic

