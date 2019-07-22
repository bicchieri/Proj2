var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs"); //this sets the default to look for ejs files

//basic / req / 
app.get("/", function(req, res){
	res.render("home");
}); //takes user to the home page

app.get("/main", function(req, res){
    res.render("main")
}); //takes user to the main page

app.get("/about", function(req, res){
    res.render("about");
}); //takes user to about page

app.get("/selector", function(req, res){
    res.render("selector");
}); //shows the selector tool form 	
								
	//set up listener for requests
const port = process.env.PORT;
app.listen(port, process.env.IP);

console.log('app running on port: ', port);