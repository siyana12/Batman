const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var drops = [];
var engine, world;
var Img1, Img2, Img3, Img4;
var walk1, walk2, walk3, walk4, walk5, walk6, walk7, walk8;
var WM

function preload(){
  WM=loadImage("images/WalkingMan/walking_1.png")
  Img1=loadImage("images/ThunderBolts/1.png")
  Img2=loadImage("images/ThunderBolts/2.png")
  Img3=loadImage("images/ThunderBolts/3.png")
  Img4=loadImage("images/ThunderBolts/4.png")
}

function setup(){ 
   var canvas = createCanvas(900,600)
   engine = Engine.create();
   world = engine.world;
    
}

function draw(){
    background("black");

    Engine.update(engine);
    image(WM , 305,300,300,300);
    image(Img1, 300,-50,300,300);

    if(frameCount%30===0){
      drops.push(new Drop(random(1, 900), 5,5));
    }
  
   for (var j = 0; j < drops.length; j++) {
    
      drops[j].display();
    }
}   

