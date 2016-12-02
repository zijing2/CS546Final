const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;
var passport = require('passport');


router.get("/", (req, res) => { 
    var flash = req.flash();
    var success = flash.reg_success;
    var error = flash.error;
    if(req.isAuthenticated()){
        res.redirect('/home');
    }else{
         var data = {
            "error":error,
            "reg_success": success,
            "partial_css":"pagecss",
            "partial_js":"pagejs",
            "partial_topnav":"topnav",
            "css":"../public/css/login.css",
            "js":"/public/js/login.js"
         };
         res.render("login",data);
    }
});

router.post('/login',
    passport.authenticate('local',{
        successRedirect: '/home',
        failureRedirect: '/login',
        failureFlash :  true
    })
);

router.all('/home', isLoggedIn);
router.get("home", (req, res) => {
    res.render("/home",{user:req.user});
    //res.status(200).json({user:req.user});
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/home');
});


function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/');
}

module.exports = router;