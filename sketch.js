const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var gameState = "start";
var ironBall;
var nail;

function preload() {
  ballImg = loadImage("images/basketball.png");
  ironImg = loadImage("images/ironball.png");
}

function setup() {
  var canvas = createCanvas(800, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(400, 480, 800, 40, true);
  leftWall = new Box(0, 250, 20, 500,true);
  rightWall = new Box(790, 250, 20, 500,true);

  stand = new Box(350, 450, 30, 50, true);
  basketBottom = new Box(350, 150, 100, 20,true);
  basketLeft = new Box(300, 120, 15, 50,true);
  basketRight = new Box(400, 120, 15, 50,true);
  slantedPlank = new Box(350, 430, 300, 20,false); 
  ball = new Box(485, 390, 30,30, ironBall);

  // Uncomment the correct line of code
  /*nail = new Sling(
      {x:basketBottom.body.position.x,
      y:basketBottom.body.position.y}, 
      basketBottom.body);*/
  /*nail = new Sling(
    {x:stand.body.position.x,
      y:stand.body.position.y},
      stand.body);*/
  /*nail = new Sling(
    {x:slantedPlank.body.position.x,
      y:slantedPlank.body.position.y}, 
      slantedPlank.body);*/
 /* nail = new Sling(
    {x:ground.body.position.x,
      y:ground.body.position.y}, 
      ground.body);*/

 // Uncomment the correct line of code
  //ironBall = new Ball(250, 50, 60, ironImg);
  //ironBall = new Ball(250, 100, 60, ironImg);
  //ironBall = new Ball(250, 200, 60, ironImg);
  //ironBall = new Ball(250, 300, 60, ironImg);
  
  
  
}

function draw() {
  background("#ffde34");
  Engine.update(engine);
  textSize(20);
  
  text("Click to drop the ball !!",500,100);
  text("Drop the basket ball into the basket", 450,150);
  ground.display();
  leftWall.display();
  rightWall.display();


  stand.display();
  slantedPlank.display();
  basketBottom.display();
  basketLeft.display();
  basketRight.display();
  ball.displayWithImage(ballImg);
  
  nail.display();
  
  ironBall.display();

  var collision = Matter.SAT.collides(basketBottom.body, ball.body);
  if (collision.collided) {
    gameState = "collided";
    Matter.Body.setPosition(slantedPlank.body,{x:350,y:430})
    Matter.Body.setStatic(slantedPlank.body, true);
  }

  
}

function mousePressed(){
  if(gameState === "start"){
  Matter.Body.setStatic(ironBall.body, false);
  Matter.Body.setStatic(slantedPlank.body, false);
  Matter.Body.setStatic(ball.body, false);
  }
}





