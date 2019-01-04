var app = {};
export default app;

app.initFlickity = new Flickity('.carousel', {
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
  autoPlay: 1500,
  cellAlign: 'center',
  imagesLoaded: false,
  percentPosition: false,
  adaptiveHeight: true,
  freeScrollFriction: 0.03,
  imagesLoaded: true,
  accessibility: false,
  setGallerySize: false,
  fullscreen: false,
  pauseAutoPlayOnHover: false,
  freeScroll: true,
})

app.initSmoothScrolling = function(){
    // Smooth-Scrolling
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// /Smooth-Scrolling
}

//Scroll Navbar Animation
app.toggleNavbarTransparent = function(){
  if ($(window).scrollTop() == 0) {
    $('.navbar')
    .removeClass('bg-active')
    .addClass('bg-transparent')
  } else {
    $('.navbar')
    .removeClass('bg-transparent')
    .addClass('bg-active')
  }
  // Click burger button 
  $('.navbar-toggler').click(function() {

    if ($('.navbar').hasClass('bg-transparent') && 
        $(window).scrollTop() == 0) {

      $('.navbar')
      .removeClass('bg-transparent')
      .addClass('bg-active')

    } else if(
      $('.navbar').hasClass('bg-active') && 
      $(window).scrollTop() == 0) {

      $('.navbar')
      .removeClass('bg-active')
      .addClass('bg-transparent')
    }
  })
}