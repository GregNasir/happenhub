// server.js

require('dotenv').config()
const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('./passport');

const app = express();
const port = 5000

// express session 
app.use(session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
  }));

  
app.use(passport.initialize());
app.use(passport.session());
  
// Middleware used in protected routes to check if the user has been authenticated
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Base route
app.get("/home", (req, res) => {
    res.send("Home Page")
})

// Google Auth consent screen route
app.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
));

// Call back route
app.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect('/success')

    }
);

// failed route if the authentication fails
app.get("/failed", (req, res) => {
    console.log('User is not authenticated');
    res.send("Failed")
})

// Success route if the authentication is successful
app.get("/success",isLoggedIn, (req, res) => {
    console.log('You are logged in');
    res.send(`Welcome ${req.user.displayName}`)
})

// Route that logs out the authenticated user  
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error while destroying session:', err);
        } else {
            req.logout(() => {
                console.log('You are logged out');
                res.redirect('/home');
            });
        }
    });
});



app.listen(port, () => console.log("server running on port" + port))