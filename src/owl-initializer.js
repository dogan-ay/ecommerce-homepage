$(document).ready(function(){
    
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    

    const owl = $('.owl-two').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:6
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        },
        
    });

    const owlThree = $('.owl-three').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:6
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        },
        
    });

    const owlFour = $('.owl-four').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:6
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        },
        
    });

    const owlFive = $('.owl-five').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,

        responsive:{
            0:{
                items:6
            },
            600:{
                items:6
            },
            1000:{
                items:6
            }
        },
        
    });

    $('.prev').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.next').click(function() {
        owl.trigger('prev.owl.carousel');
    })


    $('.prev-three').click(function() {
        owlThree.trigger('next.owl.carousel');
    })
    $('.next-three').click(function() {
        owlThree.trigger('prev.owl.carousel');
    })

    
    $('.prev-four').click(function() {
        owlFour.trigger('next.owl.carousel');
    })
    $('.next-four').click(function() {
        owlFour.trigger('prev.owl.carousel');
    })

    $('.prev-five').click(function() {
        owlFive.trigger('next.owl.carousel');
    })
    $('.next-five').click(function() {
        owlFive.trigger('prev.owl.carousel');
    })



});

 



