var growing = true;
var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");
var circleButt = document.getElementById("circle");
var dvdButt = document.getElementById("dvd");
var circleR = 0;
var rectX = 150;
var rectY = 200;
var vX = 2;
var vY = 1;

var growId;
var dvdId;

var growCircle = function(e){
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    c1.setAttribute("cx", 150);
    c1.setAttribute("cy", 200);
    c1.setAttribute("r", circleR);
    pic.appendChild(c1);
    
    if(growing == true){
	circleR += 1;
	if(circleR >= 150){
	    growing = false;
	}
    }
    else{
	circleR -= 1;
	if(circleR <= 0){
	    growing = true;
	}
    }

    pic.removeChild(pic.childNodes[0]);
}

var growWrap = function(e){
    clearInterval(dvdId);
    rectX = 150;
    rectY = 200;
    growId = setInterval(growCircle, 25);
}

circleButt.addEventListener("click", growWrap);

var dvd = function(e){
    var r1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    r1.setAttribute("x", rectX);
    r1.setAttribute("y", rectY);
    r1.setAttribute("width", 80);
    r1.setAttribute("height", 60);
    pic.appendChild(r1);

    rectX += vX;
    rectY += vY;

    if(rectX >= 220 || rectX <= 40){
	vX *= -1;
    }
    if(rectY >= 340 || rectY <= 30){
	vY *= -1;
    }
    
    pic.removeChild(pic.childNodes[0]);
}

var dvdWrap = function(e){
    clearInterval(growId);
    circleR = 0;
    dvdId = setInterval(dvd, 25);
}

dvdButt.addEventListener("click", dvdWrap);

var clearFxn = function(e){
    clearInterval(growId);
    clearInterval(dvdId);    
    while(pic.childNodes[0] != null){
	pic.removeChild(pic.childNodes[0]);
    }
}

clearButt.addEventListener("click", clearFxn);

