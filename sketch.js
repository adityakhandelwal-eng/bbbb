
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine,ground,box1,box2,box3,dustbin;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  var options={
    isStatic:false,
    restitution:0.3,
    friction:0.3,
    density:1.2
  }
  
  paperObject=new Paper(100,100,30,30)
   
    ground=new Ground(200,400,2000,20)
  World.add(world,ground);
 dustbin=new Dustbin(500,330,20,120)

	Engine.run(engine);
	
}



function draw() {
  
  background(800);
  ground.display();

  paperObject.display();
dustbin.display();

 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45})
  }
}


