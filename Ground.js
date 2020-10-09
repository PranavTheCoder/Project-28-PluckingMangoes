class Ground {
	constructor(x,y,width,height) {
		var options = {
			isStatic : true			
		}
		this.x = x;
		this.y = y;
		this.w = width;
		this.h = height;
		this.body = Bodies.rectangle(x,y,width,height,options);
 		World.add(world,this.body);

    }
    
	display() {
		var groundPos = this.body.position;		
		push();
		translate(groundPos.x, groundPos.y);
		rectMode(CENTER)
		fill(128,128,128);
		rect(0,0,this.w,this.h);
		pop();
			
	}

}