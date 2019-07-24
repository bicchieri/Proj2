var express = require("express");
var app = express();
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs"); //this sets the default to look for ejs files

 // create reusable transporter object using the default SMTP transport
 let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
        user: 'teobicchieriweb@gmail.com', // generated ethereal user
        pass: 'December292018!' // generated ethereal password
    }
});

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

app.post("/", function(req, res){
    var safaris = [
        {name: "Highvelt Hunting Safari", id: "dry", class: "medium" },
        {name: "Desert Survival Safari", id: "dry", class: "short"},
        {name: "Savannah Sights Safari", id: "dry", class: "long"},
        {name: "Cape Town to Durban", id: "wet", class: "long"},
        {name: "Coastal Fishing Safari", id: "wet", class: "medium"},
        {name: "Riverboat Safari", id: "wet", class: "short"},
    ];
    
        let envType = req.body.envType;
        let duration = req.body.duration;
        let yourSafari;

        safaris.forEach(function(saf){
            if (saf.id === req.body.envType && saf.class === req.body.duration) {
                return yourSafari = saf.name;
                
            }
        })
        console.log(yourSafari)
          
            // send mail with defined transport object
            // let info = await transporter.sendMail({
            transporter.sendMail({
              from: '"Teo Bicchieri" <teobicchieriweb@gmail.email>', // sender address
              to: req.body.email, // list of receivers
              subject: "Your Safari!", // Subject line
              text: "Your recommended safari from Bicchieri Safaris is " + yourSafari + "! Reply to this email for details and to book your safari today!", // plain text body
              html: "<b>Your recommended safari from Bicchieri Safaris is </b>" + yourSafari + "! Reply to this email for details and to book your safari today!" // html body
            });

          res.redirect("/");  
});

app.get("/selector", function(req, res){
    res.render("selector");
}); //shows the selector tool form 	
								
	//set up listener for requests
const port = process.env.PORT;
app.listen(port, process.env.IP);

console.log('app running on port: ', port);