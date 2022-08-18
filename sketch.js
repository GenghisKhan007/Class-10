
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation ("trex1.png", "trex3.png", "trex4.png")
groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite (50,150.20,50);
 trex.addAnimation("running", trex_running)
ground = createSprite(300,180,600,20);
ground.addImage(groundImage);
}

function draw(){
  background("white")
 if (keyDown("Space")){
  trex.velocityY = trex.velocityY -10;

 } 
 trex.velocityY = trex.velocityY +0.5;
 trex.collide(ground);
 ground.velocityX=ground.velocityX -3;
if(ground.x<0 ){
  ground.x= ground.width/2
}
drawSprites();
}
