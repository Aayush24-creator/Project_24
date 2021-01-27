class Ground{
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

        this.ground=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.ground);
    }
    display(){
        push();
        fill ("yellow");
        strokeWeight(5);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop();
    }
}