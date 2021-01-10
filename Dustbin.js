class Dustbin{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.body2=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.body3=Bodies.rectangle(x,y,width,height,{isStatic:true})
        this.width=width;
        this.height=height;
        World.add(world,this.body)
        World.add(world,this.body2)
        World.add(world,this.body3)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    display()
        var pos2 =this.body.position;
        var angle2 = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       fill("red");
        rect(0, 0, this.width, this.height);
        pop();
    
}
}
      
        
