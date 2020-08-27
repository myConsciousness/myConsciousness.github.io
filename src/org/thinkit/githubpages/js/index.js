'use strict';

(function($) {

    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });


    for (let i = 1; i < 9; i++) {
        $('#bar' + String(i)).barfiller({
            barColor: "#04c2c9",
        });
    }


})(jQuery);