

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running);  
monkey.scale=0.1;  
  

  
 
  banana.scale=0.1;
  
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4
console.log(ground.x); 
  
  
bananaGroup=createGroup();  
obstacleGroup=createGroup();
}

function draw() {
background("white");
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
if (keyDown("space")){
  monkey.velocityY=-10;
}
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
    
  
 obstacles(); 
 banana(); 
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  
drawSprites();
  
}
 
function banana(){
if(frameCount%80==0){
var banana=createSprite(600,200,10,10);
banana.velocityX=-5;
banana.scale=0.1;
 
banana.addImage(bananaImage);
  
banana.y=Math.round(random(120,200));
banana.lifetime=-2
  
bananaGroup.add(banana);  
}  
  
}

function obstacles(){
if(frameCount%300==0){
 var obstacle=createSprite(600,330,10,10)
obstacle.velocityX=-2;
obstacle.addImage(obstacleImage) ;
obstacle.scale=0.1;

 obstacle.lifetime=-2; 
  
obstacleGroup.add(obstacle);
}

  
}



