$(function() {
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
  $(window).scroll(function() {
        app.toggleNavbarTransparent();
    });
    app.toggleNavbarTransparent()
});