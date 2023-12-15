

(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        $(".banner-slider-active").owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dot: true,
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                768: {
                    items: 1,

                },
                1000: {
                    items: 1,

                }
            }


        });

    });


    jQuery(window).load(function () {


    });


}(jQuery));	