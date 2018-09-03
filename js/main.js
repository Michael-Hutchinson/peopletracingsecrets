$(document).ready(function(){
    $('.featured-images').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:2,
            },
            600:{
                items:4,
            },
            800:{
                items:5,
            },
            1000:{
                items:6,
            },
            1200:{
                items:8,
            },
            1400:{
                items:10,
            }
        }
    });
});