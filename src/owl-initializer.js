$(document).ready(function(){
    
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        dots:true,
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
        owl.trigger('prev.owl.carousel');
    })
    $('.next').click(function() {
        owl.trigger('next.owl.carousel');
    })

});

 



