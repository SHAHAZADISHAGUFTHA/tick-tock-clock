
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  background(0);
 
  fill("brown");
  textSize(28);
  text("...<<clock by coding>>... ", 100,400); 

  translate(200,200)
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(9);
  stroke(rgb(0,128,0));
  noFill();
  let end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("yellow");
  let end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("red");
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  

  push();
  rotate(end);
  stroke("light pink");
  line(0,0,98,0);
  pop();
  
  push();
  rotate(end2);
  stroke(rgb(0,206,209));
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke(rgb(0,128,129));
  line(0,0,60,0);
  pop();
  
  stroke(rgb(128,0,129));
  point (0,0);

}
  
  