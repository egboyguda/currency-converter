const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true });

app.get("/",function(req,res){
	res.sendFile(__dirname+"index.html")
})



















app.listen(port, () => console.log(`APP is Running on port ${port}!`))