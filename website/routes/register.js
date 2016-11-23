const express = require('express');
const userData = require('../data/user.js')
const router = express.Router();


router.get("/", (req, res) => {   
        res.render('register',{"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/register.css"});
});

router.post("/newuser",(req, res)=>{
	console.log(req.body);
	let email = req.body.email;
	let password = req.body.password;
	// userData.checkEmail(email).then((check)=>{
	// 	if(check == false)
	// 	{
	// 		console.log("you could use the email address");
	// 	}else{
	// 		console.log("the email have already be registered");
	// 	}

	// });




});

module.exports = router;