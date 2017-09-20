function rectangle() {
	this.x = width / 2;
	this.y = height / 2;

	this.show = function(){
		noFill();
		stroke(0, 255, 0);
		rect(this.x, this.y, wRec, hRec);
	}
}