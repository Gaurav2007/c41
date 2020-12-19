var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var finishedPlayers = 0;
var finishLine = false;

var form, player, game;

var cars, car1, car2, car3, car4;

var car1_img,car2_img,car3_img,car4_img,track_img,back_img;

var gold,silver,bronze;

function preload()
{
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");
    track_img = loadImage("images/track.jpg");
    back_img = loadImage("images/images.jpg");
    gold = loadImage("images/gold.png");
    silver = loadImage("images/silver.png");
    bronze = loadImage("images/bronze.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishedPlayers===4)
  {
    gameState = 2;
  }
  if(gameState === 2){
    game.leaderboard();
  }

}
