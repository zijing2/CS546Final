const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;
var passport = require('passport');

router.all('/step*', isLoggedIn);
router.get("/step1", (req, res) => { 
    var data = {
        "partial_css":"pagecss",
        "partial_js":"pagejs",
        "partial_topnav":"topnav",
        "partial_bwizard":"bwizard",
        "partial_cart":"cart",
        "css":"/public/css/step1.css",
        "js":"/public/js/step1.js",
        "user":req.user,
        "step1": 1
        };
    res.render("step1",data);

});

router.get("/step2", (req, res) => { 
    var data = {
        "partial_css":"pagecss",
        "partial_js":"pagejs",
        "partial_topnav":"topnav",
        "partial_bwizard":"bwizard",
        "partial_cart":"cart",
        "css":"/public/css/step2.css",
        "js":"/public/js/step2.js",
        "user":req.user,
        "step2": 1 
        };
    res.render("step2",data);

});

router.get("/step3", (req, res) => { 
    var data = {
        "partial_css":"pagecss",
        "partial_js":"pagejs",
        "partial_topnav":"topnav",
        "partial_bwizard":"bwizard",
        "partial_cart":"cart",
        "css":"/public/css/step3.css",
        "js":"/public/js/step3.js",
        "user":req.user,
        "step3": 1
        };
    res.render("step3",data);

});

router.get("/step4", (req, res) => { 
    var data = {
        "partial_css":"pagecss",
        "partial_js":"pagejs",
        "partial_topnav":"topnav",
        "partial_bwizard":"bwizard",
        "partial_cart":"cart",
        "css":"/public/css/step4.css",
        "js":"/public/js/step4.js",
        "user":req.user,
        "step4": 1
        };
    res.render("step4",data);

});

function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()){
        return next()
    }
    res.redirect('/login');
}

module.exports = router;