new Flickity('.carousel', {
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

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('.tabs a')
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

//Scroll Navbar Animation
toggleNavbarTransparent = function(){
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
goTab = function(a) {
    var div = a.parent().parent().parent()
    var li = a.parent()

    if (li.hasClass("active")) {
      return false;
    }
    
    div.find(".tabs .active").removeClass("active")
    li.addClass("active")
    div.find(".tab-content.active").removeClass("active")
    div.find(a.attr("href")).addClass("active")
}

/**
 * @desc Ipsum permettant d'obtenir un text aléatoire de taille demandé.
 *       Utilisation de l'API www.randomtext.me/api/
 * @param {String} Size
 * @param {String} Words
 * @pram  {String} Element
 * @returns {Object}
 */
var ipsum = function(words, element, size) {
  var url_base = "http://www.randomtext.me/api/lorem/";
  switch (element) {
    case 'p':
    case 'paragraphs':
      element = 'p';
      var url =  url_base + `${element}-${size}/${words[0]}-${words[1]}`;
      break;
    case 'ul':
    case 'un-ordered list':
      element = 'ul';
      var url =  url_base + `${element}-${size}/${words[0]}-${words[1]}`;
      break;
    case 'ol':
    case 'ordered list':
      element = ol;
      var url =  url_base + `${element}-${size}/${words[0]}-${words[1]}`;
      break;
    case 'h1':
    case 'heading 1' :
      element = 'h1'
      var url =  url_base + `${element}/${words[0]}-${words[1]}`;
      break;
    case 'h2':
    case 'heading 2' :
      element = 'h2'
      var url =  url_base + `${element}/${words[0]}-${words[1]}`;
      break;
    case 'h3':
    case 'heading 3' :
      element = 'h3'
      var url =  url_base + `${element}/${words[0]}-${words[1]}`;
      break;
    case 'h4':
    case 'heading 4' :
      element = 'h4'
      var url =  url_base + `${element}/${words[0]}-${words[1]}`;
      break;
    default:
     var url = url_base;
     break;
  }
  $.getJSON(url, function(data) {
    data.toString = ()=>data.text_out;
    return(data)
  })
}



$(document).ready(function() {
    $(window).scroll(function() {
        toggleNavbarTransparent();
    });
    toggleNavbarTransparent()
    $('.date').text(new Date().getFullYear())



    // Init tab system
    $('.tabs a').click(function(event) {
        if (event.preventDefault){
          event.preventDefault();
        }
        event.returnValue = false;
        goTab($(this))
    })
    
    var hash = window.location.hash;
    var a = $('a[href="'+ hash +'"]')
    if (a !== null && !a.hasClass("active")) {
        goTab(a)
    }
});
