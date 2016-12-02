const express = require('express');
const data = require('../data')
const userData = data.user;
const router = express.Router();


router.get("/", (req, res) => {   
        res.render('register',{"partial_css":"pagecss","partial_topnav":"topnav","css":"../public/css/register.css"});
});

router.post("/newuser", (req, res) => {
	let email = req.body.email;
	let password = req.body.password;
	console.log(email);
	console.log(password);
	return userData.addUser(email, password).then((addResult) => {
		console.log("addResult");
		res.send(addResult);
	});

});


router.post("/emailCheck",(req,res)=>{
	let email = req.body.email;
	console.log(email);
	userData.checkEmail(email).then((checkResult)=>{
		console.log(checkResult);
		if(checkResult == true)
		{
			console.log("you could use the email address");
			res.send("1");
		}else{
			console.log("the email have already be registered");
			res.send("0");
		}
	});


})

module.exports = router;

