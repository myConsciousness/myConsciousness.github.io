"use strict";

(function ($) {
  fadeOutPreLoader();

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(".height-fix").each(function () {
      $(this).height($(this).height());
    });
  }

  scrollSmoothly();

  let lockTimer;

  $(window).scroll(function () {
    let windowTop = $(window).scrollTop();
    const sectionAboutTop = $("#about").offset().top;

    if (windowTop >= sectionAboutTop) {
      $("nav").addClass("fixed");
    } else if (windowTop + 50 < sectionAboutTop) {
      $("nav").removeClass("fixed");
    }

    const sectionWindowTop = windowTop + 50;

    if (
      sectionWindowTop > $("#contact").offset().top ||
      windowTop + $(window).height() === $(document).height()
    ) {
      highlightLink("contact");
    } else if (sectionWindowTop > $("#portfolio").offset().top) {
      highlightLink("portfolio");
    } else if (sectionWindowTop > $("#about").offset().top) {
      highlightLink("about");
    } else {
      highlightLink("shooting-star");
    }

    clearTimeout(lockTimer);

    if (!$("body").hasClass("disable-hover")) {
      $("body").addClass("disable-hover");
    }

    lockTimer = setTimeout(function () {
      $("body").removeClass("disable-hover");
    }, 500);

    function highlightLink(anchor) {
      $("nav .active").removeClass("active");
      $("nav")
        .find('[destination="' + anchor + '"]')
        .addClass("active");
    }
  });

  $("#gallery").mixItUp({});

  function onScrollInit(items, elemTrigger) {
    let offset = $(window).height() / 1.6;
    items.each(function () {
      let elem = $(this),
        animationClass = elem.attr("data-animation"),
        animationDelay = elem.attr("data-delay");

      elem.css({
        "-webkit-animation-delay": animationDelay,
        "-moz-animation-delay": animationDelay,
        "animation-delay": animationDelay,
      });

      let trigger = elemTrigger ? trigger : elem;

      trigger.waypoint(
        function () {
          elem.addClass("animated").addClass(animationClass);
          if (elem.get(0).id === "gallery") mixClear();
        },

        {
          triggerOnce: true,
          offset: offset,
        }
      );
    });
  }

  setTimeout(function () {
    onScrollInit($(".waypoint"));
  }, 10);

  function mixClear() {
    setTimeout(function () {
      $("#gallery").removeClass("waypoint");
    }, 2000);
  }

  function fadeOutPreLoader() {
    $(window).on("load", function () {
      $(".loader").fadeOut();
      $("#preloder").delay(200).fadeOut("slow");
    });
  }

  function scrollSmoothly() {
    $(".page-link").click(function () {
      const anchor = $(this).attr("destination");

      $("nav")
        .find('[destination="' + anchor + '"]')
        .addClass("active");

      $("html, body").animate(
        {
          scrollTop: $("#" + anchor).offset().top,
        },
        500
      );
    });
  }
})(jQuery);
