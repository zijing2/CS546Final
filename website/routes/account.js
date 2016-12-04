const express = require('express');
const router = express.Router();
const data = require("../data");
const user = data.user;


router.all('/*', isLoggedIn);
router.get("/", (req, res) => {  

        user.getPetbyUid(req.user._id).then((pet)=>{
                user.getUserById(req.user._id).then((user)=>{
                if(pet!='' && typeof pet!='undefined' && pet!=null){
                        var pet_attr = pet.breed;
                        pet[pet_attr] = 1;
                        var pet_attr2 = pet.gender;
                        pet[pet_attr2] = 1;
                }

                var user_attr = user.profile.gender;
                user.profile[user_attr] = 1;
                
                var data = {
                        "partial_css":"pagecss",
                        "partial_topnav":"topnav",
                        "partial_js":"pagejs",
                        "css":"/public/css/account.css",
                        "js":"/public/js/account.js",
                        "account":1,
                        "title":"PetPar-Account",
                        "user":user,
                        "pet":pet
                };
               
               console.log(user);

               res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                res.header("Pragma", "no-cache");
                res.header("Expires", 0);
                res.render('account',data);
                });
                
        });
    
    
});

router.post("/user", (req, res) => {
        user.updateUser(req.user._id,req.body).then((user)=>{
                 res.status(200).json({"success":1,"user":user});
        }).catch((err)=>{
                res.status(200).json({"error":err});
        });

});  

router.post("/pet", (req, res) => {
        user.updatePetbyOwnerId(req.user._id,req.body).then((pet)=>{
                 res.status(200).json({"success":1,"user":pet});
        }).catch((err)=>{
                res.status(200).json({"error":err});
        });

}); 


function isLoggedIn(req, res, next) {
    //console.log(req.isAuthenticated());
    if (req.isAuthenticated()&&req.user._id){
        return next()
    }
    res.redirect('/login');
}


module.exports = router;