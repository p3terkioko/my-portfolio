$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 30){
            $('.navbar').addClass("sticky")

        }else{
            $('.navbar').removeClass("sticky")
        }
    })
    //toggle menu//
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    })
});