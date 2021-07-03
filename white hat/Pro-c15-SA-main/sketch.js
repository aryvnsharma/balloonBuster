var ball;
var vx = 2;

function setup() {
  createCanvas(800,800);

  ball = createSprite(400,400,200,100);
}

function draw() 
{
  background(51);
  if(ball.position.x<=ball.width/2 || ball.position.x>=width-ball.width/2)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;

  drawSprites();

}

