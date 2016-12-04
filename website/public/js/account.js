(function ($) {
    var btnCust = '<button type="button" class="btn btn-default" title="Add picture tags" ' + 
        'onclick="alert(\'Tag Adding function is under developing\')">' +
        '<i class="glyphicon glyphicon-tag"></i>' +
        '</button>'; 
    $("#avatar-1").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="/public/img/default_avatar_male.jpg" alt="Your Avatar" style="width:160px">',
        layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });

    $("#avatar-2").fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors-1',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="/public/img/avatar_pet_default.png" alt="Your Avatar" style="width:160px">',
        layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });


    //customize
    var user_form_reset = $("#user_form_reset");
    var user_form_save = $("#user_form_save");
    var user_name = $("#user_name");
    var user_gender = $("#user_gender");
    var user_birthday = $("#user_birthday");
    var user_phone = $("#user_phone");
    var user_address = $("#user_address");

    var pet_form_reset = $("#pet_form_reset");
    var pet_form_save = $("#pet_form_save");
    var pet_name = $("#pet_name");
    var pet_gender = $("#pet_gender");
    var pet_birthday = $("#pet_birthday");
    var pet_hobbies = $("#pet_hobbies");
    var pet_hates = $("#pet_hates");
    var pet_breed = $("#pet_breed");
    
    user_form_reset.click(function(){
        user_name.val("");
        user_gender[0][0].selected=true;
        user_birthday.val("");
        user_phone.val("");
        user_address.val("");
    });

    user_form_save.click(function(event){
       event.preventDefault();
        var requestConfig = {
                method: "POST",
                url: "/account/user",
                contentType: 'application/json',
                data: JSON.stringify({
                   "user_name" : user_name.val(),
                   "user_gender": user_gender.val(),
                   "user_birthday" : user_birthday.val(),
                   "user_phone" : user_phone.val(),
                   "user_address" : user_address.val()
                })
        };

        $.ajax(requestConfig).then(function (resObj) {

                if(resObj.success==1){
                    $("#user_form_success")[0].innerText = "modify success";
                    $("#user_form_success").show();
                }else{

                    $("#user_form_error")[0].innerText = resObj.error;
                    $("#user_form_error").show();
                }
        });
    });

    pet_form_reset.click(function(){
        pet_name.val("");
        pet_gender[0][0].selected=true;
        pet_breed[0][0].selected=true;
        pet_birthday.val("");
        pet_hobbies.val("");
        pet_hates.val("");
    });

    pet_form_save.click(function(event){
       event.preventDefault();
        var requestConfig = {
                method: "POST",
                url: "/account/pet",
                contentType: 'application/json',
                data: JSON.stringify({
                   "pet_name" : pet_name.val(),
                   "pet_gender": pet_gender.val(),
                   "pet_birthday" : pet_birthday.val(),
                   "pet_breed" : pet_breed.val(),
                   "pet_hobbies" : pet_hobbies.val(),
                   "pet_hates" : pet_hates.val()
                })
        };

        $.ajax(requestConfig).then(function (resObj) {

                if(resObj.success==1){
                    $("#pet_form_success")[0].innerText = "modify success";
                    $("#pet_form_success").show();
                }else{

                    $("#pet_form_error")[0].innerText = resObj.error;
                    $("#pet_form_error").show();
                }
        });
    });
    


 })(jQuery);