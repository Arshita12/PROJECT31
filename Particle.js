class Particle{
    constructor(x, y, r){
        var options ={
            restitution: 0.4,
            
        }
        this.r = r;
        this.body = Bodies.circle(random(10, 470), 3, 0.3, options);
        this.color="blue";
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, 3, 3);
        pop();
    }
}