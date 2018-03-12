var growing = true;
var pic = document.getElementById("pic");
var clearButt = document.getElementById("clear");

var dvdId;

var createDVD = function(){
    d = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = Math.floor(5 + Math.random() * 300-10);
    var y = Math.floor(5 + Math.random() * 400-10);
    d.setAttribute("cx",x);
    d.setAttribute("cy",y);
    d.setAttribute("r",10);
    d.setAttribute("fill","goldenrod");
    pic.appendChild(d);
    return d;
}

var dvdWrap = function(e){

    var d = createDVD();
    var x = parseInt(d.getAttribute("cx"),10);
    var y = parseInt(d.getAttribute("cy"),10);

    var vX = 3;
    var vY = 2;
    
    var move = function(){
	x += vX;
	y += vY;
	if(x >= 290 || x <= 10){
	    vX *= -1;
	}
	if(y >= 390 || y <= 10){
	    vY *= -1;
	}

	d.setAttribute("cx", x);
	d.setAttribute("cy", y);
    };
    dvdId = setInterval(move, 10);
};

pic.addEventListener("click", dvdWrap);

var clearFxn = function(e){
    pic.innerHTML = "";
    clearInterval(dvdId);
}

clearButt.addEventListener("click", clearFxn);

