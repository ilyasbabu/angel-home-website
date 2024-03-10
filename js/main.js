$(document).ready(function () {
    "use strict";

    /*----MAIN SLIDER-----*/
    (function ($) {
        var MainSilderCarousel = $('.home-slider');
        if (MainSilderCarousel.length > 0) {
            MainSilderCarousel.owlCarousel({
                merge: true,
                loop: true,
                nav: false,
                center: false,
                dots: true,
                animateIn: 'fadeIn',
                autoplay: true,
                autoplayTimeout: 5000,
                margin: 0,
                items: 1,
            });
        }
    })(jQuery);

    /*----REVIEW SLIDER-----*/
    (function ($) {
        var testimonialCarousel = $('.review-slider');
        if (testimonialCarousel.length > 0) {
            testimonialCarousel.owlCarousel({
                margin: 16,
                loop: true,
                nav: false,
                center: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                items: 3,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true
                    },
                    1000: {
                        items: 2,
                        nav: false,
                        dots: true
                    }
                }
            });
        }
    })(jQuery);

    /*---- MOBILE FOOTER TOGGLE -----*/
    (function ($) {
        var contentwidth = jQuery(window).width();
        jQuery('.footer-title').addClass('active');
        jQuery('.footer-title').next().slideDown('normal');
    })(jQuery);

});

/*----WOW ANIMATION-----*/
(function ($) {
    var length = $('.wow').length;
    if (length >= 1) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
        });
        wow.init();
    }
})(jQuery);

$(window).on("scroll", function () {
    "use strict";
    var sections = $('section'),
        nav = $('.navbar-nav'),
        nav_height = nav.outerHeight() + 25;
    $(window).scrollTop() >= 20 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");

    var cur_pos = $(this).scrollTop();
    var contentwidth = jQuery(window).width();
    if ((contentwidth) > '991') {
        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('li').removeClass('active');
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
            }
        });
    }
}),
    $(".nav-item a").on("click", function (o) {
        var t = $(this);
        $('.nav-item').removeClass('active');
        $(t).parent().addClass('active');
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
        }, 1500, "easeInOutExpo"), o.preventDefault()
    }),
    $(document).on("click", ".navbar-collapse.show", function (o) {
        $(o.target).is("a") && $(this).collapse("hide")
    }),
    $(window).on("scroll", function () {
        $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
    }),
    $(".back_top").on("click", function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 1e3), !1
    });

if ($('#wave1').length && $('#wave2').length) {
    wavify(document.querySelector('#wave1'), {
        height: 40,
        bones: 4,
        amplitude: 40,
        color: '#fff',
        speed: .15
    });
    wavify(document.querySelector('#wave2'), {
        height: 20,
        bones: 3,
        amplitude: 40,
        color: 'rgba(255, 255, 255, .1)',
        speed: .25
    });
}

$("#year").text(new Date().getFullYear());