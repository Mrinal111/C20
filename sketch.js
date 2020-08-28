var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="gray"
  //fixedRect.debug=true
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="gray"
  //movingRect.debug=true
  R1=createSprite(1000,100,50,80);
  R1.shapeColor="lightBlue";
  R2=createSprite(1000,800,80,30);
  R2.shapeColor="lavender";
  R1. velocityY=5;
  R2.velocityY=-5
}

function draw() {
  background("black"); 
  movingRect.x=World.mouseX 
  movingRect.y=World.mouseY

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="blue"
    fixedRect.shapeColor="purple"
  }
  else{
    movingRect.shapeColor="gray"
    fixedRect.shapeColor="gray"
  }
  if(R1.x-R2.x<R2.width/2+R1.width/2
    && R2.x-R1.x<R2.width/2+R1.width/2){
      R1.velocityX=R1.velocityX*(-1)
      R2.velocityX=R2.velocityX*(-1)
    }
    if(R1.y-R2.y<R2.height/2+R1.height/2
      && R2.y-R1.y<R2.height/2+R1.height/2){
        R1.velocityY=R1.velocityY*(-1)
        R2.velocityY=R2.velocityY*(-1)
      }
  drawSprites();
}