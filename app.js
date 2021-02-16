var express = require("express"),
  app = express(),
  bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("images"));
app.use(express.static("css"));
app.use(express.static("js"));

app.get("/", function(req, res){
  res.render("index");
});


app.get("/create", function(req, res){
  res.render("create");
});

app.get("/buy_car", function(req, res){
  res.render("buy_car");
});

app.get("/buy", function(req, res){
  res.render("buy");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/autorization", function(req, res){
  res.render("autoriZation");
});

app.listen(3000, function(){
  console.log("server started");
});