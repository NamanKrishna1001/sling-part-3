const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var Masterbox;
var log1;
//var log2;
var log3;
 var t1,t2,t3,t4,t5,t6,t7,t8,t9;
 var t10,t11,t12,t13,t14,t15,t16,t17;
 var t18,t19,t20,t21,t22,t23,t24,t25,t26;
var score;
var balls;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create()
    world = engine.world;
    score = 0;
    balls = 0;
Masterbox=new Box(200,100,50,50);
//log1 = new Log(900,200,180,20);
log2 = new Log(900,550,180,20);
//og3 = new Log(200,580,20000,20);
t1 = new Log2(900,530,20,20);
t2 = new Log2(880,530,20,20);
t3 = new Log2(860,530,20,20);
t4 = new Log2(840,530,20,20);
t5 = new Log2(820,530,20,20);
t6 = new Log2(920,530,20,20);
t7 = new Log2(940,530,20,20);
t8 = new Log2(960,530,20,20);
t9 = new Log2(980,530,20,20);
t10 = new Log2(960,510,20,20);
t11 = new Log2(940,510,20,20);
t12 = new Log2(920,510,20,20);
t13 = new Log2(900,510,20,20);
t14 = new Log2(880,510,20,20);
t15 = new Log2(860,510,20,20);
t16 = new Log2(840,510,20,20);
t17 = new Log2(940,490,20,20);
t18 = new Log2(920,490,20,20);
t19 = new Log2(900,490,20,20);
t20 = new Log2(880,490,20,20);
t21 = new Log2(860,490,20,20);
t22 = new Log2(880,470,20,20);
t23 = new Log2(900,470,20,20);
t24 = new Log2(920,470,20,20);
t25 = new Log2(910,450,20,20);
t26 = new Log2(920,450,20,20);
t27 = new Log2(900,220,20,20);
  slingShot = new Slingshot(Masterbox.body,{x:200,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    keyPressed();
   Masterbox.display();
   
t1.display();
  //log1.display();
  log2.display();
 // log3.display();
 t2.display();
  t3.display();
  t4.display();
  t5.display();
  t6.display();
t7.display();
t8.display();
t9.display();
t10.display();
t11.display();
t12.display();
t13.display();
t14.display();
t15.display();
t16.display();
t17.display();
t18.display();
t19.display();
t20.display();
t21.display();
t22.display();
t23.display();
t24.display();
t25.display();
t26.display();

   
}


function mouseDragged(){
    Matter.Body.setPosition(Masterbox.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
  
    if(keyCode === 32){
        slingShot.attach(Masterbox.body);
      
    }
}
