
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
				blog.style.backgroundColor = "black";
				blog.style.fontSize = "20px";
			}, 800)
		}, 800);
	}
	
}

var text2 = "I was born and raised in Bhopal. Currently I am pursuing my Bachelor of Technology in Computer Science and Engineering from University Institute of Technology, RGPV, Bhopal. I started coding in C++ when I was in 8th standard, although I took a break in 9th standard and started doing a little web development. I took a break from it too in 10th standard and started to focus solely on my studies, but my passion for programming was lit again as I stepped in 2nd year of my college.";
var j = 0;
var type2 = ()=>{
	if(j<text2.length)
	{
		blog.innerHTML+=text2[j++];
		setTimeout(type2, 10);
	}	
}
setTimeout(type, 8000);
setTimeout(type2, 15000);