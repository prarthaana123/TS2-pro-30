const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275,30,40);
  block2 = new Block(450,275,30,40)
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  b1 = new Block(900,275,30,40);
  b2 = new Block(900,315,30,40);
  b3 = new Block(870,315,30,40);
  b4 = new Block(930,315,30,40);
  b5 = new Block(900,355,30,40);
  b6 = new Block(870,355,30,40);
  b7 = new Block(840,355,30,40);
  b8 = new Block(930,355,30,40);
  b9 = new Block(960,355,30,40);
  


}

function draw() {
  background("brown");
  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  fill("hotpink")
  block2.display();
  fill("babypink")
  block3.display();
  fill("red ")
  block4.display();
  fill("blue")
  block5.display();
  fill("pink")
  block6.display();
  fill("purple")
  block7.display();
  fill("yellow")
  block8.display();
  fill("orange")
  block9.display();
  fill("lime")
  block10.display();
  fill("pink")
  block11.display();
  fill("cyan")
  block12.display();
  fill("skyblue")
  block13.display();
  fill("blue")
  block14.display();
  fill("gold")
  block15.display();
  fill("silver ")
  block16.display(); 
  fill("white")

  b1.display();
  fill("orange");
  b2.display();
  fill("red")
  b3.display();
  fill("blue")
  b4.display();
  fill("magnite")
  b5.display();
  fill("yellow")
  b6.display();
  fill("gold")
  b7.display();
  fill("silver ")
  b8.display();
  fill("lime")
  b9.display();
  fill("pink")

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}