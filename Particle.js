class Ground{
    constructor(x,y,w,h) {
        super(x,y,50,50);

      this.body = Bodies.circle(x,y, this.r,options);
      this.color=color(random(0,255), random(0.255), random(0,255));
      world.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        Fill(this.color)
        circle(this.body, this.y, this.x);
    }
}