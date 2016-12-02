(function ($) {
    
    // Let's store a reference to our h1#the-heading
    var emailInput = $("#Emailaddress"),
        passwordInput = $("#Password"),
        myButton = $("#myButton");

    myButton.click(function () {
        email = emailInput.val();
        password = passwordInput.val();
        console.log("check1");
        console.log(email);
        console.log(password);
        var postRequest = {
            method: "POST",
            url: "/login",
            data: {
                email: email,
                password: password
            },
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

        $.ajax(postRequest).then((resmss)=>{
            if(resmss) window.location.href = '/home';
            else alert("wrong input of E-mail or password ");
        })

    })



})(jQuery); 