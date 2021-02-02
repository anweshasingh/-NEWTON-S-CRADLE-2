const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeoght/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse;
	}
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.
	bobObject1 = new Bob(300, 400);
	bobObject2 = new Bob(350, 400);
	bobObject3 = new Bob(400,400);
	bobObject4 = new Bob(450,400);
	bobObject5 = new Bob(500,400);

	roof = new Roof(400,200,250,25);

	rope1 = new Rope(bobObject1.body, roof.body, -100, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -50, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 50, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -50, y:-45})
	}
}

function mouseDragged() {
	Matter.Body.setPosition(pendulum.body, {x: mouseX, y:mouseY});
}
