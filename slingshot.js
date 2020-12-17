class Slingshot{
    constructor(body1,body2){
        var options = {
           bodyA:body1,
           bodyB:body2,
           stiffness:0.04,
           length:10
        }
       
        this.sling = Constraint.create(options)
        World.add(world,this.sling);
       
    }
    display(){
        var start = this.sling.bodyA.position;
        var end = this.sling.bodyB.position;
        line(start.x,start.y,end.x,end.y);
        
    }

    

}
