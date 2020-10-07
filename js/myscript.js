var flag1 = 1;
var flag2 = 1;
var flag3 = 1;
var windowHeight = window.innerHeight;

$('.portfolio_cont').css('height', ''+windowHeight+'px');

$('.contacts .section_3 .social_1 img').on('click', function() {
    if(flag1 == 1){
    $('.section_3 .social_1 .link').css('max-width', '30vw');
    $('.section_3 .social_1 .link').css('font-size', '2vw');
    $('.contacts_min .section_3 .social_1 .link_a').css('font-size', '2.6vw');
    $('.section_3 .social_1 .link').css('left', '-3vw');
    $('.section_3 .social_1 img').css('left', '-5vw');
    flag1=0;
  	}
    else {
    $('.section_3 .social_1 .link').css('max-width', '0');
    $('.section_3 .social_1 .link').css('font-size', '0');
    $('.section_3 .social_1 .link').css('left', '10vw');
    $('.section_3 .social_1 img').css('left', '10vw');
    flag1=1;
    }
});

$('.contacts .section_3 .social_2 img').on('click', function() {
    if(flag2 == 1){
    $('.section_3 .social_2 .link').css('max-width', '30vw');
    $('.section_3 .social_2 .link').css('font-size', '2vw');
    $('.contacts_min .section_3 .social_2 .link_a').css('font-size', '2.6vw');
    $('.section_3 .social_2 .link').css('left', '-3vw');
    $('.section_3 .social_2 img').css('left', '-5vw');
    flag2=0;
  	}
    else {
    $('.section_3 .social_2 .link').css('max-width', '0');
    $('.section_3 .social_2 .link').css('font-size', '0');
    $('.section_3 .social_2 .link').css('left', '10vw');
    $('.section_3 .social_2 img').css('left', '10vw');
    flag2=1;
    }
});

$('.contacts .section_3 .social_3 img').on('click', function() {
    if(flag3 == 1){
    $('.contacts .section_3 .social_3 .link').css('max-width', '30vw');
    $('.contacts .section_3 .social_3 .link').css('font-size', '2vw');
    $('.contacts_min .section_3 .social_3 .link_a').css('font-size', '2.6vw');
    $('.contacts .section_3 .social_3 .link').css('left', '-3vw');
    $('.contacts .section_3 .social_3 img').css('left', '-5vw');
    flag3=0;
  	}
    else {
    $('.contacts .section_3 .social_3 .link').css('max-width', '0');
    $('.contacts .section_3 .social_3 .link').css('font-size', '0');
    $('.contacts .section_3 .social_3 .link').css('left', '10vw');
    $('.contacts .section_3 .social_3 img').css('left', '10vw');
    flag3=1;
    }
});

$(window).on('resize', function() {
	windowHeight = window.innerHeight;
	$('.portfolio_cont').css('height', ''+windowHeight+'px');
});

$('.portfolio .img_1').on('click', function() {
    $('.portfolio_cont_1').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_2').on('click', function() {
    $('.portfolio_cont_2').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_3').on('click', function() {
    $('.portfolio_cont_3').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_4').on('click', function() {
    $('.portfolio_cont_4').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_5').on('click', function() {
    $('.portfolio_cont_5').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_6').on('click', function() {
    $('.portfolio_cont_6').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .img_7').on('click', function() {
    $('.portfolio_cont_7').css('display', 'block');
    $('.portfolio .cross').css('display', 'block');
});

$('.portfolio .cross').on('click', function() {
    $('.portfolio_cont').css('display', 'none');
    $('.portfolio .cross').css('display', 'none');
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 90) {        
        $('.navigation-menu').css('max-width', '50vw');
        $('.navigation-menu__toggle').css('display', 'block');
        $('.menu-list').css('display', 'block');
    } else {
       $('.navigation-menu').css('max-width', '0'); 
       $('.js-nav-menu').removeClass('navigation-menu--open');
       $('.navigation-menu__toggle').css('display', 'none');
       $('.menu-list').css('display', 'none');
    } 
});



(function($) {
  $('.js-nav-menu-toggle').on('click', function() {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
  });
  
  $('html').on('click', function(e) {
    if(!$(e.target).closest('.js-nav-menu').length &&
      ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
        $('.js-nav-menu').removeClass('navigation-menu--open');
    }
  });
})(jQuery);

$(document).ready(function() {
    (function($){
        var x1 = 0;
        var y1 = 0;
        var x2 = 0;
        var y2 = 0;
        var x3 = 0;
        var y3 = 0;
        var x4 = 0;
        var y4 = 0;
        var x5 = 0;
        var y5 = 0;
        var x6 = 0;
        var y6 = 0;
        var bgImg1 = $(".fon_1");
        var bgImg2 = $(".fon_2");
        var bgImg3 = $(".fon_3");
        var bgImg4 = $(".fon_4");
        var bgImg5 = $(".fon_5");
        var bgImg6 = $(".fon_6");
        bgImg1.css('background-position', x1 + 'px' + ' ' + y1 + 'px');
        bgImg2.css('background-position', x2 + 'px' + ' ' + y2 + 'px');
        bgImg3.css('background-position', x3 + 'px' + ' ' + y3 + 'px');
        bgImg4.css('background-position', x4 + 'px' + ' ' + y4 + 'px');
        bgImg5.css('background-position', x5 + 'px' + ' ' + y5 + 'px');
        bgImg6.css('background-position', x6 + 'px' + ' ' + y6 + 'px');

        var timer = setInterval(function() {
            bgImg1.css('background-position', x1 + 'px' + ' ' + y1 + 'px');
            x1--;
            bgImg2.css('background-position', x2 + 'px' + ' ' + y2 + 'px');
            x2++;
            bgImg3.css('background-position', x3 + 'px' + ' ' + y3 + 'px');
            x3--;
            bgImg4.css('background-position', x4 + 'px' + ' ' + y4 + 'px');
            x4++;
            bgImg5.css('background-position', x5 + 'px' + ' ' + y5 + 'px');
            x5--;
            bgImg6.css('background-position', x6 + 'px' + ' ' + y6 + 'px');
            x6++;
        },45);
    })(jQuery);
});