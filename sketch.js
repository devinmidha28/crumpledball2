var ball, Bin1, g1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	g1 = new Ground (400,350,800,20);
	ball = new Ball (50,300,20);

	Bin1= new dustbin(500,280);

	




	//Create the Bodies Here.




	



	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ball.display();
  fill (255);


  g1.display();
  fill("green")

  Bin1.display();
  
  drawSprites();

 
}



function keyPressed (){
  if (keyCode==32) {
    Matter.Body.applyForce(ball.object,ball.object.position,{x:65, y:-70})
  }
}