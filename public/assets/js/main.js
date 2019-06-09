
    (function($) {
        "use strict";

    /*-------------------------------------------
    04. Sticky Header
    --------------------------------------------- */ 
    $(document).ready(function() {
        var win = $(window);
        var sticky_id = $("#sticky-header-with-topbar");
        win.on('scroll',function() {    
            var scroll = win.scrollTop();
            if (scroll < 245) {
            sticky_id.removeClass("scroll-header");
            }else{
            sticky_id.addClass("scroll-header");
            }
        });
    });

    /*----------------------------------------------------*/
    /*  testimonial slider
    /*----------------------------------------------------*/
    $(document).ready(function() {
        if ( $('.testimonial-carousel').length ){
            $('.testimonial-carousel').owlCarousel({
                loop:true,
                margin: 50,
                items: 3,
                nav:false,
                autoplay: true,
                smartSpeed: 1500,
                dots: false, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    767: {
                        items: 2,
                    },
                    1024: {
                        items: 3,
                    }
                }
            })
        }
    });
})(jQuery);