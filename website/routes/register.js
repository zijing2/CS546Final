const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;

router.get("/", (req, res) => { 
    if(req.isAuthenticated()){
        res.redirect('/home');
    }else{
         var data = {
            error:req.flash('err'),
            "partial_css":"pagecss",
            "partial_js":"pagejs",
            "partial_topnav":"topnav",
            "css":"../public/css/register.css",
            "js":"/public/js/register.js",
            "register":1
         };
         res.render("register",data);
    }
});

router.post("/register", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var repeat_password = req.body.repeat_password;
    if(password!==repeat_password){
        var err = "password not match";
        req.flash('err',err);
        res.redirect('/register');
    }

    user.register(email,password).then((user)=>{
        var success = "register success, please log in";
        req.flash('reg_success',success);
        res.redirect('/login');
    }).catch((err)=>{
        req.flash('err',err);
        res.redirect('/register');
    });
});



module.exports = router;