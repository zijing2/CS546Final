(function ($,localStorage) {
    var order_package = $("#order_package");
    var order_price = $("#order_price");
    var order_time = $("#order_time");
    var order_phone = $("#order_phone");
    var order_address = $("#order_address");
    var order_product_theme = $("#order_product_theme");
    var order_product_gift = $("#order_product_gift");
    var order_product_cake = $("#order_product_cake");
    var order_product_album = $("#order_product_album");
    var place_order = $("#place_order");

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

    order_package[0].innerText = localStorage["cart_package"];
    order_price[0].innerText = localStorage["cart_package_price"];
    order_time[0].innerText = localStorage["cart_date"];
    order_phone[0].innerText = localStorage["cart_phone"];
    order_address[0].innerText = localStorage["cart_address"];
    order_product_theme[0].innerText = localStorage["cart_product_theme"];
    order_product_gift[0].innerText = localStorage["cart_product_gift"];
    order_product_cake[0].innerText = localStorage["cart_product_cake"];
    order_product_album[0].innerText = localStorage["cart_product_album"];

    place_order.click(function(){
        var requestConfig = {
                method: "POST",
                url: "/order",
                contentType: 'application/json',
                data: JSON.stringify({
                    order_package: localStorage["cart_package"],
                    order_price: localStorage["cart_package_price"],
                    order_product_theme: localStorage["cart_product_theme"],
                    order_product_cake: localStorage["cart_product_cake"],
                    order_product_gift:localStorage["cart_product_gift"],
                    order_product_album:localStorage["cart_product_album"],
                    order_address:localStorage["cart_address"],
                    order_phone:localStorage["cart_phone"],
                    order_time:localStorage["cart_date"],
                })
        };

        $.ajax(requestConfig).then(function (resObj) {

                if(resObj.created==1){
                    localStorage.clear(); 
                    location.href = "/order";
                }else{
                    $("#form_submit_err")[0].innerText = resObj.err;
                    $("#form_submit_err").show();
                }
        });
    });
    



})(jQuery, window.localStorage);
