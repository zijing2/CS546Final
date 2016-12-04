(function ($,localStorage) {
    var date = $("#date");
    var address = $("#address");
    var phone = $("#phone");
    var preBtn = $("#pre_btn");
    var nextBtn = $("#next_btn");
    
    //init localStorage
    typeof localStorage["cart_package"]=='undefined' && (localStorage["cart_package"]='') ;
    typeof localStorage["cart_product_theme"]=='undefined' && (localStorage["cart_product_theme"]='') ;
    typeof localStorage["cart_product_cake"]=='undefined' && (localStorage["cart_product_cake"]='') ;
    typeof localStorage["cart_product_gift"]=='undefined' && (localStorage["cart_product_gift"]='') ;
    typeof localStorage["cart_product_album"]=='undefined' && (localStorage["cart_product_album"]='') ;
    typeof localStorage["cart_date"]=='undefined' && (localStorage["cart_date"]='') ;
    typeof localStorage["cart_address"]=='undefined' && (localStorage["cart_address"]='') ;
    typeof localStorage["cart_phone"]=='undefined' && (localStorage["cart_phone"]='') ;

    //init cart inform
    $('#cart_package')[0].innerText = localStorage["cart_package"];
    $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
    $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    $('#cart_date')[0].innerText = localStorage["cart_date"];
    $('#cart_address')[0].innerText = localStorage["cart_address"];
    $('#cart_phone')[0].innerText = localStorage["cart_phone"];

    //refill
    if(typeof localStorage["cart_date"] != 'undefined'){
        $("#date").val(localStorage["cart_date"]) ;
    }

    if(typeof localStorage["cart_address"] != 'undefined'){
        $("#address").val(localStorage["cart_address"]) ;
    }

    if(typeof localStorage["cart_phone"] != 'undefined'){
        $("#phone").val(localStorage["cart_phone"]) ;
    }

    preBtn.click(function(){
        localStorage["cart_date"] = date.val();
        $('#cart_date')[0].innerText = localStorage["cart_date"];
        localStorage["cart_address"] = address.val();
        $('#cart_address')[0].innerText = localStorage["cart_address"];
        localStorage["cart_phone"] = phone.val();
        $('#cart_phone')[0].innerText = localStorage["cart_phone"];
    });

    nextBtn.click(function(){
         localStorage["cart_date"] = date.val();
        $('#cart_date')[0].innerText = localStorage["cart_date"];
        localStorage["cart_address"] = address.val();
        $('#cart_address')[0].innerText = localStorage["cart_address"];
        localStorage["cart_phone"] = phone.val();
        $('#cart_phone')[0].innerText = localStorage["cart_phone"];
    });

    

     
    

})(jQuery, window.localStorage);