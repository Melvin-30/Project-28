
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gameState="play";

function preload()
{
	this.tree=loadImage("images/tree.png")
	this.boy=loadImage("images/boy.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new ground(400,600,800,20)
	mango1=new Mango(450,300,40,40)
	mango2=new Mango(550,300,40,40)
	mango3=new Mango(650,300,40,40)
	mango4=new Mango(700,300,40,40)
	mango5=new Mango(500,200,40,40)
	mango6=new Mango(600,215,40,40)
	mango7=new Mango(700,200,40,40)
	mango8=new Mango(656,265,40,40)
	stone=new Stone(135,480,50,50)
	launch1=new launch(stone.body,{x:135,y:480})
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground1.display();
  imageMode(CENTER)
  image(this.tree,600,350,500,500)
  imageMode(CENTER)
  image(this.boy,200,540,200,200)
  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  
  drawSprites();
 
}
function detectCollision(stoneName,mangoName){
	mangoPos=mangoName.body.position
	stonePos=stoneName.body.position
	var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
	if(distance<=mangoName.width+stoneName.width){
		Matter.Body.setStatic(mangoName.body,false)
    }
    console.log(distance)
}
function mouseDragged(){
    if(gameState==="play"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    launch1.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32){
        launch1.attach(stone.body);
        gameState="play";
    }
}