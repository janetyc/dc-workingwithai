let temperature_data;
let i;
function setup() { 
  createCanvas(windowWidth, windowHeight); 
  background(255); 
  stroke(0);
  strokeWeight(2)
  i=0;
  
  //read data from json
  d3.json("forecast.json").then((data) => {
    console.log(data);
    temperature_data = data.hourly.temperature_2m;
    print(temperature_data)
    
    //draw pattern
    for (let x = 0; x < windowWidth; x += 10) { 
      for (let y = 0; y < windowHeight; y += 10) { 
        let randomOffset = random(-5, 5);
        line(x + randomOffset, y, x + randomOffset, y + 10);
      }
    }
  });
  
} 

function draw() {
} 
