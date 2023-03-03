let posX = 40;
let posY = 40;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(255, 0, 200);
}
function draw (){
	ellipse(posX ,posY ,50,50);
	posX = posX + 1;
	posY = posY + 2;
	if (posX == windowWidth) {
	 posX = 40;
	}
	if (posY == windowHeight) {
	 posY = 40;
	}
}
