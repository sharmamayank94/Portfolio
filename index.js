var express = require('express');

var app = express();

app.get('/', (req, res)=>{
	res.send("hi");
});


app.listen(3000, (a,b)=>{
	console.log("Working fine");
});