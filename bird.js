class Bird
{
  constructor(x,y,w,h) 
  {
    var birdfeatures = {
        restitution : 1
      } 
      this.bird = Bodies.rectangle (x,y,w,h,birdfeatures)
      World.add(myWorld,this.bird)
      this.w = w  
      this.h = h
      this.bimage = loadImage("bird.png")
  }
  display ()
  {
    
    push ()
    translate (this.bird.position.x,this.bird.position.y) 
    rotate (this.bird.angle)
  imageMode(CENTER)
  image (this.bimage,0,0,this.w,this.h)
  pop ()
  }
}
