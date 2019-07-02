    $(document).ready(function () {
    $('a').on('click', function (e) {
      
      $(".menu").removeClass("collapsed-menu");
      $(".fa-times").addClass("hamburger-hid");
    $(".fa-bars").removeClass("hamburger-hid");
        // e.preventDefault();

        var target = this.hash,
            $target = $(target);

       $('html, body').stop().animate({
        'scrollTop': $target.offset().top-25
    }, 900, 'swing', function () {
    });

        console.log(window.location);

        return false;
    });
});

$(document).on('scroll', function() {
    if($(this).scrollTop()>=$('#show-nav').position().top){
        $("nav").addClass("sticky-nav");
  $(".logo").addClass("logo-scroll");
      $(".menu").addClass("menu-sticky");
    }
  else{
    $("nav").removeClass("sticky-nav");
    $(".logo").removeClass("logo-scroll");
    $(".menu").removeClass("menu-sticky");
  }
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



$('.ham1').click(function(){
    $(".fa-bars").addClass("hamburger-hid");
    $(".fa-times").removeClass("hamburger-hid");
  $(".menu").addClass("collapsed-menu");
   
});

$('.ham2').click(function(){
    $(".fa-times").addClass("hamburger-hid");
    $(".fa-bars").removeClass("hamburger-hid");
  $(".menu").removeClass("collapsed-menu");
   
});




$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 767) { 
        $('#menu-change').removeClass('container');
        $('#menu-change').addClass('container-fluid');
        $(".fa-times").addClass("hamburger-hid");
    $(".fa-bars").removeClass("hamburger-hid");
        
      }
    else
    {
        $('.menu').removeClass('collapsed-menu');
        $('#menu-change').addClass('container');
        $('#menu-change').removeClass('container-fluid');
      
    }

});