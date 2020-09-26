require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");

const app = express();

// Configure Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure Nunjucks
nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

// Configure Passport
require("./config/passport")(passport);

// Configure Mongoose
const db = process.env.MONGO_URI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

// Express Session
const secret = process.env.SECRET;
app.use(
    session({
        secret: secret,
        resave: true,
        saveUninitialized: true,
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.get("/", function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect("/authenticated/dashboard");
    } else {
        res.redirect("/unauthenticated/dashboard");
    }
});

app.use("/auth", require("./routes/auth"));
app.use("/authenticated", require("./routes/authenticated"));
app.use("/unauthenticated", require("./routes/unauthenticated"));
app.use("/css", express.static("./css"));

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!");
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`Server started on ${port}`);
});
