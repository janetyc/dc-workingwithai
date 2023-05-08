let input_data = [5, 200, 30, 200, 40];

function setup() { 
  createCanvas(windowWidth, windowHeight); 
  noLoop();
} 

function draw() { 
  //Set the line gap size 
  let line_gap = 10; 
  //Set the line width 
  let line_width = 1.5; 
  //Set the line color 
  
  for(let i = 0; i<input_data.length; i++){
    stroke(random(255),random(200), random(100));
    //Loop through horizontal lines and draw vertical lines 
    for(let x = line_gap/2; x < width; x += line_gap){ 
      for(let y = line_gap/2; y < height; y += line_gap){ 
        //Generate a random bias factor to distort the line shape 
        let bias = random(-0.5, 0.5)*input_data[i]; 
        
        //Draw the lines 
        line(x + bias*line_gap, y - line_gap/2, x + bias*line_gap, y + line_gap/2); 
        strokeWeight(line_width); 
      } 
    }  
  } 
} 
