const express = require("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	bodyParser = require("body-parser"),
	LocalStrategy = require("passport-local"),
	passportLocalMongoose = 
		require("passport-local-mongoose")
const User = require("./model/user");
let app = express();
const path = require('path');

mongoose.connect("mongodb+srv://user:mati2008@clusterjava.dnds0q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJava");

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:mati2008@clusterjava.dnds0q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJava";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
	secret: "Rusty is a dog",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});
// Showing home page
app.get("/register.html", function (req, res) {
	res.render("register.html");
});

// Showing secret page
app.get("/auth", isLoggedIn, function (req, res) {
	res.render("auth");
});

// Showing register form
app.get("/register", function (req, res) {
	res.render("register");
});

app.get("/logged.html", function (req, res) {
	res.render("logged.html");
});

// Handling user signup
app.post("/register", async (req, res) => {
	const user = await User.create({
	username: req.body.username,
	password: req.body.password
	
	});
	res.render("logged.html");
});

//Showing login form
app.get("/login", function (req, res) {
	res.render("login");
});

//Handling user login
app.post("/login", async function(req, res){
	try {
		// check if the user exists
		const user = await User.findOne({ username: req.body.username });
		if (user) {
		//check if password matches
		const result = req.body.password === user.password;
		if (result) {
			res.render("auth");
		} else {
			res.status(400).json({ error: "password doesn't match" });
		}
		} else {
		res.status(400).json({ error: "User doesn't exist" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

//Handling user logout 
app.get("/logout", function (req, res) {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	});
});



function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect("/login");
}

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});
