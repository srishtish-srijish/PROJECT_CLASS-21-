var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);

  speed=random(223,321);
  weight=random(30,52)

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white");

thickness=random(22,83)


  wall=createSprite(1000,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
}
 
function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor=color("red");
    }
    if(damage<10){
      wall.shapeColor=color("green");
    }
 }
  drawSprites();
}
function hasCollided (Lbullet,Lwall){
   bulletRightEdge=Lbullet.x+Lbullet.width;
   wallLeftEdge=Lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true
   }
   return false
  }