var canvas;
var imgs = [0,0,0,0,0,0,0,0,0,0,0,0];
var img;
var index=0;
var bgimg;
var inc=0;
var inc2=255;
var isAnim=false;
var pointer=0;

function setup(){
	var decoy = select('.siteContainer');
	var dir = decoy.id();
	for (var i = 0; i < imgs.length; i++) {
		imgs[i] = loadImage(dir+"/images/kheresa"+i+".JPG");
	}
	if (windowWidth>700){
		canvas = createCanvas(windowWidth/1.85,windowHeight/1.55);
	} else {
		canvas = createCanvas(windowWidth*1.85,windowHeight/1.75);
	}
	canvas.parent('#divCanvas');
	image(imgs[0],0,0);
}

function draw(){
	imgs[index].resize(canvas.width,0);
	animLoop();
}

function animLoop(){
	if (millis()%3000<20 && isAnim==false){
		isAnim=!isAnim;
	}

	if (isAnim==true){
		background(255);
		easeOut();
		easeIn();
	} else {
		image(imgs[index],0,0);
	}
}

function easeIn(){
	push();
	if (inc<255){
		inc+=5;
		tint(255,inc)
		imgs[index+1].resize(canvas.width,0);
		image(imgs[index+1],0,0);
	} else {
		inc=0;
		if (index<12){
			index++;
		} else {
			index=0;
		}
		image(imgs[index],0,0);
		isAnim=false;
	}
	pop();
}


function easeOut(){
	push();
	imgs[index].resize(canvas.width,0);
	if (inc2>0){
		inc2-=5;
		tint(255,inc2);
		image(imgs[index],0,0);
	} else {
		inc2=255;
	}
	pop();
}
