class Piggy
{
  constructor(x,y,w,h) 
  {
    var piggyfeatures = {
        restitution : 1
      } 
      this.piggy = Bodies.rectangle (x,y,w,h,piggyfeatures)
      World.add(myWorld,this.piggy)
      this.w= w  
      this.h = h
      this.pimage = loadImage("enemy.png")
  }
  display ()
  {
    push ()
    translate (this.piggy.position.x,this.piggy.position.y) 
    rotate (this.piggy.angle)
  imageMode(CENTER)
  image (this.pimage,0,0,this.w,this.h)
  pop ()
  }
}
