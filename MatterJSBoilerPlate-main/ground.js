class Ground{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ground = Bodies.rectangle(x,y,w,h,{isStatic:true});
        World.add(world, this.ground);
    }
    display(){
        var pos= this.ground.postion;
        rect(this.x, this.y,this.w,this.h,{isStatic:true});

        
    }
}
