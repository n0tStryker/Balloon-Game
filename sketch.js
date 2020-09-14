var bow,  arrow, arrowGroup;
var bg, balloonsGroup;
var gameState = PLAY;
var PLAY = 1;
var END = 0;


function preload(){
  pinkballoon = loadImage("pink_balloon0.png")
  redballoon = loadImage("red_balloon0.png")
  greenballoon = loadImage("green_balloon0.png")
  blueballoon = loadImage("blue_balloon0.png")
  bkgnd = loadImage("background0.png")
  bow1 = loadImage("bow0.png")
  arrow1 = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  bg = createSprite( 300, 300, 600, 600);
  bg.addImage(bkgnd);
  bg.scale = 2.5;
  bow = createSprite(500, 300, 40, 60)
  bow.addImage(bow1);
  bow.scale = 1.5;
 

  bg.velocityX = -3;
 
  score = 0;
  balloonsGroup = createGroup()
  arrowGroup = createGroup()
}

function draw() {
  
   text("Score: "+ score, 350,50);   
  if (bg.x<0){
   bg.x = bg.width/2 
  }
  bow.y = mouseY;

  for(var i =100; i<=500; i=i+100){
}
  if (keyDown("space")&& frameCount % 20 === 0 ){
   createArrow()
  }
  if (gameState === PLAY)  arrow.istouching(balloon3);{
    score = score + 1;
  }
  spawnballoon1();
  spawnballoon2();
  spawnballoon3();
  spawnballoon4();
  
  
  if( balloonsGroup.isTouching(arrowGroup)){
     balloonsGroup.destroyEach()
     arrowGroup.destroyEach()
    score = score+1
     
     
  }     

drawSprites();
}




function spawnballoon1(){
  if(frameCount % 80 === 0){
    var balloon1 = createSprite(Math.round(random(20,600),Math.round(random(20,600)) ,10,10))
  balloon1.addImage(pinkballoon)
  balloon1.velocityY = -3;
  balloon1.lifetime =150;
 balloonsGroup.add(balloon1);
 

  }
}
function spawnballoon2(){
  if(frameCount % 80 === 0){
    var balloon2 = createSprite(50,Math.round(random(20,600)) ,10,10);
  balloon2.addImage(redballoon)
  balloon2.velocityY = -3;
  balloon2.lifetime =150;
  balloon2.scale = 0.1
  balloonsGroup.add(balloon2);
 
  }

}

function spawnballoon3(){
  if(frameCount % 80 === 0){
    var balloon3 = createSprite(50,Math.round(random(20,600)) ,10,10);
  balloon3.addImage(blueballoon)
  balloon3.velocityY = -3;
  balloon3.lifetime =150;
  balloon3.scale = 0.1
  balloonsGroup.add(balloon3);
 
  }
;  
  
}
   function spawnballoon4(){
     if(frameCount % 80 === 0){
    var balloon4 = createSprite(50,Math.round(random(20,600)) ,10,10);
  balloon4.addImage(greenballoon)
  balloon4.velocityY = -3;
  balloon4.lifetime =150;
  balloon4.scale = 0.1
  balloonsGroup.add(balloon4);

  }

  
}

function createArrow(){
  var  arrow = createSprite(500,300,50,50);
  arrow.addImage(arrow1)
  arrow.scale = 0.5
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4
  arrow.lifetime = 100
  arrowGroup.add(arrow);
  
  
  
  
}