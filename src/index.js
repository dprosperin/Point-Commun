// Init the library
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import Flickity from 'flickity';
import Rellax from 'rellax';
// Import png
import  './images/grid.png';
import  './images/arrowUp.png';
import  './images/arrowDown.png';
import  './images/facebook.png';
import  './images/twitter.png';
// Init css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flickity/css/flickity.css';
import './css/app.css';

let rellax = new Rellax('.rellax');
let flky = new Flickity('.carousel', {
    pageDots: false,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: true,
    imagesLoaded: false, 
    percentPosition: false
})

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
$('.date').text(new Date().getFullYear())