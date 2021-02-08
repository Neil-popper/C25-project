const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbinLeft,dustbinRight,dustbinBottom;
var trashCanImg;

function preload() {
	trashCanImg = loadImage("trashcan.png")
}


function setup() {
	createCanvas(900, 700);
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(500,680,1000,20)
	paperObject=new Paper(200,650,20);
	dustbinLeft=new Dustbin(680,620,10,90);
	dustbinRight=new Dustbin(820,620,10,90);
	dustbinBottom=new Dustbin(750,665,120,10);
}

function draw() {
  rectMode(CENTER);
  background(200);
  Engine.update(engine)
  
  dustbinLeft.display();
  dustbinRight.display();
  dustbinBottom.display();
  ground.display();
  paperObject.display();
 imageMode(CENTER)
 image(trashCanImg,750,615,165,130)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:70,y:-100});
	}
}