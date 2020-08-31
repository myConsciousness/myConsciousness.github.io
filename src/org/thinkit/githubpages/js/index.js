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

    scrollSmoothly();

    $('.fa-bars').click(function() {
        $('.link-wrap').toggleClass('visible');
    });

    let lockTimer;

    $(window).scroll(function() {

        let windowTop = $(window).scrollTop();
        const sectionAboutTop = $('#about').offset().top;

        if (windowTop >= sectionAboutTop) {
            $('nav').addClass('fixed');
        } else if (windowTop + 50 < sectionAboutTop) {
            $('nav').removeClass('fixed');
        }

        const sectionWindowTop = windowTop + 50;

        if (sectionWindowTop > $('#contact').offset().top ||
            windowTop + $(window).height() === $(document).height()) {
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

    function fadeOutPreLoader() {
        $(window).on('load', function() {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        });
    }

    function scrollSmoothly() {
        $('.page-link').click(function() {

            const anchor = $(this).attr('destination');

            $('.link-wrap').removeClass('visible');
            $('nav span').removeClass('active');

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