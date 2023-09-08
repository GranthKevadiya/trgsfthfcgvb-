
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;
    var balloptions = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
    ball = Bodies.circle(100,100,15,balloptions);
	World.add(world, ball);
    left = new Ground(width/2, 670, width,20);
	right = new Ground(1100,600,20,120);
    left2 = new Ground(950,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  left.display()
  right.display()
  left2.display()
  ellipse(ball.position.x,ball.position.y,30,30)
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:35,y:-35})
	}
}


