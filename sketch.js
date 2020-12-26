
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600, 100, 300, 50);

	bob1 = new Bob(500, 300, 40);
	bob2 = new Bob(550, 300, 20);
	bob3 = new Bob(600, 300, 20);
	bob4 = new Bob(650, 300, 20);
	bob5 = new Bob(700, 300, 20);

	rope1 = new Rope(bob1.body, {x: 500, y: 100});
	rope2 = new Rope(bob2.body, {x: 550, y: 100});
	rope3 = new Rope(bob3.body, {x: 600, y: 100});
	rope4 = new Rope(bob4.body, {x: 650, y: 100});
	rope5 = new Rope(bob5.body, {x: 700, y: 100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.draw();

  bob1.draw();
  bob2.draw();
  bob3.draw();
  bob4.draw();
  bob5.draw();

  rope1.draw();
  rope2.draw();
  rope3.draw();
  rope4.draw();
  rope5.draw();

}



