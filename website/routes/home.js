const express = require('express');
const router = express.Router();


router.get("/home", (req, res) => {
        var data = {
                "partial_css":"pagecss",
                "partial_topnav":"topnav",
                "partial_js":"pagejs",
                "css":"../public/css/home.css",
                "js":"/public/js/home.js",
                "user":req.user
        };
        res.render('home',data);
});

router.get("/", (req, res) => {
        var data = {
                "partial_css":"pagecss",
                "partial_topnav":"topnav",
                "partial_js":"pagejs",
                "css":"../public/css/home.css",
                "js":"/public/js/home.js",
                "user":req.user
        }   
        res.render('home',data);
});





module.exports = router;