/*class box
{
  constructor(x,y,width,height)
  {
      var option={//isStatic:true
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
      }
   this.boxobject=Bodies.rectangle(x,y,width,height,option);
   World.add(world,this.boxobject);
   this.height=height;
   this.width=width;
   this.image=loadImage("wood1.png")
  }
   display()
   {
     push();
     translate(this.boxobject.position.x,this.boxobject.position.y);
     rotate(this.boxobject.angle);
     fill("blue");
     stroke("green");
     strokeWeight(4);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height)
      // rectMode(CENTER)
     //rect(0,0,this.width,this.height)
    pop();
   }


}*/
class box extends base
{
 constructor(x,y,width,height)
 {
  super(x,y,width,height)
  this.image=loadImage("wood1.png")

 }

}