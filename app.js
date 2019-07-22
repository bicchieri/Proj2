var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs"); //this sets the default to look for ejs files




// BODY CODE

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

var safaris = [
    {name: "Highvelt Hunting Safari", id: "dry", class: "medium" },
    {name: "Desert Survival Safari", id: "dry", class: "short"},
    {name: "Savannah Sights Safari", id: "dry", class: "long"},
    {name: "Cape Town to Durban", id: "wet", class: "long"},
    {name: "Coastal Fishing Safari", id: "wet", class: "medium"},
    {name: "Riverboat Safari", id: "wet", class: "short"},
];


var yourSafari = function best(){
    var envType = envTypeInput.value;
    var duration = durationInput.value;
    safaris.forEach(function(i = 0; i < safaris.length; i++){
        if (safaris[i].id === envType && safaris[i].class === duration) {
            yourSafari = safaris[i].name;
        }
            else {
                yourSafari = "Call an agent today at +27 457-9487 to discuss your perfect Bicchieri Safari!"
            }
    })
}
function myFunction() {
    var input = document.getElementById('email');
    email = input.value;
    var safari = yourSafari;
    body = input.value;

    window.location.href = "mailto:" + email + "?body=" + body;
  }
 	
								
	//set up listener for requests
const port = process.env.PORT;
app.listen(port, process.env.IP);

console.log('app running on port: ', port);