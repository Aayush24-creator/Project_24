class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:0,
            density:0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        push();
        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();

    }
}