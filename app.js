var express = require("express");
var app = express();
const nodemailer = require("nodemailer");

app.use(express.urlencoded({ extended: false }));
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

        async function email(){

            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();
          
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                auth: {
                    user: 'quincy.gutkowski31@ethereal.email', // generated ethereal user
                    pass: 'syPsQDnUC3SxhVr5yM' // generated ethereal password
                }
            });
          
            // send mail with defined transport object
            let info = await transporter.sendMail({
              from: '"Quincy Gutowski" <quincy.gutkowski31@ethereal.email>', // sender address
              to: req.body.email, // list of receivers
              subject: "Your Safari!", // Subject line
              text: "Your recommended safari from Bicchieri Safaris is " + yourSafari + "!", // plain text body
              html: "<b>Hello world?</b>" // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
          }
          
          main().catch(console.error);

    res.render("selector");
}); //shows the selector tool form for post

app.get("/selector", function(req, res){
    res.render("selector");
}); //shows the selector tool form 	
								
	//set up listener for requests
const port = 3000 || process.env.PORT;
app.listen(port, process.env.IP);

console.log('app running on port: ', port);