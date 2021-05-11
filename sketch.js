var wall,thickness;



var weight,speed;

var damage;
var bullet


function setup() {
  createCanvas(1600,600);

 

  speed = random(30,103);
  
  weight = random(400,1500);

  bullet =  createSprite(50, 200, 50, 50);
bullet.shapeColor = "white"
  bullet.velocityX = speed;


 
 
  wall = createSprite(1200,200,60,100);
 


}
function draw() {
console.log(damage);


  background(0,255,0);
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX = 0
     var de = 0.5*weight*speed*speed/thickness*thickness*thickness
     if(de>3.68){
       wall.shapeColor = "red"
     }
     if(de<3.68){
      car.shapeColor = "green"
    }
    
  }
    drawSprites();

    console.log(de)
  }
