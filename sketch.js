const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
    
	ball1 = Bodies.circle(400,300,17.5)
	World.add(world,ball1)
    
	ball2 = Bodies.circle(435,300,17.5)
	World.add(world,ball2)
  
	ball3 = Bodies.circle(470,300,17.5)
	World.add(world,ball3)
	  
	ball4 = Bodies.circle(365,300,17.5)
	World.add(world,ball4)
    
	ball5 = Bodies.circle(330,300,17.5)
	World.add(world,ball5)

  rope1 = new rope(ball1,roof,0,0)
  rope2 = new rope(ball2,roof,35,0)
  rope3 = new rope(ball3,roof,70,0)
  rope4 = new rope(ball4,roof,-35,0)
  rope5 = new rope(ball5,roof,-70,0)

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  ellipseMode(RADIUS)
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,17.5)
  ellipse(ball2.position.x,ball2.position.y,17.5)
  ellipse(ball3.position.x,ball3.position.y,17.5)
  ellipse(ball4.position.x,ball4.position.y,17.5)
  ellipse(ball5.position.x,ball5.position.y,17.5)

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}

//Write keyPressed function and apply force on pressing up_arrow key 
//on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball5,ball5.position,{x:-5,y:-5})
	}
}
