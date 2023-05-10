let temperature_data;
let humidity_data;
function setup() { 
  createCanvas(windowWidth, windowHeight); 
  background(255); 
  strokeWeight(2)
  i=0;
  
  //read data from json
  d3.json("era5.json").then((data) => {
    console.log(data);
    temperature_data = data.hourly.temperature_2m;
    humidity_data = data.hourly.relativehumidity_2m;
    
    for (let x = 0; x < windowWidth; x += 10) { 
      for (let y = 0; y < windowHeight; y += 10) { 
        let randomOffset = random(-5, 5);
        stroke(0, humidity_data[i%humidity_data.length]*3, 0);
        line(x + randomOffset, y, x + randomOffset, y + temperature_data[i%temperature_data.length]);
        i++;
      }
    }
  });
  
} 

function draw() {
} 
