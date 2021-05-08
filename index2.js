function bringBack(obj)
{

	for(var i = 0; i < obj.length; i++)
	{
		var delay = Math.random();		
		obj[i].style.transitionDelay = delay + "s";
		obj[i].style.transitionDuration = "1.5s";
		obj[i].style.width = "80px";
		obj[i].style.height = "80px";
	}
}
var colors = ["red", "green", "blue", "yellow", "orange"]
function borderColor(obj)
{
	for(var i = 0; i < obj.length; i++)
	{
		obj[i].style.borderColor = colors[i];
		
	}
}

function arrangeSidebar(obj){
	for(var i = 0; i < obj.length; i++)
	{
		obj[i].style.zIndex = i;
	}
}

var circularCards = document.querySelectorAll(".nav-options-card-holder"); 
var sidebarCards = document.querySelectorAll(".sidebar_card");
bringBack(circularCards);

borderColor(circularCards);
borderColor(sidebarCards);

function aboutFlash()
{
	var obj = document.querySelector(".aboutflash");
	var nameBottom = document.querySelector(".name_bottom");
	var navSectionHolder = document.querySelector(".nav_section_holder");
	var sidebar = document.querySelector(".sidebar");
	obj.style.transitionDuration = "0.5s";
	obj.style.width = "100%";
	
	
	
	setTimeout(()=>{
		sidebar.style.display = "flex";

		navSectionHolder.style.display = "none";

		obj.style.left = "0px";
		obj.style.width = "0px";

		nameBottom.style.width = "70%";
		nameBottom.style.fontSize = "20px";
		nameBottom.innerHTML = "I was born and raised in Bhopal. Currently I am pursuing my Bachelor of Technology in Computer Science and Engineering from University Institute of Technology, RGPV, Bhopal. I started coding in C++ when I was in 8th standard, although I took a break in 9th standard and started doing a little web development. I took a break from it too in 10th standard and started to focus solely on my studies, but my passion for programming was lit again as I stepped in 2nd year of my college.";		
	}, 500);

	setTimeout(()=>{
		var obj = document.querySelector(".aboutflash");
		obj.style.left = null;
		
	}, 1000);
}

function skillflash(){
	document.querySelector(".mainpageplaceholder").style.height = "0px";
	document.querySelector(".skill-bar-holder").classList.add("skill-bar-holder-animate");
}


var skillsPage = document.querySelector(".skills-page");
window.onscroll = ()=>{

	if(skillsPage.getBoundingClientRect().y <= window.innerHeight-500)
	{
		document.querySelector(".skill-bar-holder").classList.add("skill-bar-holder-animate");
	}
}


var element = document.getElementById("g1287");
element.style.height = "0px";