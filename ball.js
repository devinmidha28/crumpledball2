class Ball{
    constructor(x,y,radius){
        this.object=Bodies.circle(x,y,radius,{isStatic:false,restitution:0.3,friction:0.5,density:1.2})
        this.radius=radius;
        

        World.add(world, this.object);

        this.xyz=loadImage("paper.png")
    }

    display(){



        push();
        translate(this.object.position.x,this.object.position.y);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse (0, 0, this.radius, this.radius);
        imageMode(CENTER)
        image(this.xyz, 0, 0, this.radius*3, this.radius*3);
        pop();
    }
}
