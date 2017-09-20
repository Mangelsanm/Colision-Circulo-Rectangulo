function circle(){
	var radious = 30;
	var diameter = 2 * radious;
	var Xc;
	var Yc;

	this.show = function(){
		noFill();
		stroke(0, 255, 0);
		Xc = constrain(mouseX, radious, width - radious);
		Yc = constrain(mouseY, radious, height - radious);
		ellipse(Xc, Yc, diameter, diameter)
	}

	this.distance = function(recPosition){
		var DeltaX;
		var DeltaY;
		var minimoX = min(mouseX, recPosition.x + wRec);
		var minimoY = min(mouseY, recPosition.y + hRec);
		var maximoX = max(recPosition.x, minimoX);
		var maximoY = max(recPosition.y, minimoY);
 		DeltaX = (mouseX - maximoX);
		DeltaY = (mouseY - maximoY);
		stroke(0, 0, 255);
		line(maximoX, maximoY, mouseX, mouseY);
		stroke(255, 0, 0);
		fill(255, 0, 0);
		ellipse(maximoX, maximoY, 5, 5);
		if((radious* radious) >= (DeltaX * DeltaX) + (DeltaY * DeltaY)){
			return true;
		}else{
			return false;
		}
	}
}