'use strict';

(function($) {

    fadeOutPreLoader();
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
                400
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