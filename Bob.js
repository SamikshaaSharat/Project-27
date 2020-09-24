class Bob{
    constructor(x,y,width,height){
        var options={
            isStatic: true,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        
        }
        this.body = Bodies.circle(x,y,20,options);
        this.width=20;
        this.height=20;
        World.add(world, this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.width,this.height);
        pop();
    }

}