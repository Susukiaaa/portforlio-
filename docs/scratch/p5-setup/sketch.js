function setup() {
    let c=createCanvas(innerWidth,  innerHeight);
    c.parent("sketch-parent");
    rectMode(CENTER);
  }
  
  function draw() {
    //background(10000);
    
    fill(200, mouseY, mouseX);
    noStroke();
    
    stroke(205, mouseX, mouseX);
    strokeWeight(1);
    line(0, 0, mouseX, mouseY);
    line(width, 0, mouseX, mouseY);
    line(width, height, mouseX,mouseY);
    line(0, height, mouseX, mouseY);
    
  }

  function windowResized(){resizeCanvas(innerwidth,
    innerHeight);}