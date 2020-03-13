const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball; 
var constrainedPlatform;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(400,400,200,200);
    platform = (ball.body,{x:200, y:50});
     var options ={
     bodyA:ball.body,
     bodyB:constrainedPlatform.body,
     stiffness: 0.04,
     length: 10
    }
}

function draw(){
  background(0);


}
