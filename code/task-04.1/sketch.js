function setup() {
  createCanvas(800, 800);
}

  function draw() {
    background(100,100,100);
    stroke("0");
    strokeWeight(1,5);
    ellipse(400,400,790,790)
    stroke("red");
noFill();
strokeWeight(3);
    noLoop();
    stroke(230, 30, 100);
    ellipse(400,400,250,250)
    textSize(25);
    strokeWeight(1);
    text('KIRSCH', 420, 409);
    stroke("red");
    ellipse(400,400,20,20)
    for (let l = 0; l < 80; l += 1) 
    // rundherum beziers mit halb randomized Formen von Mittelkreis zum Außenkreis
    bezier(400, 275, 200, 100, 200, 200, 6, 400);

noLoop();

}
