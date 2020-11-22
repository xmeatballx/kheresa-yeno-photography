var burger=document.querySelector('.burger');
var nav = document.querySelector('#navclass');
var canvas = document.querySelector('#defaultCanvas0');
var span = document.querySelector(".close");
var span2 = document.querySelector(".close2");
var modal = document.getElementById("myModal");

var imgArray = new Array(100);
var imgDiv = document.getElementsByClassName("gridcontainer")
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


console.log('helo');

for (var i = 0; i < imgArray.length; i++) {
	imgArray[i] = document.getElementById('img'+(i+1));
	if (imgArray[i]){
		imgArray[i].onclick = function(){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
		}
	}	
}

burger.onclick = function(){
	nav.classList.toggle('nav-is-active');
	span.style.visibilty = 'visible';
	span.style.display = 'block';
}

span.onclick = function(){
	nav.classList.toggle('nav-is-active');
	burger.style.visibilty='hidden';
	canvas.style.transform='tanslateX(100%)';
}

span2.onclick = function(){
	modal.style.display = "none";
}