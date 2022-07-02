$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //scroll-up
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
  
    //slider del dedo
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // toggle del menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-bt n i').toggleClass("active");
    });

    //animar letra
    var typed = new Typed(".letra", {
        strings: ["Developer", "FullStack","Software"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".letra-2", {
        strings: ["Developer", "FullStack","Software"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});