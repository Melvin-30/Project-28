class launch{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
        }
        this.pointB=point2;
        this.launch=Constraint.create(options);
        World.add(world,this.launch)
     }
    attach(body){
        this.launch.bodyA = body;
    }
    
    fly(){
        this.launch.bodyA = null;
    }

    display(){
        if(this.slingshot.bodyA){
            strokeWeight(4)
            line(this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y,this.pointB.x,this.pointB.y);
           }
    }
}