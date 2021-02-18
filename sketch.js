const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var particles = [];



function setup() { 
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 

  
}

function draw() {
  Engine.update(engine);
  background("black");
  
  if (frameCount % 1 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

 
  
  for (var k = 0; k < particles.length; k++){
    // particles.push(new createparticles(random(0,400), random(0,400)));
     particles[k].display();
   }
 

  

  drawSprites();
  
  
}

