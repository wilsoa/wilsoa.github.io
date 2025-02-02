// Declare variable for the horizontal position of the circle
let x = 25;

function setup() {
  // Create the canvas
  createCanvas(720, 400);

  // Set the color mode to hue-saturation-brightness (HSB)
  colorMode(HSB);

  // Set the text size
  textSize(20);

  // No animation to start
  noLoop();
}

function draw_tire (x, y, scale) {
  // Draw tire
  fill(0, 0, 0);
  circle(x, y, 50*scale);
  fill(0, 0, 60);
  circle(x, y, 25*scale);
}

function draw_car (x, y, hue, scale, theta) {
  // let axis = createVector(x, y, 0);
  // rotate(theta, axis)
  // rect(x, y, w, [h], [tl], [tr], [br], [bl])
  fill(hue, 90, 90)
  rect(x-110*scale, y - 50*scale, 220*scale, 55*scale, 5, 5, 5, 5)
  draw_tire(x - 60 * scale, y, scale)
  draw_tire(x + 60 * scale, y, scale)
}

function draw() {
  // Clear the background
  background(255);

  let x = Math.min(frameCount * 2,260)

  draw_car(100,200,10,.6)
  draw_car(420,200,210,.6)
  
  draw_car(x,100+135/(1+Math.exp((250-x)/10)),80,.6)

  
  // describe('circle moving to the right');
}

function mousePressed() {
  // Start/stop the animation loop
  if (isLooping()) {
    noLoop();
  } else {
    loop();
  }
}

function keyPressed() {
  // Draw one frame
  redraw();
}