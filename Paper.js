class Paper{
    constructor (x,y,radius){
    var options = {
        isStatic: false,
        restitution:1.3,
        friction:0.5,
        density:1.2
    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.circle=Bodies.circle(x,y,radius,options);
    World.add(world,this.circle)
    }
    display(){
        push();
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.circle.position.x,this.circle.position.y,this.radius,this.radius);
        pop();

    }
}