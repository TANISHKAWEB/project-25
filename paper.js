class paper
{
	constructor(x,y,w,h)
}



var options={
    instatic:false,
    resitution:0.3,
    friction:0,
    density:1.2,


}

function keyPressed(){
if (keycode === UP_ARROW) {



    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    
}



  



}
display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			this.image=loadImage("paper.png")
			
	}










