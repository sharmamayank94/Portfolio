
text = "I am a Fullstack Developer, machine learning enthusiast and a programmer."
var i = 0;
var blog = document.querySelector(".blog");
var type = ()=>{
	if(i<text.length)
	{

	
		blog.innerHTML += text[i++];

		setTimeout(type, 50);
	}
	else
	{
		setTimeout(()=>{
			blog.style.backgroundColor = "blue";
			setTimeout(()=>{
				blog.innerHTML = "";
				blog.style.backgroundColor = "transparent";
				blog.style.fontSize = "18px";
				blog.innerHTML = text2;
				blog.innerHTML += "<br/>";
			}, 800)
		}, 800);
	}
	
}

var text2 = "I was born and raised in Bhopal. Currently I am pursuing my Bachelor of Technology in Computer Science and Engineering from University Institute of Technology, RGPV, Bhopal. I started coding in C++ when I was in 8th standard, although I took a break in 9th standard and started doing a little web development. I took a break from it too in 10th standard and started to focus solely on my studies, but my passion for programming was lit again as I stepped in 2nd year of my college.";


setTimeout(type, 8000);



var works = document.querySelector(".works");
var experienceskill = document.querySelector(".experienceskill");
var eduachieve = document.querySelector(".eduachieve");
var letssee = document.getElementsByClassName("letssee")[0];
var letssee2 = document.getElementsByClassName("letssee2")[0];
var seemy = document.getElementsByClassName("seemy")[0];
var contact = document.getElementsByClassName("contact")[0];
var height = works.offsetHeight;

document.onscroll = ()=>{
	
	seemy.style.opacity = (works.getBoundingClientRect().bottom-300)/height;
	if(works.getBoundingClientRect().top<=letssee.getBoundingClientRect().top
	 && works.getBoundingClientRect().bottom>100 ){
		
		letssee.style.display = "block";
		letssee2.style.display = "block";
	}
	else
	{
		letssee.style.display = "none";
		letssee2.style.display = "none";
	}
	if(works.getBoundingClientRect().top<window.innerHeight )
	{
		works.style.opacity = 0.9;
		
		
	}
	else if(works.getBoundingClientRect().top>window.innerHeight)
	{
		works.style.opacity = 0;	
		
	}

	if(experienceskill.getBoundingClientRect().top<window.innerHeight*(2/3)) experienceskill.style.opacity = 1;
		
		
	
	else if(experienceskill.getBoundingClientRect().top>window.innerHeight) experienceskill.style.opacity = 0;
	
			
		
	

	if(eduachieve.getBoundingClientRect().top<window.innerHeight*(2/3))
	
		eduachieve.style.opacity = 1;
		
		
	
	else if(eduachieve.getBoundingClientRect().top>window.innerHeight)
	
		eduachieve.style.opacity = 0;	
		
	
}

var states = [true, true, true, true, true];

var readmore = (element, id)=>{
	if(states[element.slice(4,)] == true)
	{
		document.querySelector("#"+id).innerHTML = "Know Less";
		document.querySelector("#"+element).style.height = "auto";
		states[element.slice(4,)] = false;
	}
	else
	{
		document.querySelector("#"+element).style.height = "0px";
		document.querySelector("#"+id).innerHTML = "Know More";
		states[element.slice(4,)] = true;
	}
}

function displaynavbar(){
	document.querySelector(".navbar").style.display = "flex";
}

function closenavbar(){
	document.querySelector(".navbar").style.display = "";	
}