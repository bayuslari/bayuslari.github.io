var slariScript = {
    init: function() {
        slariScript.owl();
        slariScript.navResp();
        slariScript.alert();
    },
    owl: function() {
        jQuery('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: [
                "<i class='fa fa-chevron-left'></i>",
                "<i class='fa fa-chevron-right'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    },
    navResp: function() {
        jQuery('.open-nav').click(function() {
            jQuery('body').toggleClass('nav-mobile');
        })
        jQuery('.close-nav').click(function() {
            jQuery('body').removeClass('nav-mobile');
        })
    },
    alert: function() {
        jQuery('.logo').click(function(){
            alert("Hi, I'm Bayu");
        });
    },
};
jQuery(document).ready(function($) {
    slariScript.init();
});
