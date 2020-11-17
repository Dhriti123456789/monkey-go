
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime=0;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
createCanvas(500,500);
// creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.15;
  
// make group
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
  

  
}


function draw() {
background(220);

// make score
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime= Math.ceil(frameCount/frameRate());
  text("Survival Time: " + survivalTime,100,50);
  
  
// ground moving
  ground = createSprite(400,350,900,10);
  ground.velocityX = -12;
  ground.x = ground.width/2;
  //console.log(ground.x);

// makeing monkey jump
  if(keyDown("space")&& monkey.y >= 100){
    monkey.velocityY = -12; 
  }
// add gravity
  monkey.velocityY = monkey.velocityY + 0.8; 
  monkey.collide(ground);


  //console.log(frameCount);
  
  
  
  food();
  obstacles();
  drawSprites();
  
}

// function for bananas
function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(300,150,20,20);
    banana.velocityX = -5;
    banana.addAnimation("moving",bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.lifetime = 50;
    FoodGroup.add(banana);
  }
}

// obstacle function
function obstacles(){
  if(frameCount % 100 === 0){
    obstacle = createSprite(400,325,20,20);
    obstacle.addAnimation("moving",obstaceImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;
    obstacleGroup.add(obstacle);
  }
}




