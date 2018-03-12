var growing = true;
var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleR = 0;
var cx = 150;
var cy = 200;
var vX = 2;
var vY = 1;

var dvdId;

var createDVD = function(x, y, r, c){
    var dvd = {
	x:x,
	y:y,
	r:r,
	c:c,
	cir:document.createElementNS("http://www.w3.org/2000/svg", "circle"),
	display: function(){
	    pic.removeChild(this.cir);

	    this.cir.setAttribute("cx", this.x);
	    this.cir.setAttribute("cy", this.y);
	    this.cir.setAttribute("r", this.r);
	    this.cir.setAttribute("fill", this.c);
	    pic.appendChild(cir);

	    this.x += vX;
	    this.y += vY;

	    if(this.x >= 220 || this.x <= 40){
		vX *= -1;
	    }
	    if(this.y >= 340 || this.y <= 30){
		vY *= -1;
	    }
	}
    }
}

var dvdWrap = function(e){
    createDVD(cx, cy, 30, "goldenrod");
    
    dvdId = setInterval(dvd.display(), 25);
}

pic.addEventListener("click", dvdWrap);

var clearFxn = function(e){
    pic.innerHTML = "";
}

clearButt.addEventListener("click", clearFxn);

