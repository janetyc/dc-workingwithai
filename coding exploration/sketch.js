function setup() { 
  createCanvas(windowWidth, windowHeight); 
  noLoop();
} 

function draw() { 
  //Set the line gap size 
  let line_gap = 10; 
  //Set the line width 
  let line_width = 2; 
  //Set the line color 
  stroke(255,200, 0); 

  //Loop through horizontal lines and draw vertical lines 
  for(let x = line_gap/2; x < width; x += line_gap){ 
    for(let y = line_gap/2; y < height; y += line_gap){ 
      //Generate a random bias factor to distort the line shape 
      let bias = random(-0.5, 0.5); 
      
      //Draw the lines 
      line(x + bias*line_gap, y - line_gap/2, x + bias*line_gap, y + line_gap/2); 
      strokeWeight(line_width); 
    } 
  } 
}
