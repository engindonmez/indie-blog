$(document).ready(function () {
    $('select').select2({
        maximumSelectionLength: 5,
        multiple:true,
        search:true,
        placeholder: "Please select Category",
    }).val(null).trigger('change');
    $('.summernote').summernote();
    //$('#AddPost').click(function () {        
    //    var title = $('#Title').val();
    //    var body = $('#body').val().parseHTML();
    //    var bannerImage = $('#BannerImage').val();
    //    var commentable = $('#IsCommentable').val();
    //    //$.ajax({
    //    //    type: 'POST',
    //    //    url: 'Post/Add',
    //    //    data: '{"Title":"' + title + '","Body":"' + body + '","BannerImage":"' + bannerImage + '","IsCommentable":"' + commentable + '"}',
    //    //    contentType: "application/json; charset=utf-8",
    //    //    dataType: "json",
    //    //    success:function(data) {
    //    //        alert(data.d);
    //    //    },
    //    //    error: function(data) {
    //    //        alert('fail');
    //    //    }
    //    //});
    //    $.post("Add", { Title: title, Body: body, BannerImage: bannerImage, IsCommentable: commentable }, function (data) {
    //        alert('Success');
    //    });
    //});
    var register = $('.is-login p a');
    var login = $('.is-register p a');

    register.click(function() {
        $('#RegisterUser').removeClass('hidden').addClass('fadeInRight');
        $('#LoginUser').addClass('hidden');
        $('.is-register').removeClass('hidden');
        $('.is-login').addClass('hidden');
        $('.title-text p').html('Register');
    });
    login.click(function () {
        $('#LoginUser').removeClass('hidden').addClass('fadeInLeft');
        $('#RegisterUser').addClass('hidden');
        $('.is-login').removeClass('hidden');
        $('.is-register').addClass('hidden');
        $('.title-text p').html('Login');
    });
    var location = window.location.href;
    var routeType = location.split('#')[1];
    if(routeType == "register"){
        register.click();
    }
});