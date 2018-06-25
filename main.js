$("#dead").hide();
$("#hearteyes").hide();
$("#mean").hide();

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

$(".navbar-nav li a").click(function (event) {
  $(".navbar-collapse").collapse('hide');
});

$("#introBtn").click(() => {
  $('html, body').animate({
    scrollTop: $("#About").offset().top
  }, 2000);
});

$("#_Mouse_").mouseover(() => {
  $("#wakey").css({
    "opacity": 1,
    "transition": ".1s ease-in-out"});
  $("#_Head_").css({
    "animation-play-state": "paused"
  });
});

$("#_Mouse_").mouseout(() => {
  $("#wakey").css("opacity", 0);
  $("#_Head_").css({
    "animation-play-state": "running"
  });
});

$("#hateBtn").click(() => {
  $("#mean").show();
  $("#wakey").hide();
  $("#hearteyes").hide();
});

$("#loveBtn").click(() => {
  $("#hearteyes").show();
  $("#wakey").hide();
  $("#mean").hide();
});

$("#introBtn").

mouseModal = (event) => {
  const target = event.target;
  if (event.target.is("#_Mouse_") && $("#_Mouse_").mousedown()) {
      event.target($("#InterestModal"));
    }
  }

  //   $("#_Mouse_").mousedown(() => {
  //     $("#dead").show();
  //     $("#_Mouse_").hide();
  //   });

  // // mouseClicks();
  // mouseModal();