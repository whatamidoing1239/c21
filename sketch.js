
var fixedRect,movingRect;

function setup() {
  createCanvas(1200,600);
fixedRect=createSprite(400, 200, 50, 80);
fixedRect.shapeColor='green';
movingRect=createSprite(400,400,80,50);
movingRect.shapeColor='green'
gameobj2=createSprite(100,200,80,50);
gameobj2.shapeColor='green'
gameobj3=createSprite(200,200,80,50);
gameobj3.shapeColor='green'
movingRect.velocityY=-5;
fixedRect.velocityY=5;
}

function draw() {
  background(0);
  gameobj2.y=mouseY;
  gameobj2.x=mouseX; 
  
 if(isTouching(gameobj3,gameobj2)){
  gameobj3.shapeColor='red';
  gameobj2.shapeColor='red';
   
 }
else{
  gameobj3.shapeColor='green';
  gameobj2.shapeColor='green';
}
bounceOff(movingRect,fixedRect);

  drawSprites();
}

