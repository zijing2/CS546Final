(function ($,localStorage) {
    var theme1 = $("#theme1");
    var theme2 = $("#theme2");
    var theme3 = $("#theme3");
    var theme4 = $("#theme4");
    var cake1 = $("#cake1");
    var cake2 = $("#cake2");
    var cake3 = $("#cake3");
    var cake4 = $("#cake4");
    var gift1 = $("#gift1");
    var gift2 = $("#gift2");
    var gift3 = $("#gift3");
    var gift4 = $("#gift4");
    var album1 = $("#album1");
    var album2 = $("#album2");
    var album3 = $("#album3");
    var album4 = $("#album4");
    
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

    //refill
    if(typeof localStorage["cart_product_tid"] != 'undefined'){
        for (var i = 1; i < 5; i++) {
            var theme_id = "theme"+i;
            if($("#"+theme_id).attr("tid")==localStorage["cart_product_tid"]){
                $("#"+theme_id).attr('checked',1);
            } 
        }
    }

    if(typeof localStorage["cart_product_cid"] != 'undefined'){
        for (var i = 1; i < 5; i++) {
            var cake_id = "cake"+i;
            if($("#"+cake_id).attr("cid")==localStorage["cart_product_cid"]){
                $("#"+cake_id).attr('checked',1);
            } 
        }
    }

    if(typeof localStorage["cart_product_gid"] != 'undefined'){
        for (var i = 1; i < 5; i++) {
            var gift_id = "gift"+i;
            if($("#"+gift_id).attr("gid")==localStorage["cart_product_gid"]){
                $("#"+gift_id).attr('checked',1);
            } 
        }
    }
    if(typeof localStorage["cart_product_aid"] != 'undefined'){
        for (var i = 1; i < 5; i++) {
            var album_id = "album"+i;
            if($("#"+album_id).attr("aid")==localStorage["cart_product_aid"]){
                $("#"+album_id).attr('checked',1);
            } 
        }
    }

    theme1.click(function(event){
        localStorage["cart_product_theme"] = this.nextElementSibling.innerText;
        localStorage["cart_product_tid"] = $(this).attr("tid");
        $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
        
    });

    theme2.click(function(event){
        localStorage["cart_product_theme"] = this.nextElementSibling.innerText;
        localStorage["cart_product_tid"] = $(this).attr("tid");
        $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
    });

    theme3.click(function(event){
        localStorage["cart_product_theme"] = this.nextElementSibling.innerText;
        localStorage["cart_product_tid"] = $(this).attr("tid");
        $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
    });

    theme4.click(function(event){
       localStorage["cart_product_theme"] = this.nextElementSibling.innerText;
       localStorage["cart_product_tid"] = $(this).attr("tid");
        $('#cart_product_theme')[0].innerText = localStorage["cart_product_theme"];
    });

    cake1.click(function(event){
        localStorage["cart_product_cake"] = this.nextElementSibling.innerText;
        localStorage["cart_product_cid"] = $(this).attr("cid");
        $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    });

    cake2.click(function(event){
        localStorage["cart_product_cake"] = this.nextElementSibling.innerText;
        localStorage["cart_product_cid"] = $(this).attr("cid");
        $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    });

    cake3.click(function(event){
        localStorage["cart_product_cake"] = this.nextElementSibling.innerText;
        localStorage["cart_product_cid"] = $(this).attr("cid");
        $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    });

    cake4.click(function(event){
       localStorage["cart_product_cake"] = this.nextElementSibling.innerText;
       localStorage["cart_product_cid"] = $(this).attr("cid");
        $('#cart_product_cake')[0].innerText = localStorage["cart_product_cake"];
    });

    gift1.click(function(event){
        localStorage["cart_product_gift"] = this.nextElementSibling.innerText;
        localStorage["cart_product_gid"] = $(this).attr("gid");
        $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    });

    gift2.click(function(event){
        localStorage["cart_product_gift"] = this.nextElementSibling.innerText;
        localStorage["cart_product_gid"] = $(this).attr("gid");
        $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    });

    gift3.click(function(event){
        localStorage["cart_product_gift"] = this.nextElementSibling.innerText;
        localStorage["cart_product_gid"] = $(this).attr("gid");
        $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    });

    gift4.click(function(event){
       localStorage["cart_product_gift"] = this.nextElementSibling.innerText;
       localStorage["cart_product_gid"] = $(this).attr("gid");
        $('#cart_product_gift')[0].innerText = localStorage["cart_product_gift"];
    });

    album1.click(function(event){
        localStorage["cart_product_album"] = this.nextElementSibling.innerText;
        localStorage["cart_product_aid"] = $(this).attr("aid");
        $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    });

    album2.click(function(event){
        localStorage["cart_product_album"] = this.nextElementSibling.innerText;
        localStorage["cart_product_aid"] = $(this).attr("aid");
        $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    });

    album3.click(function(event){
        localStorage["cart_product_album"] = this.nextElementSibling.innerText;
        localStorage["cart_product_aid"] = $(this).attr("aid");
        $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    });

    album4.click(function(event){
       localStorage["cart_product_album"] = this.nextElementSibling.innerText;
       localStorage["cart_product_aid"] = $(this).attr("aid");
        $('#cart_product_album')[0].innerText = localStorage["cart_product_album"];
    });
    
    
})(jQuery, window.localStorage);