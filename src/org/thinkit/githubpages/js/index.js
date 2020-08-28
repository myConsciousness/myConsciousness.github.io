'use strict';

(function($) {

    var isMobile;

    if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        isMobile = true;

        $('.height-fix').each(function() {
            var h = $(this).height();
            $(this).height(h);
        });
    }

    fadeOutPreLoader();

    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer;

    $(window).on('scroll', function() {
        var pos = $(window).scrollTop();
        var pos2 = pos + 50;
        var scrollBottom = pos + $(window).height();

        if (!isMobile) {
            if (pos >= navPos + $('nav').height() && lastPos < pos) {
                $('nav').addClass('fixed');
            }

            if (pos < navPos && lastPos > pos) {
                $('nav').removeClass('fixed');
            }

            lastPos = pos;
        }

        if (pos2 > $('#home').offset().top) {
            highlightLink('home');
        }

        if (pos2 > $('#about').offset().top) {
            highlightLink('about');
        }

        if (pos2 > $('#portfolio').offset().top) {
            highlightLink('portfolio');
        }

        if (
            pos2 > $('#contact').offset().top ||
            pos + $(window).height() === $(document).height()
        ) {
            highlightLink('contact');
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

            // $('.link-wrap').removeClass('visible');
            // $('nav span').removeClass('active');

            // $('nav')
            //     .find('[dest="' + anchor + '"]')
            //     .addClass('active');

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