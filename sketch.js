var trex, trexImg;
var ground, groundImg;
var iGround;


function preload(){
trexImg = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImg = loadImage("ground2.png");
}


function setup(){
createCanvas(600,200);

trex = createSprite(50,100,20,20);
trex.addAnimation("running",trexImg);
trex.scale = 0.5;

ground = createSprite(300,180,600,20);
ground.addImage("grd",groundImg);

iGround = createSprite(300,190,600,10);
iGround.visible = false;
}


function draw(){
background("lightgrey");

console.log(trex.y);

ground.velocityX = -4;
if(ground.x < 0){
ground.x = ground.width/2;
}

if(keyDown("space") && trex.y > 155){
trex.velocityY = -14;
}
trex.velocityY = trex.velocityY + 1;

trex.collide(iGround);

drawSprites();
}
