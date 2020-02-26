const express = require('express')
const app = express()
const port = 3000
const request = require('request');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html")
})
app.post("/",function(req,res){
	let base = req.body.base.toUpperCase();
	let flat = req.body.flat.toUpperCase();
	console.log(base+","+flat)
	var options ={
		url:"https://api.exchangeratesapi.io/latest",
		method:"GET",
		qs:{
			symbols:base+","+flat
		}
	}
	request(options,function(error,response,body){
		var data=JSON.parse(body);
		console.log(data);
	})

})



















app.listen(port, () => console.log(`APP is Running on port ${port}!`))