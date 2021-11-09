function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50,80,100);
  stroke(230, 30, 100);
  strokeWeight(5);
  ellipse(100, 150, 100, 40);
  ellipse(300, 150, 100, 40);
   fill("random");
  ellipse(150, 200, 50, 40);
  ellipse(200, 300, 200, 80);
  fill("white");
  fill("blue");
  arc(
    200,
    200,
    100,
    40,
    Math.PI/180 * 0,
    Math.PI/180 * 270,
    CHORD
    );
    //Kommentarius
}