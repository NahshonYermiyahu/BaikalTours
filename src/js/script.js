$(document).ready(function () {
  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#popup])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // $('.js-start').click(function () {
  //   $('html, body').animate({scrollTop: $('.js-target').offset().top}, 1000);
  // });
});
