const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;
var passport = require('passport');


router.get("/", (req, res) => { 
    var flash = req.flash();
    var success = flash.reg_success;
    var error = flash.error;
    if(req.isAuthenticated()&&req.user._id){
        res.redirect('/home');
    }else{
         var data = {
            "error":error,
            "reg_success": success,
            "partial_css":"pagecss",
            "partial_js":"pagejs",
            "partial_topnav":"topnav",
            "css":"/public/css/login.css",
            "login":1,
            "title":"PetPar-Login",
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


router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/home');
});


function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()&&req.user._id){
        return next()
    }
    res.redirect('/login');
}

module.exports = router;