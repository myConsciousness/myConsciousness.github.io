'use strict';

(function($) {

    fadeOutPreLoader();

    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        $('.height-fix').each(function() {
            $(this).height($(this).height());
        });
    }

    var lockTimer;

    $(window).on('scroll', function() {

        let windowTop = $(window).scrollTop();

        if (windowTop - 100 > $('#home-divide').offset().top) {
            $('nav').addClass('fixed');
        } else if (windowTop < $('#home').offset().top) {
            $('nav').removeClass('fixed');
        }

        const sectionWindowTop = windowTop + 50;

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            highlightLink('contact');
        } else if (sectionWindowTop > $('#portfolio').offset().top) {
            highlightLink('portfolio');
        } else if (sectionWindowTop > $('#about').offset().top) {
            highlightLink('about');
        } else {
            highlightLink('home');
        }

        clearTimeout(lockTimer);

        if (!$('body').hasClass('disable-hover')) {
            $('body').addClass('disable-hover');
        }

        lockTimer = setTimeout(function() {
            $('body').removeClass('disable-hover');
        }, 500);

        function highlightLink(anchor) {
            $('nav .active').removeClass('active');
            $('nav')
                .find('[destination="' + anchor + '"]')
                .addClass('active');
        }
    });

    scrollSmoothly();

    function fadeOutPreLoader() {
        $(window).on('load', function() {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        });
    }

    function scrollSmoothly() {
        $('.page-link').click(function() {

            const anchor = $(this).attr('destination');

            $('nav')
                .find('[destination="' + anchor + '"]')
                .addClass('active');

            $('html, body').animate({
                    scrollTop: $('#' + anchor).offset().top
                },
                500
            );
        });
    }
})(jQuery);