class rope{
    constructor(body1,body2,offsetX,offsetY){
       this.offsetX=offsetX
       this.ofsetY=offsetY
       
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }




    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}