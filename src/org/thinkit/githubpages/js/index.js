'use strict';

(function($) {

    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });


    $('#bar1').barfiller({
        barColor: "#04c2c9",
    });

    $('#bar2').barfiller({
        barColor: "#04c2c9",
    });

    $('#bar3').barfiller({
        barColor: "#04c2c9",
    });

})(jQuery);