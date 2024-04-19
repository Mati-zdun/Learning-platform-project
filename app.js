const express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose");
const User = require("./model/user");
let app = express();
const path = require("path");

mongoose.connect(
  "mongodb+srv://user:mati2008@clusterjava.dnds0q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJava"
);

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://user:mati2008@clusterjava.dnds0q7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterJava";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

app.get("/", (req, res) => {
  if (req.session.user) {
    // User is authenticated, render the dashboard
    res.render("dashboard", {username: req.body.username}); // Use the appropriate EJS template
  } else {
    // User is not authenticated, render the regular index page
    res.render("login"); // Use the appropriate EJS template
  }
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
  const user1 = await User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.render("logged");
});

//Showing login form
app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  try {
    // Check if the user exists
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      // Check if password matches
      const result = req.body.password === user.password;
      if (result) {
        // Store user data in the session
        req.session.user = {
          id: user.id,
          username: user.username,
          // Other relevant user properties
        };
        res.render("dashboard", {username: req.body.username}); // Redirect to the dashboard
      } else {
        res.status(400).json({ error: "Password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});


app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login"); // Redirect to login page after logout
  });
});

app.get("/dashboard", (req, res) => {
  if (req.session.user) {
    // User is authenticated, render the dashboard
    res.render("dashboard", {username: req.body.username}); // Use the appropriate EJS template
  } else {
    // User is not authenticated, redirect to login
    res.redirect("/login");
  }
});


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});
