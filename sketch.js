var boy;

var launcherBody;

var imageScale = 0.02;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
	boy = loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300,600);

	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30);

	mangoObj1 = new Mango(950,160,30);
  	mangoObj2 = new Mango(1200,120,30);
	mangoObj3 = new Mango(1000,75,30);
	mangoObj4 = new Mango(1100,175,30);
	mangoObj5 = new Mango(975,250,30);

	tree = new Tree(1050,580);

	ground = new Ground(displayWidth/2,600,displayWidth,20);

	launcherBody = new Launcher(stone.body,{x:235,y:420})

  	var render = Render.create({
    	element: document.body,
    	engine: engine,
    	options: {
      		width: 1300,
      		height: 600,
      		wireframes: false
    	}
  	});
	
	Engine.run(engine);
}

function draw() {
  background(230);
  textSize(25);
  text("Press Space To Get Another Chance!",50 ,50);
  image(boy,200,340,200,300);

  tree.display();
  stone.display();
  mangoObj1.display();
  mangoObj2.display();
  mangoObj3.display();
  mangoObj4.display();
  mangoObj5.display();
  ground.display();
  launcherBody.display();

  detectollision(stone,mangoObj1);
  detectollision(stone,mangoObj2);
  detectollision(stone,mangoObj3);
  detectollision(stone,mangoObj4);
  detectollision(stone,mangoObj5);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body,{x : mouseX,y : mouseY}) 
}

function mouseReleased() {
	launcherBody.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x : 235,y : 420}) 
	  launcherBody.attach(stone.body);
	}
  }

  function detectollision(stone,mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
   	if(distance<=mango.radius + stone.radius) {
  	  Matter.Body.setStatic(mango.body,false);
    }

}