class Bob {
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.4,
            density:3,
           restitution:1.2,
        }
        this.x=x;
        this.y=y;
        
        this.body=Bodies.circle(this.x,this.y,25,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push ()
        translate(pos.x,pos.y);
        rotate (this.body.angle);
        fill ("pink");
        ellipseMode(CENTER);
        ellipse(0,0,25,25);
        pop ()
    }
}