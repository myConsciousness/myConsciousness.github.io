'use strict';

(function($) {

    fadeOutPreLoader();

    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        $('.height-fix').each(function() {
            var h = $(this).height();
            $(this).height(h);
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
        let scrollHeight = $(document).height();
        let scrollPosition = $(window).height() + $(window).scrollTop();

        if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
            highlightLink('contact');
        } else if (sectionWindowTop > $('#portfolio').offset().top) {
            highlightLink('portfolio');
        } else if (sectionWindowTop > $('#about').offset().top) {
            highlightLink('about');
        } else {
            highlightLink('home');
        }

        // Prevent Hover on Scroll
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
    fillBars(10);

    function fadeOutPreLoader() {
        $(window).on('load', function() {
            $(".loader").fadeOut();
            $("#preloder").delay(200).fadeOut("slow");
        });
    }

    function scrollSmoothly() {
        $('.page-link').click(function() {
            var anchor = $(this).attr('destination');

            $('.link-wrap').removeClass('visible');
            $('nav span').removeClass('active');

            $('nav')
                .find('[dest="' + anchor + '"]')
                .addClass('active');

            $('html, body').animate({
                    scrollTop: $('#' + anchor).offset().top
                },
                500
            );
        });
    }

    function fillBars(count) {
        for (let i = 1; i < count; i++) {
            $('#bar' + String(i)).barfiller({
                barColor: "#04c2c9",
            });
        }
    }

})(jQuery);