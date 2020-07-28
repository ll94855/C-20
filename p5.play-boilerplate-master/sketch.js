var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100, 200, 80, 30);
  movingRect = createSprite(400, 200, 30, 80);

  fixedRect.velocityX = 2;

}

function draw() {
  background(0,0,0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  bounceOff();

  drawSprites();
}


  function bounceOff()
  {
    if(fixedRect.x -movingRect.x<movingRect.width/2+fixedRect.width/2 && movingRect.x - fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.y -movingRect.y<movingRect.height/2+fixedRect.height/2 && movingRect.y - fixedRect.y<movingRect.height/2+fixedRect.height/2)
    {
      fixedRect.velocityX = fixedRect.velocityX * -1;
      fixedRect.velocityY = fixedRect.velocityY * -1;
    }
  }