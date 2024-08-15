let cor;
let vertical;
let horizontal;

function setup() {
  createCanvas(1000, 800);
  background('#F44336');
  cor=color(random(0,255),random(0,255),random(0,255));
  vertical=400;
  horizontal=500;
}

function draw() {

  circle(horizontal,vertical,50);
  fill(cor);
  
  if(mouseX < horizontal) {
    horizontal--
  }
   if(mouseX > horizontal) {
    horizontal++
  }
   if(mouseY < vertical) {
    vertical--
  }
    if(mouseY > vertical) {
    vertical++
  }
}