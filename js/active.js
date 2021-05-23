/*slider-active*/
$(document).ready(function(){

    jQuery('mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: 'mobile-menu',
        
    });




    $('.slider-active').owlCarousel({
        loop:true,
       
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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
    })


})

/*project-active*/

$('.project-active').owlCarousel({
    loop:true,
   
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:4
        }
    }


})

/*video popup*/

$('.video-popup').magnificPopup({
    type: 'iframe',
   // other: options,
  });

/*blog active*/

  $('.blog-active').owlCarousel({
    loop:true,
   
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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


})

/*tsm-active*/

$('.tsm-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
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


})

/*brand area*/

$('.brand-active').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:6
        }
    }


})

jQuery('header nav').meanmenu();


