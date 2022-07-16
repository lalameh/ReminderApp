const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const session = require("express-session");
const path = require("path");
const app = express();



app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);
const reminderRoute = require("./routes/reminderRoute");
const authRoute = require("./routes/authRoute");
 const passport = require("./middleware/passport");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(passport.initialize());
app.use(passport.session());



// Routes start here

app.use("/", reminderRoute);

// Fix this to work with passport! The registration does not need to work, you can use the fake database for this.
// app.get("/register", authController.register);
// app.get("/login", authController);
// app.post("/register", authController.registerSubmit);
// app.post("/login", authController.loginSubmit);
app.use("/auth", authRoute);

app.listen(3002, function () {
  console.log(
    "Server running. Visit: localhost:3002/reminders in your browser 🚀"
  );
});
