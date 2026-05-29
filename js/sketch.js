const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var nave,naveImg;
var fundo;
var predio1, predio1Img;
var predio2, predio2Img;
var predio3, predio3Img;
var predio4, predio4Img;
var luzinha, luzinhaImg;
var cesta1, cesta2, cesta3;
var aceso = false;

function preload(){
 naveImg = loadImage("assets/Nave.png")
 fundo = loadImage("assets/fundocidade.png")
 luzinhaImg = loadImage("assets/cone.png")
 predio1Img = loadImage("assets/predio1.png")
 predio2Img = loadImage("assets/predio2.png")
 predio3Img = loadImage("assets/predio3.png")
 predio4Img = loadImage("assets/predio4.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  var chao_options = {
		isStatic: true
	  }
  
  
  luzinha = createSprite(width/2,height/2+100,50,100)
  luzinha.addImage(luzinhaImg)
  luzinha.tint = "lightgreen"
  luzinha.scale = 0.09
  luzinha.visible = false
  

  nave = createSprite(width/2,height/2,60,45)
  nave.addImage(naveImg)
  nave.scale = 0.1

 
  
 

  chao = Bodies.rectangle(width/2,height-10,width,20,chao_options);
	World.add(world,chao);

  cesta1 = Bodies.rectangle(width-117,height/2,200,20,chao_options);
	World.add(world,cesta1);

  cesta2 = Bodies.rectangle(width-210,height/2-30,20,80,chao_options);
	World.add(world,cesta2);

  cesta3 = Bodies.rectangle(width-27,height/2-30,20,80,chao_options);
	World.add(world,cesta3);


predio1 = new Predio(200,500,100,100,predio1Img)


  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw(){
  background(fundo);

  Engine.update(engine);
 
 controles()

 rectMode(CENTER);
 fill("gray");
 rect(chao.position.x,chao.position.y,width,20);

 rectMode(CENTER);
 fill("gold");
 rect(cesta1.position.x,cesta1.position.y,200,20);

 rectMode(CENTER);
 fill("gold");
 rect(cesta2.position.x,cesta2.position.y,20,80);

 rectMode(CENTER);
 fill("gold");
 rect(cesta3.position.x,cesta3.position.y,20,80);

predio1.show()

  drawSprites(); 
}

function controles(){
 if(keyDown("d")){
  nave.x+=10
 } 
 if(keyDown("a")){
  nave.x-=10
 } 
 if(keyDown("w")){
  nave.y-=10
 } 
 if(keyDown("s")){
  nave.y+=10
 } 
  luzinha.x = nave.position.x+5
 luzinha.y = nave.position.y+75
}

function keyPressed(){
  if(keyIsDown(32) && colision(predio1.body,luzinha)===true){
  
  if(aceso){
    predio1.prender()
    Matter.Body.setStatic(predio1.body,true)
  }
  }
  else{
    Matter.Body.setStatic(predio1.body,false)
  }
  if(keyCode===32){
    luzinha.visible = true
    aceso = true
  }
}

function keyReleased(){
  if(keyCode===32){
    luzinha.visible = false
    aceso = false
    }
}

function colision(body,sprite){
    var D = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y)
   console.log(D)
    if(D<=80){
      return true
    }
    else{
      return false
  }
}


