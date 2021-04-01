
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stand,block1,block2,block3,block4,block5,block6,chain,polygon
var engine,world
var score = 0
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	polygon = new Polygon(200,360)
   chain = new SlingShot(polygon, {x:200, y: 350})
   stand = new Ground(450,450,400,5)
    block1 = new Box(450,430,40,40)
   block2 = new Box(410,430,40,40)
    block3 = new Box(490,430,40,40)
   block4 = new Box(465,390,40,40)
   block5 = new Box(430,390,40,40)
    block6 = new Box(445,350,40,40)
    

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  drawSprites();
 chain.display()
 
polygon.display()
 
 
 
 
 stand.display()
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()
block6.display()
block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
text ("SCORE:",+score, 300,30)
}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
function score(){
  if(this.visibility<0 && this.visibility>-105){
    score++
  }
}