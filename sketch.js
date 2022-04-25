var pos, target, vel, ctx, r, drag, strength, dragSlider, strengthSlider;

function setup() {
  ctx = createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0, 0, 0);
  

  r = 35;
  pos = 0;
  target = 0;
  vel = 0;

  drag = 0.95;
  strength = 0.99;
}

function draw() {
  //draw is called every frame
  background("rgba(0,0,0, 0.6)");
  textSize(45)
  text("spring thing,move your mouse",100,50)

  target = mouseX;

  var force = target - pos;
  force *= strength;

  vel *= drag;
  vel += force;

  pos += vel;

  //draw our circle
  fill(100, 21, 550);
  ellipse(pos, 400, r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
