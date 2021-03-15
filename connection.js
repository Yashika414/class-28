class Connection 
{
  constructor(x,y) 
  {
   var option = {
       bodyA : x , 
       pointB : y ,
       stiffness : 0.04 , 
       length : 20
   }
   this.connect = Constraint.create(option)
   World.add (myWorld,this.connect)
   console.log(this.connect.pointB)
  }
  
  display ()
  {
   var a = (this.connect.bodyA.position)
   var b = (this.connect.pointB)
   line (a.x,a.y,b.x,b.y)
  }
}
