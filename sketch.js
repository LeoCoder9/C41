var database;
var form;
var game;
var player;

var gameState = 0;
var playerCount;
var allPlayers

var car1, car2, car3, car4
var cars


var carIMG1, carIMG2, carIMG3, carIMG4
var trackIMG, groundIMG

function preload() {

  carIMG1 = loadImage("images/car1.png")
  carIMG2 = loadImage("images/car2.png")
  carIMG3 = loadImage("images/car3.png")
  carIMG4 = loadImage("images/car4.png")

  trackIMG = loadImage("images/track.jpg")
  groundIMG = loadImage("images/ground.png")
}




function setup() {
  database = firebase.database();
  createCanvas(displayWidth - 20, displayHeight - 30);

  game = new Game()
  game.start()
  game.readState()

}

function draw() {
  background("white");

  if (playerCount === 4) {
    game.updateState(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }
  if (gameState === 2){
    game.end()
    
  }



}


