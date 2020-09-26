const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

// GET register page
router.get("/register", function (req, res, next) {
    res.render("register.html");
});

// POST register handle
router.post("/register", function (req, res, next) {
    const { username, password } = req.body;
    let errors = [];

    if (!username) {
        errors.push({ msg: "Please fill in username field" });
    }

    if (!password) {
        errors.push({ msg: "Please fill in password field" });
    }

    if (password.length < 8) {
        errors.push({ msg: "Password should be at least 8 characters" });
    }

    if (errors.length > 0) {
        res.render("register.html", {
            errors: errors,
        });
    } else {
        User.findOne({ username: username }).then((sameUsername) => {
            if (sameUsername) {
                errors.push({
                    msg: "User with provided username already exists",
                });
                res.render("register.html", { errors: errors });
            } else {
                const newUser = new User({
                    username: username,
                    password: password,
                });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err1, hash) => {
                        if (err1) throw err1;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then((user) => {
                                res.redirect("/auth/login");
                            })
                            .catch((err2) => console.log(err2));
                    });
                });
            }
        });
    }
});

// GET login page
router.get("/login", function (req, res, next) {
    res.render("login.html");
});

// POST login handle
router.post("/login", function (req, res, next) {
    console.log(req.body);
    passport.authenticate("local", {
        successRedirect: "/authenticated/dashboard",
        failureRedirect: "/auth/login",
        failureFlash: true,
    })(req, res, next);
});

// GET logout handle
router.get("/logout", function (req, res, next) {
    req.logout();
    res.redirect("/");
});

module.exports = router;
