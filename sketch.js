var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);

  movingRect=createSprite(600,200,50,20);
  fixedRect=createSprite(400,300,20,90);

movingRect.shapeColor='red';
fixedRect.shapeColor='yellow';

movingRect.debug=true;
fixedRect.debug=true;

}

function draw() {
background('white');  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;


if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  && fixedRect.x - movingRect.x <fixedRect.width/2 + movingRect.width/2 
  && movingRect.y - fixedRect.y< fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.y/2){
movingRect.shapeColor="blue";
fixedRect.shapeColor="blue";
}
else{
  movingRect.shapecolor="green"
  fixedRect.shapeColor="green"
}
  drawSprites();
}