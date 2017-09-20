var shapeRect; // variable 
var shapeCirc;
var wRec = 150; // ancho del rectangulo
var hRec = 75; // alto del rectangulo

function setup() {
	createCanvas(600, 400); // lienzo donde se crearan las figuras
	shapeRect = new rectangle();
	shapeCirc = new circle();
}

function draw() {
	background(51);
	shapeRect.show();
	shapeCirc.show();
	ellipse(150, 100, 1, 1);
	if(shapeCirc.distance(shapeRect)){
		fill(random(255), 0, 0);
		ellipse(150, 100, 15, 15)
	}else{
		ellipse(150, 100, 1, 1);
	}
}