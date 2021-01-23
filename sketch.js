
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1, bob2, bob3, bob4, bob5;
var roof;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300, 500, 50);
	bob2 = new Bob(350, 500, 50);
	bob3 = new Bob(400, 500, 50);
	bob4 = new Bob(450, 500, 50);
	bob5 = new Bob(500, 500, 50);
	
	
	

	roof = new Roof(400, height/5, width, 30);

	string1 = new String(bob1.body, {x: 300, y: height/5});
	string2 = new String(bob2.body, {x: 350, y: height/5});
	string3 = new String(bob3.body, {x: 400, y: height/5});
	string4 = new String(bob4.body, {x: 450, y: height/5});
	string5 = new String(bob5.body, {x: 500, y: height/5});

	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: 10, y: 0});
	}
}


function draw() {
  rectMode(CENTER);
  background(51);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  
  drawSprites();
	
}



