/**
 * The user can type and their words will appear on the screen.
 */

// via coding train


 
let message = "";




function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(48);
  fill(196, 177, 139);
  noStroke();
}

function draw(){
  background(189, 63, 49);
  text(message, 10, 50);
}

function keyPressed(){
	// First check if the key is something we want to type.
  if (key.length == 1 && key.match(/[\S,\ ,\n]/)) {
    message = message + key;
  // Otherwise, if it is the backspace key remove one charater.
  } else if (keyCode == BACKSPACE || keyCode == DELETE){
    message = message.substr(0, message.length - 1);
	// If it is the enter key, then add a newline.
  } else if (keyCode == ENTER){
  	message += "\n";
  }
  return false;
}
