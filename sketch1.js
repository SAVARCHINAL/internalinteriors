//Sav Archinal 

// var speed = 10;
var rectX = 228;
var rectY = 285;

var song;
// var rectWidth =100;
// var rectHeight =100;

// var img;


function preload(){
  song = loadSound("img/wind.mp3");
  
}


function setup() {
createCanvas(windowWidth,windowHeight);
song.loop();
}

function draw() {
background(207, 75, 48);
stroke(1);
  
 
 
  //stroke(196, 177, 139);
  
  
  //house
  fill(189, 63, 49);
  rect(width/2.5+50, height/3, 200,300);
  
  fill(196, 59, 80);
  rect(width/2.5+50, height/3 +250, 200,60);
  
  //door
  fill(207, 93, 48);
  
  rect(width/2.5 + 140,height/3 + 200,20,50);
  fill(212, 0, 42);
  ellipse(width/2.5 +155 ,height/3+228,3,3);
  
  //steps
  fill(196, 59, 59);
  rect(width/2.5 + 75+50,height/3 + 250,50,10);
  rect(width/2.5 + 70+50,height/3 + 260,60,10);
   rect(width/2.5 + 65+50,height/3 + 270,70,10);
    rect(width/2.5 + 60+50,height/3 + 280,80,10);
  rect(width/2.5 + 55+50,height/3 + 290,90,10);

  //window
  fill(196, 177, 139);
rect(width/2.5 + 25+50,height/3 + 80,40,40);
     rect(width/2.5 + 138+50,height/3 + 80,40,40);
  

  
 

   
 if(keyIsPressed){
 
  print('key was pressed!');
  fill(random(255));
  rect(width/2.5 + 25+50,height/3 + 80,40,40);
   rect(width/2.5 + 138+50,height/3 + 80,40,40);
  
  
}

  

   
 
 
    
    

  // image(img,rectX,rectY);
  // //left window panes
 
  // fill(189, 63, 49 );
  // noStroke();
  // rect(302,280,71,50)
  
  // left window panes
  stroke(1);
 rect(width/2.5 + 45+50,height/3 + 80,1,40);
  rect(width/2.5 + 25+50,height/3 + 100,40,1);
  
  
  fill(212, 57, 0)
  rect(width/2.5 + 20+50,height/3 + 120,50,10);
  
  
  
  
   //right window panes
rect(width/2.5 + 158+50,height/3 + 80,1,40);
  rect(width/2.5 + 138+50,height/3 + 100,40,1);
  
  
  
  //window seal
   fill(212, 57, 0)
  rect(width/2.5 + 133+50,height/3 + 120,50,10);
  
  
 
 
  //roof
  fill(245, 108, 66);
  triangle(width/2.5+50,height/3,width/2.5+100+50,height/3-100,width/2.5+200+50,height/3);
  

  
  
  
  fill(222, 93, 93);
  
  
  
  
  
  

  
}


  
      






  
  
  
// ellipse(width/2 + 100,height/3 - 40,40,40);
// fill(0);
// ellipse(width/2 + 100,height/3 - 40,20,20);
// rect(width/2 + 98,height/3 - 31,5,10);
// //rect(width/2 + 96,height/3 - 31,10,10);
  
 
  
//   
  
// function keyPressed () {
//   if (key === " ") {
//   fill(random(255));
//   rect(width/2.5 + 25+50,height/3 + 80,40,40);
//    rect(width/2.5 + 138+50,height/3 + 80,40,40);
//   }
// }

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}

  




