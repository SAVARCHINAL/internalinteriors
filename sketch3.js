//sav Archinal

let video;



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  video = createCapture(VIDEO);
  video.size(windowWidth,windowHeight);
  video.hide();

}

function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}

function draw() {
  background(255);
  
  let gridSize =5;
  
  video.loadPixels();
  for (let y=0; y<video.height; y+=gridSize) {
    for (let x=0; x<video.width; x+=gridSize) {
      
      let index =(y * video.width + x) *4;
      let r = video.pixels[index];
      let dia = map(r,0,255, gridSize,2);
      
      fill(181, 83, 104);
      stroke(245, 108, 66);
      rect(x+gridSize/2,y+gridSize/2,dia); 
      
  
      
      
      

      
      
   }
  }
}



