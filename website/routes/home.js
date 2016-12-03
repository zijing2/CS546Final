const express = require('express');
const router = express.Router();


router.get("/home", (req, res) => {
        var data = {
                "partial_css":"pagecss",
                "partial_topnav":"topnav",
                "partial_js":"pagejs",
                "css":"/public/css/home.css",
                "js":"/public/js/home.js",
                "home":1,
                "user":req.user
        };
        res.render('home',data);
});

router.get("/price", (req, res) => {
        var data = {
                "partial_css":"pagecss",
                "partial_topnav":"topnav",
                "partial_js":"pagejs",
                "css":"/public/css/price.css",
                "js":"/public/js/price.js",
                "price":1,
                "user":req.user
        };
        res.render('price',data);
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