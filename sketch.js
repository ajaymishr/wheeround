var bg,bgimage,ground1,groundimage1,ground2,engine,world,wheel,wheelimage,coin,coingroup,coinimage,mastercoin;
var score=0;
var enemy,enemygroup,enemyimage;
var heart3,heartimage,scoreimage,scoretext,mastercoinimage,masterenemy,masterenemyimage;
var mastercoingroup,masterenemygroup,masterenemyimaged,over,overimage,bursttire;
var leaves=1;
function preload(){
    bgimage=loadImage("tower.png");
    groundimage1=loadImage("grounds.png");
    wheelimage=loadImage("car.png")
    coinimage=loadImage("Coin.png")
    enemyimage=loadImage("Enemy.png")
    heartimage=loadImage("heart.png")
    scoreimage=loadImage("Equal.png")
    mastercoinimage=loadImage("Masterc.png")
    masterenemyimage=loadImage("Mastere.png")
    masterenemyimaged=loadImage("Mastered.png")
    overimage=loadImage("over.jpg")
    bursttire=loadImage("Bursttire.png")
}
function setup(){
    createCanvas(1300,550);
    over=createSprite(650,275,1550,700);
    over.addImage(overimage);
    bg=createSprite(650,275,1550,700);
    scoretext=createSprite(30,70,20,20);
    scoretext.addImage(scoreimage);
    scoretext.scale=0.05;
    heart3=createSprite(1245,60,20,20);
    heart3.addImage(heartimage);
    heart3.scale=0.06;
    ground1=createSprite(650,530,0,20);
    ground2=createSprite(650,20,0,20);
    ground1.addImage(groundimage1)
    ground2.addImage(groundimage1)
    wheel=createSprite(100,200,30,30);
    wheel.addImage(wheelimage);
    bg.addImage(bgimage);
    bg.scale=1.85;
    wheel.scale=0.1;
    wheel.setCollider("circle",0,0,400)
    coingroup=new Group();
    enemygroup=new Group();
    mastercoingroup=new Group();
    masterenemygroup=new Group();
}
function draw(){
background("black");
textSize(30);
fill("red");
strokeWeight(3);
stroke("yellow");
drawSprites();
text(leaves,1270,70)
  bg.velocityX=-(score/10+1.6);
  wheel.rotationSpeed=-(bg.velocityX);
  wheel.velocityY=wheel.velocityY+1;
  wheel.collide(ground1)
  wheel.collide(ground2)
  if(touches.length>0&&wheel.y>250||keyDown("space")&&wheel.y>250){
 wheel.velocityY=-22;
 touches=[];
  }
  if(wheel.isTouching(coingroup)){
      score=score+1;
      coingroup.destroyEach();
  }
  if(wheel.isTouching(mastercoingroup)){
    score=score+5;
    mastercoingroup.destroyEach();
  }
  if(wheel.isTouching(enemygroup)){
    leaves=leaves-1
    enemygroup.destroyEach();
  }
  coins();
  enemys();
  mastercoins();
  masterenemys();
ground1.x=bg.x;
ground2.x=bg.x;
if(bg.x<550){
    bg.x=750
}
if(wheel.isTouching(masterenemygroup)){
  over.depth=bg.depth;
  over.depth=ground1.depth;
  over.depth=ground2.depth;
  scoretext.depth=over.depth;
  heart3.depth=over.depth;
  scoretext.depth++
  heart3.depth++
  over.depth++
  coingroup.destroyEach();
  mastercoingroup.destroyEach();
  enemygroup.destroyEach();
  masterenemygroup.destroyEach();
  wheel.rotationSpeed=0;
  wheel.addImage(bursttire)
}
if(leaves<1){
  over.depth=bg.depth;
  over.depth=ground1.depth;
  over.depth=ground2.depth;
  scoretext.depth=over.depth;
  heart3.depth=over.depth;
  scoretext.depth++
  heart3.depth++
  over.depth++
  coingroup.destroyEach();
  mastercoingroup.destroyEach();
  enemygroup.destroyEach();
  wheel.rotationSpeed=0;
  wheel.addImage(bursttire)
  masterenemygroup.destroyEach();
}
text(score,65,80);
  
}
function coins(){
    if(frameCount%90===0){
      coin=createSprite(1310,random(75,475),20,20);
      coin.addImage(coinimage);
      coin.velocityX=bg.velocityX;
      coin.scale=0.035;
      coin.lifetime=-(coin.velocityX)/1300
      coingroup.add(coin);
      coin.rotationSpeed=-(bg.velocityX);
    }
  }
  function mastercoins(){
    if(frameCount%300===0){
      mastercoin=createSprite(1310,random(75,475),20,20);
      mastercoin.addImage(mastercoinimage);
      mastercoin.velocityX=bg.velocityX;
      mastercoin.scale=0.05;
      mastercoin.lifetime=-(mastercoin.velocityX)/1300
      mastercoingroup.add(mastercoin);
    }
  }
  function enemys(){
    if(frameCount%160===0){
    enemy=createSprite(1310,random(75,475),20,20);
    enemy.addImage(enemyimage);
    enemy.velocityX=bg.velocityX-1.5;
    enemy.lifetime=-(enemy.velocityX)/1300;
    enemy.scale=0.3;
      enemygroup.add(enemy);
      enemy.setCollider("circle",5,20,90)
  }
}
function masterenemys(){
  if(frameCount%756===0){
  masterenemy=createSprite(1310,50,20,20);
  masterenemy.addImage(masterenemyimaged);
  masterenemy.scale=0.03;
  masterenemy.velocityX=-(score/10+1.6);
  masterenemy.lifetime=-(masterenemy.velocityX)/1300;
    masterenemygroup.add(masterenemy);
    masterenemy.setCollider("rectangle",0,0,2200,680)
}
if(frameCount%586===0){
  masterenemy=createSprite(1310,498,20,20);
  masterenemy.addImage(masterenemyimage);
  masterenemy.scale=0.03;
  masterenemy.velocityX=-(score/10+1.6);
  masterenemy.lifetime=-(masterenemy.velocityX)/1300;
    masterenemy.setCollider("rectangle",0,0,2200,680)
    masterenemygroup.add(masterenemy);
}
}