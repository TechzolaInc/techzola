var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
var app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods','GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


var path = require('path');
/* SMPT OBJECT */
var smtpTransport = nodemailer.createTransport({
  service: "SendInBlue",
  host: "smtp-relay.sendinblue.com",
  auth: {
    user: "danishkhan@protonmail.com",
    pass: "xyNY9Kwb4OcCIgjd"
  }
});
/* ROUTE AND STATIC RESOURCES */
app.use(express.static(path.resolve("../dist")));
app.use(express.static(path.resolve('../dist/index.html')));

app.get('/', function(req, res,next) {
  res.sendFile(path.resolve('dist/index.html'));
});

/* SEND EMAIL */
app.post('/send',function(req,res,next){
  var mailOptions={
    to : req.body.to,
    from: req.body.from,
    cc: req.body.cc,
    subject : req.body.subject,
    text : req.body.description
  }
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.end("error");
    }else{
      console.log("Message sent: " + response.data);
      res.end("sent");
    }
  });
});

/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){
  console.log("Express Started on Port 3000");
});
