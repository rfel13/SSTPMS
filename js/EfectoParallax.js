// Parallaxing + añadir clase activa en el scroll
$(document).scroll(function () {

  // parallaxing
  var $movebg = $(window).scrollTop() * -0.3;
  $('.portion').css('background-positionY', ($movebg) + 'px');

  // añadir clase activa para navegar en el scroll
  var scrollPos = $(document).scrollTop() + 100;
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
  });

  //cambio de paddind de la navegación en el scroll
  if (scrollPos > 250) {
    $('nav a').addClass('small');
    $('nav img').addClass('move');
    $('nav span').removeClass('movetext');
  } else {
    $('nav a').removeClass('small');
    $('nav img').removeClass('move');
    $('nav span').addClass('movetext');
  }

});


