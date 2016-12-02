(function ($) {
    // Let's store a reference to our h1#the-heading
    var emailInput = $("#Emailaddress"),
        passwordInput = $("#Password"),
        rePasswordInput = $("#Re_Password"),
        myButton = $("#myButton"),
        resetButton = $("#ResetButton");
        var emailcheck =  /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
        console.log("sasdasdasdas");


    emailInput.blur(function(){
        var postRequest = {
                method: "POST",
                url: "/register/emailCheck",
                contentType: 'application/json',
                data: JSON.stringify({
                    email: emailInput.val()
                 })
            };

            $.ajax(postRequest).then(function (responseMessage) {
                console.log(responseMessage);   
                if(responseMessage==="0") 
                {
                    emailInput.css("background-color","#FF0000"); 
                    alert("This email has been used");
                }else emailInput.css("background-color","#ffffff"); 
            });

    });


    resetButton.click(function(){
        emailInput.val("");
        passwordInput.val("");
        rePasswordInput.val("");
    }),

    myButton.click(function(){
        let email = emailInput.val();
        let password = passwordInput.val();
        let rePassword = rePasswordInput.val();
        let check  = "";

        if(!email)
        {
           check += "Email address can't not be empty.\n"; 
        }else if(!emailcheck.test(email))
        {
           check += "Please write the right email address.\n";
        }

        if(!password)
        {
           check += "Password  can't not be empty.\n";

        }

        if(rePassword!=password)
        {
            check +="The repeat password can not match your password.\n";
        }

        if(check!="")
        {
            console.log(check);
            alert(check);
            return false;
        }else{

            var postRequest = {
                method: "POST",
                url: "/register/newuser",
                contentType: 'application/json',
                data: JSON.stringify({
                    email: email,
                    password: password
                }),
                error : function(jqXHR, textStatus, errorThrown){
                switch (jqXHR.status){  
                case(500):  
                    alert("The server error happen");  
                    break;  
                case(401):  
                    alert("Wrong input of E-mail or password");  
                    break;  
                case(403):  
                    alert("You have not auth to do that!");  
                    break;  
                case(408):  
                    alert("time out");  
                    break;  
                default:  
                    alert("I don't know what happened ");  
            }  
            }
            };

            $.ajax(postRequest).then((resmess)=>{
                if(resmess) window.location.href = '/home';
            })
            

        }


    })




})(jQuery); 