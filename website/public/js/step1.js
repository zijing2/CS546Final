(function ($,localStorage) {
    var package_standard = $("#package_standard");
    var package_vip = $("#package_vip");
    var package_vvip = $("#package_vvip");
    
    //init localStorage
    typeof localStorage["cart_package"]=='undefined' && (localStorage["cart_package"]='') ;
    typeof localStorage["cart_product_theme"]=='undefined' && (localStorage["cart_product_theme"]='') ;
    typeof localStorage["cart_product_cake"]=='undefined' && (localStorage["cart_product_cake"]='') ;
    typeof localStorage["cart_product_gift"]=='undefined' && (localStorage["cart_product_gift"]='') ;
    typeof localStorage["cart_product_album"]=='undefined' && (localStorage["cart_product_album"]='') ;
    typeof localStorage["cart_date"]=='undefined' && (localStorage["cart_date"]='') ;
    typeof localStorage["cart_address"]=='undefined' && (localStorage["cart_address"]='') ;
    typeof localStorage["cart_phone"]=='undefined' && (localStorage["cart_phone"]='') ;

    $('#cart_package')[0].innerText = localStorage["cart_package"];
    $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
    $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    $('#cart_date')[0].innerText = localStorage["cart_date"];
    $('#cart_address')[0].innerText = localStorage["cart_address"];
    $('#cart_phone')[0].innerText = localStorage["cart_phone"];

    
    package_standard.click(function(event){
        localStorage["cart_package"] = "standard";
        localStorage["cart_package_price"] = "50";
        $('#cart_package')[0].innerText = localStorage["cart_package"];
    });

    package_vip.click(function(event){
       localStorage["cart_package"] = "vip";
       localStorage["cart_package_price"] = "200";
       $('#cart_package')[0].innerText = localStorage["cart_package"];
    });

    package_vvip.click(function(event){
        localStorage["cart_package"] = "vvip";
        localStorage["cart_package_price"] = "500";
        $('#cart_package')[0].innerText = localStorage["cart_package"];
    });

})(jQuery, window.localStorage);