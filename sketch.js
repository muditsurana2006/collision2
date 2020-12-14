var fixedRect,movingRect,gameObject1,gameObject2;
function setup() {
  createCanvas(1200,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="green";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
gameObject1=createSprite(300,200,50,80);
gameObject1.shapeColor="green";
gameObject2=createSprite(400,200,50,80);
gameObject2.shapeColor="green";

  fixedRect.debug=true;
  movingRect.debug=true;
  gameObject1.debug=true;
  gameObject2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    gameObject1.shapeColor="green";
    movingRect.shapeColor="green";
  }

  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x-object2.x < object1.width/2+object2.width/2
    && object2.x-object1.x < object1.width/2+object2.width/2
    && object1.y-object2.y<object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2){
    return true;
  }
  else{
   return false;
  }
}


