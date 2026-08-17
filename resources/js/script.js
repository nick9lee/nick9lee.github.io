$(document).ready(function () {

    /*---sticky nav---*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /*---scroll on buttons---*/
    var navTargets = {
        '.js--scroll-to-about-me': '.js--about-me',
        '.js--scroll-to-experience': '.js--experience',
        '.js--scroll-to-projects': '.js--projects',
        '.js--scroll-to-contacts': '.js--contacts'
    };

    $.each(navTargets, function (trigger, target) {
        $(trigger).click(function (e) {
            e.preventDefault(); /* stop the href="#" jump to top */

            var $target = $(target);
            if (!$target.length) return;

            /* offset so the sticky nav doesn't cover the heading */
            var navHeight = $('nav').hasClass('sticky') ? $('nav').outerHeight() : 0;

            $('html, body').animate({
                scrollTop: $target.offset().top - navHeight
            }, 700);

            /* close the mobile menu after picking a destination */
            if ($('.mobile-nav-icon').is(':visible')) {
                closeMobileNav();
            }
        });
    });

    /*------mobile nav-----------*/
    var $nav = $('.js--main-nav');
    var $icon = $('.js--nav-icon');

    function openMobileNav() {
        $nav.slideDown(200);
        $icon.attr('aria-expanded', 'true')
            .find('i').removeClass('ion-navicon-round').addClass('ion-close-round');
    }

    function closeMobileNav() {
        $nav.slideUp(200);
        $icon.attr('aria-expanded', 'false')
            .find('i').removeClass('ion-close-round').addClass('ion-navicon-round');
    }

    $icon.attr('aria-expanded', 'false').click(function (e) {
        e.preventDefault(); /* keep the href="#" from scrolling the page */

        if ($icon.find('i').hasClass('ion-navicon-round')) {
            openMobileNav();
        } else {
            closeMobileNav();
        }
    });

    /* slideToggle leaves an inline display value behind. Clear it when we
       cross back to desktop so the nav can't get stuck hidden. */
    var wasMobile = $('.mobile-nav-icon').is(':visible');

    $(window).resize(function () {
        var isMobile = $('.mobile-nav-icon').is(':visible');

        if (wasMobile && !isMobile) {
            $nav.removeAttr('style');
            $icon.attr('aria-expanded', 'false')
                .find('i').removeClass('ion-close-round').addClass('ion-navicon-round');
        }

        wasMobile = isMobile;
    });
});
