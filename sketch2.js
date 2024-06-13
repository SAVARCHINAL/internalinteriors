var song; 

function setup() {
  createCanvas(windowWidth,600);
}

function draw() {
background(189, 63, 49);
noStroke();
fill(245, 108, 66);
rect(width/2.5,0,300,400);
  
fill(181, 83, 104);
rect(150+425,400,300,400);
triangle(425,600,150+425,400,150+425,600);
triangle(450+425,600,450+425,400,600+425,600);




 
}
function keyPressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
  
