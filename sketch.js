
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var roof;
var bobDiameter=2
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=Bodies.rectangle(400,100,400,20)
bob1=new Bob(200,300,20)
bob2=new Bob(300,300,20)
bob3=new Bob(400,300,20)
bob4=new Bob(500,300,20)
bob5=new Bob(600,300,20)
rope1=new rope(bob1.body,roof,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(roof.position.x,roof.position.y,400,20)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}



