class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
      

    display(){
        if(this.Sling.bodyA){

        
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        
    
   
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
                
                   
            
}
        }
    }
    fly(){
        this.Sling.bodyA=null;

    }
     attach(body){
        this.Sling.bodyA = body;
    }
}