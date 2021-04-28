function bringBack(obj)
{
	var delay = Math.random();

	obj.style.transitionDelay = delay + "s";
	obj.style.transitionDuration = "1.5s";
	// obj.style.transform = "translateX(0px)";
	obj.style.width = "90px";
	obj.style.height = "90px";
}
var colors = ["red", "green", "blue", "yellow", "orange"]
function borderColor(obj)
{
	for(var i = 0; i < obj.length; i++)
	{
		obj[i].style.borderColor = colors[i];
	}
}

var circularCards = document.querySelectorAll(".nav-options-card-holder"); 

for(var i = 0; i < circularCards.length; i++)
{
	bringBack(circularCards[i]);
}

borderColor(circularCards);

function aboutFlash()
{
	var obj = document.querySelector(".aboutflash");
	obj.style.transitionDuration = "0.5s";
	obj.style.width = "100%";

	setTimeout(()=>{
		var obj = document.querySelector(".aboutflash");
		obj.style.left = "0px";
		obj.style.width = "0px";
		
		
	}, 500);

	setTimeout(()=>{
		var obj = document.querySelector(".aboutflash");
		obj.style.left = null;
		
	}, 1000);
}