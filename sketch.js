const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var con;
var ball2;
var con2;
var ball3;
var con3;
var ball4;
var con4;
var ball5;
var con5;


function setup() {

createCanvas(400,400);
engine = Engine.create();

world = engine.world;

var ball_options = {

restitution : 0.5

}


ball = Bodies.circle(200,50,10,ball_options);
World.add(world,ball);

ball2 = Bodies.circle(350,50,12,ball_options);
World.add(world,ball2);

ball3 = Bodies.circle(500,50,14,ball_options);
World.add(world,ball3);

ball4 = Bodies.circle(650,50,16,ball_options);
World.add(world,ball4);

ball5 = Bodies.circle(800,50,18,ball_options);
World.add(world,ball5);

con = Matter.Constraint.create({

  pointA:{x:200,y:20},
  bodyB:ball,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1

});

World.add(world,con);

con2 = Matter.Constraint.create({

  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1

});

World.add(world,con2);

con3 = Matter.Constraint.create({

  bodyA:ball2,
  pointA:{x:0,y:0},
  bodyB:ball3,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1

});

World.add(world,con3);

con4 = Matter.Constraint.create({

  bodyA:ball3,
  pointA:{x:0,y:0},
  bodyB:ball4,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1

});

World.add(world,con4);

con5 = Matter.Constraint.create({

  bodyA:ball4,
  pointA:{x:0,y:0},
  bodyB:ball5,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.1

});

World.add(world,con5);

rectMode(CENTER);
ellipseMode(RADIUS);

}


function draw() {
  
background(51);
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,10);
ellipse(ball2.position.x,ball2.position.y,12);
ellipse(ball3.position.x,ball3.position.y,14);
ellipse(ball4.position.x,ball4.position.y,16);
ellipse(ball5.position.x,ball5.position.y,18);


push();
strokeWeight(2);
stroke(255);
line (con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line (ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
line (ball2.position.x,ball2.position.y,ball3.position.x,ball3.position.y);
line (ball3.position.x,ball3.position.y,ball4.position.x,ball4.position.y);
line (ball4.position.x,ball4.position.y,ball5.position.x,ball5.position.y);
pop();
}

function keyPressed() {

if(keyCode==RIGHT_ARROW) {

Matter.Body.applyforce(ball,{x:0,y:0},{x:0.05,y:0});

  }

}