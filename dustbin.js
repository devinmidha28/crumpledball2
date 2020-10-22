class dustbin {
    constructor(x,y){
        this.object1=Bodies.rectangle(x-100,y-50,20,200, {isStatic:true});
        this.object2=Bodies.rectangle(x+100,y-50,20,200, {isStatic:true});
        this.object3=Bodies.rectangle(x, y+50,200,20, {isStatic:true});

        World.add(world,this.object1);
        World.add(world,this.object2);
        World.add(world,this.object3);

        this.abcd=loadImage("dustbingreen.png")
    }

    display(){

        image(this.abcd, 400, 120, 220, 220);



        push(); 
        translate(this.object1.position.x,this.object1.position.y);
        rectMode(CENTER);
        rect(0,0,20,200);

        pop();



        push(); 
        translate(this.object2.position.x,this.object2.position.y);
        rectMode(CENTER);
        rect(0,0,20,200);

        pop();




        push(); 
        translate(this.object3.position.x,this.object3.position.y);
        rectMode(CENTER);
        rect(0,0,200,20);

        pop();
    }
}