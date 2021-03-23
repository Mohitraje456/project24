var box1
var paper1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1495, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground(748,650,1497,20);
	paper1 = new Paper(100,400,70,70);
	box2 = new Dustbin(1190,590,20,100);
	box3 = new Dustbin(1410,590,20,100);
	box1 = new Dustbin(1300,630,200,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
  }
}



