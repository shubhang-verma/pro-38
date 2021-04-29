//creating variables for gameStates.
var PLAY = 1;
var END = 0;
var gameState = 1;

//creating variables for player, road and their images.
var player,playerI,road,roadI;

//creating variables for cars, to load their images and groups.
var car,carI,carG;
var car2,car2I,car2G;
var car3,car3I,car3G;
var car4,car4I,car4G;

//making variables when game is over.
var gameI,game;

//making variables for restart icon or image
var restart,restartI;

//making variable for crash sound
var crash;

//creating a score variable.
var score = 0;


var bikeS;

function preload(){
  //here loaoding images
  roadI = loadImage("raod.jpg");
  playerI = loadImage("motorcycle_red.png");
  barryI = loadImage("barrier_white.png");
  barry2I = loadImage("barrier_red.png");
  carI = loadImage("car_yellow_4.png");
  car2I = loadImage("car_black_1.png");
  car3I = loadImage("car_green_5.png");
  car4I = loadImage("car_blue_4.png");
  gameI = loadImage("game.jpg");
  restartI = loadImage("Flat_restart_icon.svg.png");
  crash = loadSound("car-crash-sound-eefect.mp3");
  bikeS = loadSound("motorcycle-ride-01.mp3");
}

function setup(){ 
  //creating this function to decide how much the play area will be
  createCanvas(300, 500);
   
  //creating sprite for road and loading it's image
  road = createSprite(150,250,300,500);
  road.addImage("road",roadI);

  //creating sprite for player and loading it's images with scale
  player = createSprite(150,450,20,20);
  player.addImage("bike",playerI);
  player.scale = 0.5;
  
  //creating gameover sprite and loading it's image with scale
  game = createSprite(150,250,20,20);
  game.addImage("gameover",gameI);
  game.scale = 0.4;
  
  //creating restart sprite and loading it's image with scale
  restart = createSprite(150,450);
  restart.addImage("restart", restartI);
  restart.scale = 0.05;

  
  //loading groups
  carG = new Group();
  car2G = new Group();
  car3G = new Group();
  car4G = new Group();
}
function draw() {
  
  
 
 
  //creating gameStates 
  if(gameState === PLAY){
    
  
    
    
    //this function or code will create a infinite background 
    road.velocityY = (2 + frameCount/500);
    if(road.y > 350){
      road.y = road.width / 4;
    }
    
    //this will move the player with the mouse cursor in x-axis
    //player.x = World.mouseX;
    
    //this is used to count the score
    score = score +  Math.round(getFrameRate()/60);
    
    //here loading the functions
    cars();
    cars2();
    cars3();
    cars4();
    
    //here making the controls of bike
    if(keyDown("left_arrow")){
      player.x = player.x - 3;
    }
    if(keyDown("right_arrow")){
      player.x = player.x + 3;
    }
     
    //this is the code when car touches player
    if(carG.isTouching(player)){
      gameState = END;
      crash.play();
    }
    if(car2G.isTouching(player)){
      gameState = END;
      crash.play();
    }
    if(car3G.isTouching(player)){
      gameState = END;
      crash.play();
    }
    if(car4G.isTouching(player)){
      gameState = END;
      crash.play();
    }
    
    //this code is to invisible the gameover image
    game.visible = false;
    
    //this code will make the restart icon invisible
    restart.visible = false;
    
  }  else if(gameState === END){
    
      //this code will make the  road or background stop 
      road.velocityY = 0;  
      
      //this code remove or disappear or destroy the cars
      carG.destroyEach();
      car2G.destroyEach();
      car3G.destroyEach();
      car4G.destroyEach();
    
      //this code will give the velocity 0 to cars
      carG.setVelocityYEach(0);
      car2G.setVelocityYEach(0);
      car3G.setVelocityYEach(0);
      car4G.setVelocityYEach(0);
    
      if(mousePressedOver(restart)){
        reset();
      }
    
    
      //this code will make the gameover image visible
      game.visible = true;  
    
      //this code will make the restart image visible
      restart.visible = true;
  }
  
    
  //this is used to draw or display the sprites
  drawSprites();
  //this is used to display the score on play area 
  fill("white");
  stroke("white");
  textSize(13);
  text("SCORE : " + score,200,50);
}


function reset(){
  gameState = PLAY;
  game.visible = false;
  restart.visible = false;
  
  carG.destroyEach();
  car2G.destroyEach();
  car3G.destroyEach();
  car4G.destroyEach();
  
  score = 0;
  
  player.x = 150;
  player.y = 450;
  
}





//here creating car function
function cars(){
  if(frameCount % 300 === 0){
    car = createSprite(100,50,10,30);
    
    var num;
    num = Math.round(random(1,2,3));
    if(num === 1){
      car.addImage("car",carI);
      car.x = 50;
      car.velocityY = (7 + 3*score/100);
    }  else if(num === 2){
        car.addImage("car",carI);
        car.x = 250;
        car.velocityY = (6 + 3*score/100);
    } 
    
    car.scale = 0.8;
    carG.add(car);
  }
  
}
//here creating car function
function cars2(){
  if(frameCount % 100 === 0){
    car2 = createSprite(100,50,10,30);
    
    var num2;
    num2 = Math.round(random(1,2));
    if(num2 === 1){
      car2.addImage("car",car2I);
      car2.x = 50;
      car2.velocityY = (6 + 3*score/100);
    }  else if(num2 === 2){
        car2.addImage("car",car2I);
        car2.x = 250;
        car2.velocityY = (8 + 3*score/100);
    }
    car2.scale = 0.8;
    car2G.add(car2);
  }
}
//here creating car function
function cars3(){
  if(frameCount % 500 === 0){
    car3  = createSprite(100,50,10,30);
  
    var num3;
    num3 = Math.round(random(1,2,3));
    if(num3 === 1){
    car3.addImage("car",car3I);
    car3.x = 150;
    car3.velocityY = (6 + 3*score/100); 
    }  else if(num3 === 2){
    car3.addImage("car",car3I);
    car3.x = 250;
    car3.velocityY = (7 + 3*score/100);
    }  else if(num3 === 3){
    car3.addImage("car",car3I);
    car3.x = 50;
    car3.velocityY = (5 + 3*score/100);
    }
    car3.scale = 0.8;
    car3G.add(car3);
  }
}

//here creating car function
function cars4(){
  if(frameCount % 700 === 0){
    car4 = createSprite(100,50,10,30);
    
    var num4;
    num4 = Math.round(random(1,2));
    if(num4 === 1){
      car4.addImage("car",car4I);
      car4.x = 150;
      car4.velocityY  = (6 + 3*score/300);
    }  else if(num4 === 2){
      car4.addImage("car",car4I);
      car4.x = 50;
      car4.velocityY = (8 + 3*score/100);
    }
    car4.scale = 0.8;
    car4G.add(car4);
  }
}






