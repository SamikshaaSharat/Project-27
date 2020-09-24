
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var roofObject;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    bobDiameter = 4;
	Engine.run(engine);

	bobObject1 = new Bob(200,500,20,20);
	bobObject2 = new Bob(240,500,20,20);
	bobObject3 = new Bob(280,500,20,20);
	bobObject4 = new Bob(320,500,20,20);
	bobObject5 = new Bob(360,500,20,20);

	roofObject = new Roof(295,300,215,20);

	rope1 = new Rope(bobObject1.body,roofObject.body,-90,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-50,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-10,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,30,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,70,0);




  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function KeyPressed(){
	Matter.Body.applyForce(bobObject1.body , bobObject1.body.position{x:80 , y:100});
}

