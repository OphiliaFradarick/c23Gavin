class Box{
    constructor(x,y,width,height){
        var options ={
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("orange");
        rectMode(CENTER);
        rect(0,0, this.w, this.h);
        pop();
    }
}