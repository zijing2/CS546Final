const express = require('express');
const router = express.Router();
const data = require("../data");
const users = data.user;
const passport = require('passport');


router.get("/", (req, res) => { 
    // if(req.isAuthenticated()){
    //     // res.redirect('/private');
    // }else{
         res.render("login",{"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/login.css"});
    // }
});

router.post('/',
    passport.authenticate('local'),
    function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log(req.body.email);
    console.log("redirect");
    res.send("1");
  }

);

router.all("/home", (req, res) => { 
   
    res.render('register',{"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/register.css"});
   
});



// router.all('/private', isLoggedIn);
// router.get("/private", (req, res) => {
//     res.render("private",{user:req.user});
//     //res.status(200).json({user:req.user});
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });


function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/');
}

module.exports = router;