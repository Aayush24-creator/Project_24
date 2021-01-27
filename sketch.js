
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper (100,300,20);
	ground = new Ground (400,680,800,20);

	dustbin1 = new Dustbin (500,660,250,20);
	dustbin2 = new Dustbin (380,570,20,200);
	dustbin3 = new Dustbin (620,570,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
    
  drawSprites();

  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();


 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position ,{x:60,y:50});
	}
}



